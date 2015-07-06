export default class Move {
    constructor(position) {
        this.position    = position;
    }

    down() {
      ++this.position.y;

      return this.position;
    }

}
