const fs = require('fs');
const path = require('path');
const util = require('util');

const centroid = require('polygon-centroid');
const csv = require('csv');
const h3js = require('h3-js');
const iconv = require('iconv-lite');
const tokml = require('tokml');
const xml2js = require('xml2js');

const MIN_RESOLUTION = 4;
const MAX_RESOLUTION = 7;

const CODE_COLUMN = 0;
const SKIP_COLUMN = 4;

const MAX_OPACITY = 0.75;


async function loadGeoKml(kmlPath) {
    const kml = await util.promisify(fs.readFile)(kmlPath);
    return xml2js.parseStringPromise(kml);
}

function obtainMeshToH3Map(kmlData, resolution) {
    const placemarks = kmlData.kml.Document[0].Folder[0].Placemark;

    let h3Map = {};
    placemarks.forEach(placemark => {
        const polygonStr = placemark.Polygon[0].outerBoundaryIs[0].LinearRing[0].coordinates[0];
        const polygon = polygonStr.split('\n').map(line => line.trim()).filter(line => line).map((line) => {
            const position = line.split(',').slice(0, 2).map(pos => parseFloat(pos));
            return { x: position[0], y: position[1] };
        });

        const name = placemark.name[0];
        const center = centroid(polygon);
        h3Map[name] = h3js.geoToH3(center.y, center.x, resolution);
    });
    return h3Map;
}

async function parseStatsCsv(csvPath, h3Map) {
    return new Promise((resolve, reject) => {
        let statsKeys = [], h3Stats = {};

        const parser = csv.parse({from_line: 2}, (error, data) => {
            data.forEach((element, index) => {
               if (index == 0) {
                    statsKeys = element.slice(SKIP_COLUMN).map(line => line.trim()).map(line => line.replace(/[　 ]/, ''));
                    return;
                }

                const h3index = h3Map[element[CODE_COLUMN]];
                h3Stats[h3index] = statsKeys.reduce((obj, key, index) => {
                    const column = SKIP_COLUMN + index;
                    const value = parseInt(element[column]) || 0;
                    obj[key] = (h3Stats[h3index] !== undefined? h3Stats[h3index][key]: 0) + value;
                    return obj;
                }, {});
            });

            return h3Stats;
        });

        fs.createReadStream(csvPath).pipe(iconv.decodeStream('Shift_JIS')).pipe(parser);
        parser.on('end', () => {
            resolve([statsKeys, h3Stats]);
        });
    });
}

function writeStatsKml(meshName, statsKeys, h3Stats, resolution, outDir) {
    const kmlDir = path.join(outDir, meshName);
    if (!fs.existsSync(kmlDir))
        fs.mkdirSync(kmlDir);

    statsKeys.forEach(statsKey => {
        const maximum = Math.max.apply(null, Object.values(h3Stats).map(stat => stat[statsKey] || 0));
        const geoFeatures = Object.entries(h3Stats).map(([h3index, stat]) => {
            return {
                type: "Feature",
                geometry: {
                    type: "Polygon",
                    coordinates: [ h3js.h3ToGeoBoundary(h3index, true) ],
                },
                properties: {
                    name: stat[statsKey],
                    description: h3index,
                    fill: "#ff0000",
                    'fill-opacity': MAX_OPACITY * stat[statsKey] / maximum,
                    'stroke-width': 1,
                }
            };
        });

        const geoJson = {
            type: "FeatureCollection",
            features: geoFeatures,
        };

        const kml = tokml(geoJson, {
            documentName: statsKey,
            documentDescription: meshName,
            name: 'name',
            description: 'description',
            simplestyle: true,
        });

        const slimKml = kml.replace(/<ExtendedData>.*?<\/ExtendedData>/, '');
        fs.writeFileSync(path.join(kmlDir, statsKey + '_' + resolution + '.kml'), slimKml);
    });
}

function main() {
    const outDir = process.argv[2];

    const dataDir = path.resolve(__dirname, 'data');
    const meshDirs = fs.readdirSync(dataDir).map(name => path.join(dataDir, name)).filter(dir => {
        try {
            fs.statSync(path.resolve(dir, 'geo.kml'));
            fs.statSync(path.resolve(dir, 'stats.csv'));
            return true;
        } catch (err) {
            return false;
        }
    });

    meshDirs.map(dir => {
        loadGeoKml(path.resolve(dir, 'geo.kml')).then(kmlData => {
            for (let resolution = MIN_RESOLUTION; resolution <= MAX_RESOLUTION; resolution += 1) {
                let h3Map = obtainMeshToH3Map(kmlData, resolution);
                parseStatsCsv(path.resolve(dir, 'stats.csv'), h3Map).then(([statsKeys, h3Stats]) => {
                    writeStatsKml(dir.split(path.sep).pop(), statsKeys, h3Stats, resolution, outDir);
                });
            }
        });
    });
}

main()
