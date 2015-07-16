export default class Position {
    constructor(cellSize = 35) {
        this.cellSize       = cellSize;
    }

    toPixels(val) {
        return val * this.cellSize;
    }

}
