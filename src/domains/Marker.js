export default class {
    constructor(params) {
        this.name = params.name;
        this.latitude = parseFloat(params.latitude);
        this.longitude = parseFloat(params.longitude);
    }

    get label() {
        return '';
    }

    get position() {
        return {
            lat: this.latitude,
            lng: this.longitude,
        }
    }

    get color() {
        throw new Error('Not implemented');
    }

    get icon() {
        return {
            path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
            fillColor: this.color,
            fillOpacity: 1,
            strokeColor: '#000',
            strokeWeight: 2,
            scale: 1,
        };
    }

    get info() {
        return '<p><b>' + this.name + '</b></p>';
    }
}
