export default class Brick {
    constructor(position, block) {
        this.position = position;
        this.block   = block;
    }

    get position() { return this._position; }
    set position(position) { this._position = position; }

    /**
     * @param  {Boolean}
     * @return {[type]}
     * TODO: Apply changes in Table
     */
    remove(destroy = false) {
        this.block.remove(destroy);
    }

    /**
     * @return {[type]}
     * TODO: Apply changes in Table
     */
    destroy() {
        this.block.remove(true);
    }
}
