/**
 * @internal Brick is always attached to a Block
 */
export default class Brick {
    constructor(position, block, phaserSprite) {
        this.position               = position;
        this.block                  = block;
        this.phaserSprite           = phaserSprite;

        this.loadPhaserSpriteAnchor();
    }

    loadPhaserSpriteAnchor() {
        this.phaserSprite.anchor.setTo(
            this.position.anchor.x,
            this.position.anchor.y
        );
    }

    remove(destroy = false) {
        // debugger;
        
        var block = this.block,
            index = block.bricks.find(this);

        block.bricks.splice(index, 1);
        block.phaserGroup.remove(this.phaserSprite, destroy);

        /*
            Remove block from table.blocks is last brick was removed.
         */
        if (block.bricks.isEmpty) {
            var idx = block.table.blocks.indexOf(block);

            block.table.blocks.splice(idx, 1);
        }

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
