export default class Cell {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.nBrick = null;
      this.nBlock = null;
    }

    clear() {
      this.nBlock = null;
    }

    setTo(nBlock) {
      this.nBlock = nBlock;

      return this;
    }
}
