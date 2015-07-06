/*global Phaser*/

import Move             from './Move.es6';
import MoveBrick        from './MoveBrick.es6';

export default class MoveBlock extends Move {
    constructor(position, block) {
        super();

        this.position = position;
        this.block    = block;
    }

    phaserTranslate(position) {
        var tween = this.block.phaserGame.add.tween(this.block.phaserGroup);

        tween.to(
          position.phaserPosition,
          1,
          Phaser.Easing.Linear.None,
          true
        );

        return tween;
    }

    tableTranslate(strDirection) {
        this.block.bricks.forEach((brick) => {
            return brick.clearCell();
        });

        this.block.bricks.forEach((brick) => {
            var nextPosition = new Move(brick.position, brick)[strDirection]();

            return brick.putCell(nextPosition);
        });
    }

    /**
     * @internal  strDirection is used to calculate position for each brick
     * @param  {strDirection}
     * @return {[type]}
     */
    move(strDirection) {
        return new Promise((resolve, reject) => {
            this.block.position = this.nextPosition;

            this.phaserTranslate(this.nextPosition);
            this.tableTranslate(strDirection);

            resolve(this.position);
        });
    }

    down() {
        super.down();

        return this.move('down');
    }

    up() {
        super.up();

        return this.move('up');
    }
}
