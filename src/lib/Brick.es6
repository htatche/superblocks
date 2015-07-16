// import MoveBrick             from './Move/MoveBrick.es6';

/**
 * @internal Brick is always be attached to a Block
 */
export default class Brick {
    constructor(position, block, phaserSprite) {
        this.position               = position;
        this.block                  = block;
        this.phaserSprite           = phaserSprite;

        this.loadPhaserSpriteAnchor();
    }

    // Deprecated
    // get moveBrick()         { return new MoveBrick(this.position, this); }

    loadPhaserSpriteAnchor() {
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
        var index = this.block.bricks.find(this);

        this.block.bricks.splice(index, 1);
        this.block.phaserGroup.remove(this.phaserSprite, destroy);

        return this.clearCell();
    }

    destroy() {
        return this.remove(true);
    }

    clearCell() {
        return this.block.table.cell(this.position).clear();
    }

    putCell(position) {
        // Allow to pass no position arg (Block.addBrick)
        this.position = position;

        return this.block.table.cellsArray.cell(this.position)
        .setTo(this);
    }

}
