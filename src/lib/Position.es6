export default class Position {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;

        this.xPixels = Position.toPixels(x);
        this.yPixels = Position.toPixels(y);
    }

    static toPixels(val, cellSize = 35) {
        return val * cellSize;
    }
}
