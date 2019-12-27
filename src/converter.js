const fs = require('fs');
const path = require('path');
const util = require('util');

const centroid = require('polygon-centroid');
const csv = require('csv');
const h3js = require('h3-js');
const iconv = require('iconv-lite');
const tokml = require('tokml');
const xml2js = require('xml2js');

const TOP_RESOLUTION = 3;  // 親となる集計単位のH3解像度
const MIN_RESOLUTION = 4;  // 出力対象のH3解像度の最小値
const MAX_RESOLUTION = 7;  // 出力対象のH3解像度の最大値

// MEMO: 解像度が8になるとKMZの制限を超えるオブジェクト数になるので、集計単位を細かくする
// const TOP_RESOLUTION = 4;
// const MIN_RESOLUTION = 8;
// const MAX_RESOLUTION = 8;

const CODE_COLUMN = 0;  // 統計CSVでKEY_CODEが指定されている列番号
const SKIP_COLUMN = 4;  // 統計CSVで統計データの収録が開始される列番号

const MAX_OPACITY = 0.75;  // 最大値を持つ領域の表示に用いる透過率


async function loadGeoKml(kmlPath) {
    const kml = await util.promisify(fs.readFile)(kmlPath);
    return xml2js.parseStringPromise(kml);
}

function updateMeshToH3Map(h3Map, kmlData, resolution) {
    const placemarks = kmlData.kml.Document[0].Folder[0].Placemark;

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
}

async function parseStatsCsv(csvPath, h3Map, h3Stats) {
    return new Promise((resolve, reject) => {
        let statsKeys = [];

        const parser = csv.parse({from_line: 2}, (error, data) => {
            data.forEach((element, index) => {
               if (index == 0) {
                    statsKeys = element.slice(SKIP_COLUMN).map(line => line.trim()).map(line => line.replace(/[　 ]/, ''));
                    return;
                }

                const h3Index = h3Map[element[CODE_COLUMN]];
                const h3TopIndex = h3js.h3ToParent(h3Index, TOP_RESOLUTION);

                let targetStats = h3Stats[h3TopIndex] || {};
                targetStats[h3Index] = statsKeys.reduce((obj, key, index) => {
                    const column = SKIP_COLUMN + index;
                    const value = parseInt(element[column]) || 0;
                    obj[key] = (targetStats[h3Index] !== undefined? targetStats[h3Index][key]: 0) + value;
                    return obj;
                }, {});
                h3Stats[h3TopIndex] = targetStats;
            });
        });

        fs.createReadStream(csvPath).pipe(iconv.decodeStream('Shift_JIS')).pipe(parser);
        parser.on('end', () => {
            resolve(statsKeys);
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
        // fs.writeFileSync(path.join(kmlDir, statsKey + '_' + resolution + '.json'), JSON.stringify(geoJson));

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

    Promise.all(meshDirs.map(dir => loadGeoKml(path.resolve(dir, 'geo.kml')))).then(kmlFiles => {
        for (let resolution = MIN_RESOLUTION; resolution <= MAX_RESOLUTION; resolution += 1) {
            let h3Map = {};
            kmlFiles.forEach(kmlFile => updateMeshToH3Map(h3Map, kmlFile, resolution));

            let h3Stats = {};
            Promise.all(meshDirs.map(dir => parseStatsCsv(path.resolve(dir, 'stats.csv'), h3Map, h3Stats))).then(statsKeyLists => {
                let statsKeys = [...new Set([].concat(...statsKeyLists))];
                for (const h3TopIndex in h3Stats) {
                    writeStatsKml(h3TopIndex, statsKeys, h3Stats[h3TopIndex], resolution, outDir);
                }
            });
        }
    });
}

main()
