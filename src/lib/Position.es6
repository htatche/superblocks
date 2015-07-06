export default class Position {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    get xPixels() { return Position.toPixels(this.x); }
    get yPixels() { return Position.toPixels(this.y); }

    get phaserPosition() {
        return {
            x: this.xPixels,
            y: this.yPixels
        };
    }

    static toPixels(val, cellSize = 35) {
        return val * cellSize;
    }

}
