import Util           from './Util.es6';
import ArrayMain      from './Array/ArrayMain.es6';

export default class Row {
    constructor(table, tableRow, nRow) {
        this.table          = table;
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

    get bricks() {
        var bricks = new ArrayMain();

        this.cells.forEach(function(cell) {

            if (!cell.isEmpty()) {
                var brick = cell.brick;

                if (!bricks.contains(brick)) { bricks.add(brick); }
            }

        });

        return bricks;
    }

    /**
     * @todo Refactor to use get bricks()
     * @return {[type]} [description]
     */
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

            if (!cell.isEmpty()) { cell.brick.destroy(); }
        }

        return this.nRow;
    }

    collapse(doneCallback) {
        var bricks          = this.bricks,
            promises        = [];

        this.blocks.forEach((block) => {
            promises.push(block.collapse(function() {}));
        });

        Promise.all(promises).then(() => {
            if (Util.deepCompare(bricks, this.bricks)) {
                doneCallback();
            } else { this.collapse(doneCallback); }
        });
    }
}
