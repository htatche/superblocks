import MoveBrick             from './Move/MoveBrick.es6';

/**
 * @internal Brick should always be attached to a Block
 */
export default class Brick {
    constructor(position, block, phaserSprite) {
        this.position = position;
        this.block   = block;
        this.phaserSprite = phaserSprite;

        this.setAnchor();
    }

    get position()          { return this._position; }
    set position(position)  { this._position = position; }
    get moveBrick()         { return new MoveBrick(this.position, this); }

    setAnchor() {
        this.phaserSprite.anchor.setTo(
            this.position.anchor.x,
            this.position.anchor.y
        );
    }

    /**
     * @param  {Boolean}
     * @return {[type]}
     * @todo Apply changes in Table
     */
    remove(destroy = false) {
        return this.block.remove(destroy);
    }

    /**
     * @todo Apply changes in Table
     * @return {[type]}
     */
    destroy() {
        return this.block.remove(true);
    }

    clearCell() {
        return this.block.table.cell(this.position).clear();
    }

    putCell(position) {
        // Allow to pass no position arg (Block.addBrick)
        this.position = position;

        return this.block.table.cellsArray.cell(this.position)
        .setTo(this.block.nBlock);
    }

    // down()      { return this.moveBlock.down(); }

    // up()        { return this.moveBlock.up(); }

}
