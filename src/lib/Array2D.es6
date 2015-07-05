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
        var array = new Array(this.xSize);

        for (var y = 0; y < this.xSize; y++) {
            array[y] = new Array(this.ySize);
        }

        this._array = array;

        return this.array;
    }

    prettyPrint() {
        var array = this.array.map(row => {
            return row.map(cell => {
                return (cell.nBlock);
            });
        });

        return console.table(array);
    }
}
