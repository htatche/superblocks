export default class Position {
    constructor(x, y, cellSize = 35) {
        this.x                          = x;
        this.y                          = y;

        this.cellSize       = cellSize;
    }

    toPixels(val) {
        return val * this.cellSize;
    }

}
