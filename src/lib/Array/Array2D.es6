export default class Array2D {
    constructor(xSize, ySize) {
        this.xSize = xSize;
        this.ySize = ySize;
        this._array = this.buildArray();
    }

    get array() { return this._array; }

    getAt(x, y)      { return this._array[x][y]; }
    setAt(x, y, val) { this._array[x][y] = val; }

    buildArray() {
        var array = new Array(this.ySize);

        for (var y = 0; y < this.ySize; y++) {
            array[y] = new Array(this.xSize);
        }

        this._array = array;

        return this.array;
    }

    prettyPrint() {
        var array = this.array.map(row => {
            return row.map(cell => {
                if (!cell.isEmpty()) {
                    return (cell.brick.nBrick);
                }
            });
        });

        return console.table(array);
    }
}
