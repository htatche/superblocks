import ArrayBlocks      from './ArrayBlocks.es6';
import CellsArray       from './CellsArray.es6';
import Row              from './Row.es6';

export default class Table {
    constructor(xSize, ySize) {
        this.xSize          = xSize;
        this.ySize          = ySize;
        this._cellsArray    = new CellsArray(xSize, ySize);
        this.blocks         = new ArrayBlocks();
    }

    get cellsArray()   { return this._cellsArray; }

    row(x)             { return new Row(this.cellsArray.array[x]); }
    cell(position)     { return this.cellsArray.cell(position); }

    incrementNBlocks() {
        return ++this.blocks.length;
    }

    offLimits(position) {
        return position.x >= this.xSize || position.x < 0 ||
               position.y >= this.ySize || position.y < 0;
    }

}
