import Marker from './Marker.js';

export default class extends Marker {
    constructor(params) {
        super(params);

        this.id = parseInt(params.id);
        this.address = params.address;
        this.status = parseInt(params.status);
    }

    get color() {
        if (this.status == 1)
            return '#C7243A';
        if (this.status == 0)
            return '#F6D4D8';
        if (this.status == 2)
            return '#EDAD0B';
        throw new Error('Unknown status: ' + this.status);
    }

    get info() {
        return '<p><b>' + this.name + '</b><br />' + this.address + '</p>';
    }

    filter(statuses) {
        if (this.status == 1)
            return statuses.includes('Open');
        if (this.status == 0)
            return statuses.includes('Closed');
        if (this.status == 2)
            return statuses.includes('Archived');
        return false;
    }
}
