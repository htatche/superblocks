export default class Position {
    constructor(x, y, cellSize = 35) {
        this.x                          = x;
        this.y                          = y;

        this.cellSize       = cellSize;
    }

    get coordinates() {
        return {
            x: this.x,
            y: this.y
        };
    }

    set coordinates(coordinates) {
        this.x = coordinates.x;
        this.y = coordinates.y;
    }

    saveCoordinates() {
        this.previousCoordinates = this.coordinates;
    }

    rollbackCoordinates() {
        this.coordinates = this.previousCoordinates;
    }

    toPixels(val) {
        return val * this.cellSize;
    }
}
