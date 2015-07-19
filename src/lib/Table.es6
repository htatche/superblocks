import ArrayBlocks      from './Array/ArrayBlocks.es6';
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

    get rows() {
        return this.cellsArray.array.map((row, idx) => {
            return this.row(idx);
        });
    }

    get completedRows() {
        return this.rows.filter((row) => {
            return row.isCompleted;
        });
    }

    row(x)             { return new Row(this.cellsArray.array[x], x); }

    rowAbove(row) {
        if (row.nRow === 0) { return false; }

        return this.row(row.nRow - 1);
    }

    cell(position)     { return this.cellsArray.cell(position); }

    destroyAllRows() {
        this.rows.forEach((row) => {
            return row.destroy();
        });
    }

    shiftBlocksDown() {
        var promises = [];

        this.blocks.forEach((block) => {
            promises.push(block.down());
        });

        return promises;
    }

    incrementNBlocks() {
        return ++this.blocks.length;
    }

    offLimits(position) {
        return position.x >= this.xSize || position.x < 0 ||
               position.y >= this.ySize || position.y < 0;
    }

}
