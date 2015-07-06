import ArrayBlocks      from './ArrayBlocks.es6';
import CellsArray       from './CellsArray.es6';
import Move             from './Move.es6';

export default class Table {
    constructor(xSize, ySize) {
        this.xSize          = xSize;
        this.ySize          = ySize;
        this._cellsArray    = new CellsArray(xSize, ySize);
        this.blocks         = new ArrayBlocks();
    }

    get cellsArray()   { return this._cellsArray; }

    incrementNBlocks() {
        return ++this.blocks.length;
    }

    moveBlock(block, direction) {
        block.bricks.forEach((brick) => {
            this.cellsArray.cell(brick.position)
            .clear();
        });

        block.bricks.forEach((brick) => {
            this.cellsArray.cell(new Move(brick.position)[direction]())
            .setTo(brick.nBlock);
        });
    }

    putBrick(brick) {
        return this.cellsArray.cell(brick.position)
        .setTo(brick.nBlock);
    }

}
