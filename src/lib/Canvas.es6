import ArrayBlocks from './ArrayBlocks.es6';
import Array2D from './Array2D.es6';

export default class Canvas {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.blocks = new ArrayBlocks();

        this._grid = new Array2D(width, height);
    }

    get grid()   { return this._grid; }

    newBlock() {
        return this.addBlock(new Block());
    }

    addBlock(block) {
        return this.blocks.add(block);
    }

    isRowIsCompleted() {

    }

    shiftRowDown(n) {

    }

    clearRow(n) {

    }

    clearAt(x, y) {
        
    }    

    clean() {
        this.grid.fillWith(null);
    }

    consolePrint() {
        console.table(this.grid.array);
    }
}
