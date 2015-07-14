export default class Row {
    constructor(tableRow) {
        this.cells          = tableRow;
    }

    get cells()              { return this._cells; }
    set cells(cells)         { this._cells = cells; }

    clear() {
        for (var i = 0; i < this.cells.length; ++i ) {
            this.cells[i].clear();
        }
    }

    /**
     * @todo  level Up if x rows deleted from las time
     * @return {[type]}
     */
    destroy() {
        for (var i = 0; i < this.cells.length; ++i) {
            var cell = this.cells[i];

            if (!cell.isEmpty()) {
                cell.brick.destroy();
            }
        }
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
