export default class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.brick = null;
    }

    clear() {
        this.brick = null;
    }

    setTo(brick) {
        this.brick = brick;

        return this;
    }

    isEmpty() {
        return this.brick === null;
    }
}
