import Position         from '../Position.es6';

export default class Move {
    constructor(position) {
        this.position           = position;
        this.nextPosition       = null;
    }

    up() {
      this.nextPosition = new Position(
        this.position.x,
        this.position.y - 1
      );

      return this.nextPosition;
    }

    down() {
      this.nextPosition = new Position(
        this.position.x,
        this.position.y + 1
      );

      return this.nextPosition;
    }

}
