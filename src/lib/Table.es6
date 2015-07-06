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

    row(x) { return this.cellsArray[x]; }

    incrementNBlocks() {
        return ++this.blocks.length;
    }

    clearBrick(brick) {
        return this.cellsArray.cell(brick.position)
        .clear();
    }

    putBrick(brick, position) {
        brick.position = position;

        return this.cellsArray.cell(position)
        .setTo(brick.nBlock);
    }

    moveBrick(brick, strDirection) {
        var newPosition = new Move(brick.position)[strDirection]();

        return this.putBrick(brick, newPosition);
    }

    moveBlock(block, strDirection) {
        block.bricks.forEach((brick) => {
            this.clearBrick(brick);
        });

        block.bricks.forEach((brick) => {
            this.moveBrick(brick, strDirection);
        });
    }

}
