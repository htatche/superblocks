export default class Cell {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.nBrick = null;
      this.nBlock = null;
    }

    reset() {
      this.nBlock = null;
      this.nBrick = null;
    }

    setTo(nBrick, nBlock) {
      this.nBlock = nBlock;
      this.nBrick = nBrick;
    }
}
