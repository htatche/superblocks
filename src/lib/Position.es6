export default class Position {
    constructor(x = 0, y = 0, cellSize = 35, anchor = 0.5) {
        this.x              = x;
        this.y              = y;
        this.cellSize       = cellSize;
        this.anchor         = anchor;
    }

    get xPixels() { return Position.toPixels(this.x, this.cellSize); }
    get yPixels() { return Position.toPixels(this.y, this.cellSize); }

    get tweenPosition() {
        return {
            x: this.xCenterPosition(),
            y: this.yCenterPosition()
        };
    }

    /**
     * @internal
     *     0  1  2  3
     *   0  __________
     *   1 |  o
     *   2 |o x o
     *   3 |
     *
     * The center of the block
     * (x * cellSize) + (cellSize / 2)
     * (y * cellSize) + (cellSize / 2)
     *
     * @todo      Modify so last value represents pivot and not cellSi
     * @param  {Number}
     * @return {[type]}
     */
    xCenterPosition() {
        return this.xPixels + this.cellSize * this.anchor;
    }

    yCenterPosition() {
        return this.yPixels + this.cellSize * this.anchor;
    }

    static toPixels(val, cellSize) {
        return val * cellSize;
    }

}
