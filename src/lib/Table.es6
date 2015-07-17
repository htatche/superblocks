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

    get rows() {
        return this.cellsArray.array.map((row, idx) => {
            return this.row(idx);
        });
    }

    row(x)             { return new Row(this.cellsArray.array[x]); }
    cell(position)     { return this.cellsArray.cell(position); }

    destroyAllRows() {
        this.rows.forEach((row) => {
            return row.destroy();
        });
    }

    destroyCompletedRows() {
        var nRow;

        this.rows.forEach((row, idx) => {
            if (row.isCompleted) {
                nRow = idx;

                return row.destroy();
            }
        });

        return nRow;
    }

    /**
     * Will shift down all the rows above nRow
     */
    shiftRowsDown(nRow) {
        debugger;
        for (var i = nRow; i >= 0; --i) {
            this.row(i).down();
        }
    }

    incrementNBlocks() {
        return ++this.blocks.length;
    }

    offLimits(position) {
        return position.x >= this.xSize || position.x < 0 ||
               position.y >= this.ySize || position.y < 0;
    }

}
