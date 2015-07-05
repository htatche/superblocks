import ArrayBlocks from './ArrayBlocks.es6';
import CellsArray from './CellsArray.es6';

export default class Table {
    constructor(xSize, ySize) {
        this.xSize          = xSize;
        this.ySize          = ySize;
        this._cellsArray     = new CellsArray(xSize, ySize);
        this.blocks         = new ArrayBlocks();
    }

    get cellsArray()   { return this._cellsArray; }

    incrementNBlocks() {
        return ++this.blocks.length;
    }
}
