import Array2D from './Array2D.es6';
import Cell    from './Cell.es6';
import Row     from './Row.es6';

export default class CellsArray extends Array2D {
    constructor(xSize, ySize) {
        super(xSize, ySize);

        this.createCells();
    }

    /* Notice that x and y are switched */
    cell(position) { return this.array[position.y][position.x]; }
    row(x)         { return new Row(this.array[x]); }

    createCells() {
        for (var x = 0; x < this.ySize; ++x) {
            for (var y = 0; y < this.xSize; ++y) {
              this.setAt(x, y, new Cell(x, y));
            }
        }

        return this.array;
    }

}
