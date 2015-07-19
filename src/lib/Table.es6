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


        // for (var i = nRow - 1; i >= 0; --i) {
        //     if (!this.row(i).isEmpty) {
        //         debugger;
        //         promises.push(this.row(i).down());
        //     }
        // }
    }

    /**
     * Will shift down all the rows above nRow
     */
    shiftRowsDown(nRow) {
        var promises = [];
        // var rows = this.rows;

        // rows.pop();

        // rows.reverse().forEach((row) => {
        //     if (!row.isEmpty) {
        //         promises.push(row.down());
        //     }
        // });

        // debugger;

        for (var i = nRow - 1; i >= 0; --i) {
            if (!this.row(i).isEmpty) {
                debugger;
                promises.push(this.row(i).down());
            }
        }

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
