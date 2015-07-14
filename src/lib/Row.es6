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

    destroy() {
        // level Up if x rows deleted from las time
    }
}
