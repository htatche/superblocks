import ArrayMain      from './Array/ArrayMain.es6';

export default class Row {
    constructor(tableRow, nRow) {
        this.cells          = tableRow;
        this.nRow           = nRow;
    }

    get cells()              { return this._cells; }
    set cells(cells)         { this._cells = cells; }

    get isCompleted() {
        return this.cells.every(function(cell) {
            return !cell.isEmpty();
        });
    }

    get isEmpty() {
        return this.cells.every(function(cell) {
            return cell.isEmpty();
        });
    }

    get blocks() {
        var blocks = new ArrayMain();

        this.cells.forEach(function(cell) {

            if (!cell.isEmpty()) {
                var block = cell.brick.block;

                if (!blocks.contains(block)) { blocks.add(block); }
            }

        });

        return blocks;
    }

    clear() {
        for (var i = 0; i < this.cells.length; ++i ) {
            this.cells[i].clear();
        }
    }

    destroy() {
        for (var i = 0; i < this.cells.length; ++i) {
            var cell = this.cells[i];

            if (!cell.isEmpty()) {
                cell.brick.destroy();
            }
        }

        return this.nRow;
    }

    down() {
        for (var i = 0; i < this.cells.length; ++i) {
            var cell = this.cells[i];

            if (!cell.isEmpty()) {
                cell.brick.block.down();
            }
        }
    }
}
