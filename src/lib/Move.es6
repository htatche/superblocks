import Position         from './Position.es6';

export default class Move {
    constructor(position) {
        this.position    = position;
    }

    up() {
      return new Position(this.position.x, this.position.y - 1);
    }

    down() {
      return new Position(this.position.x, this.position.y + 1);
    }

}
