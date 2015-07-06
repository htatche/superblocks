import Move             from './Move.es6';

export default class MoveBrick extends Move {
    constructor(position, brick) {
        super();

        this.position = position;
        this.brick    = brick;
    }

    phaserTranslate() {
    }

    tableTranslate() {
    }

    move() {
        return new Promise((resolve, reject) => {
            this.brick.clearCell();

            this.brick.position = this.nextPosition;

            this.brick.putCell(this.brick.position);

            resolve(this.position);
        });
    }

    down() {
        super.down();

        return this.move();
    }
}
