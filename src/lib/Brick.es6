export default class Brick {
    constructor(position, nBlock) {
        this.position = position;
        this.nBlock   = nBlock;
    }

    get position() { return this._position; }
    set position(position) { this._position = position; }
}
