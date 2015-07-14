import Position         from '../Position.es6';

export default class Move {
    constructor(position) {
        this.position           = position;
        this.nextPosition       = null;
    }

    up() {
      this.nextPosition = new Position(
        this.position.x,
        this.position.y - 1,
        this.position.anchor
      );

      return this.nextPosition;
    }

    down() {
      this.nextPosition = new Position(
        this.position.x,
        this.position.y + 1,
        this.position.anchor
      );

      return this.nextPosition;
    }

    right() {
      this.nextPosition = new Position(
        this.position.x + 1,
        this.position.y,
        this.position.anchor
      );

      return this.nextPosition;
    }

    left() {
      this.nextPosition = new Position(
        this.position.x - 1,
        this.position.y,
        this.position.anchor
      );

      return this.nextPosition;
    }

}
