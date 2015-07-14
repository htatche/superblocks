export default class Position {
    constructor(cellSize = 35) {
        // this.x              = x;
        // this.y              = y;

        this.cellSize       = cellSize;

        // this.pivot          = pivot;
        // this.anchor         = anchor;
    }

    toPixels(val) {
        return val * this.cellSize;
    }

    // phaserGroupPosition() {
    //     return {
    //         x: Position.toPixels(this.x + this.anchor.x, this.cellSize),
    //         y: Position.toPixels(this.y + this.anchor.y, this.cellSize)
    //     };
    // }

    // get phaserPivot() {
    //     return {
    //         x: Position.toPixels(this.pivot.x + this.anchor.x, this.cellSize),
    //         y: Position.toPixels(this.pivot.y + this.anchor.y, this.cellSize)
    //     };
    // }

    // relativeTo(position) {
    //     return {
    //         x: (position.x + this.x),
    //         y: (position.y + this.y)
    //     };
    // }

    // relativeToPivot(pivot) {
    //     return {
    //         x: (pivot.x + this.x + this.anchor.x) * this.cellSize,
    //         y: (pivot.y + this.y + this.anchor.y) * this.cellSize
    //     };
    // }

    // static toPixels(val, cellSize) {
    //     return val * cellSize;
    // }

}
