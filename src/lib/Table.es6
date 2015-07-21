import ArrayBlocks      from './Array/ArrayBlocks.es6';
import CellsArray       from './CellsArray.es6';
import Row              from './Row.es6';

export default class Table {
    constructor(xSize, ySize) {
        this.xSize          = xSize;
        this.ySize          = ySize;
        this._cellsArray    = new CellsArray(xSize, ySize);
        this.blocks         = new ArrayBlocks();
        this.nBlocks        = 0;
        this.nBricks        = 0;
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

    cell(position)     { return this.cellsArray.cell(position); }

    row(x)             { return new Row(this, this.cellsArray.array[x], x); }

    rowAbove(row) {
        if (row.nRow === 0) { return false; }

        return this.row(row.nRow - 1);
    }

    incrementNBlocks() {
        return ++this.nBlocks;
    }

    incrementNBricks() {
        return ++this.nBricks;
    }

    offLimits(position) {
        return position.x >= this.xSize || position.x < 0 ||
               position.y >= this.ySize || position.y < 0;
    }

    /**
     * @info Deprecated
     * @return {[type]} [description]
     */
    destroyAllRows() {
        this.rows.forEach((row) => {
            return row.destroy();
        });
    }

    rowsAbove(i) {
        return this.rows.filter(
            (row) => { return row.nRow < i; }
        );
    }

    collapseRows(rows, doneCallback) {
        var row = rows.pop();

        if (!row) { doneCallback(); }
        else {
            row.collapse(this.collapseRows.bind(this, rows, doneCallback));
        }
    }
}
