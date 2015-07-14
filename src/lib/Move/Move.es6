export default class Move {
    constructor() {
    }

    up() {
      return {
        x: this.position.x,
        y: this.position.y - 1
      };
    }

    down() {
      return {
        x: this.position.x,
        y: this.position.y + 1
      };
    }

    right() {
      return {
        x: this.position.x + 1,
        y: this.position.y
      };
    }

    left() {
      return {
        x: this.position.x - 1,
        y: this.position.y
      };
    }
}
