import Array2D from './Array2D.es6';
import Cell    from './Cell.es6';

export default class CellsArray extends Array2D {
    constructor(xSize, ySize) {
        super(xSize, ySize);
        this.createCells();
    }

    get array() { return this._array; }

    createCells() {
        for (var x = 0; x < this.xSize; ++x) {
            for (var y = 0; y < this.ySize; ++y) {
              this.setAt(x, y, new Cell(x, y));
            }
        }

        return this.array;
    }

    cell(x, y) {
      return this[x][y];
    }

}
