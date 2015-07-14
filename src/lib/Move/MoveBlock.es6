/*global Phaser*/

import Move             from './Move.es6';
import MoveBrick        from './MoveBrick.es6';
import Position         from '../Position.es6';

export default class MoveBlock extends Move {
    constructor(position, block) {
        super();

        this.position = position;
        this.block    = block;
    }

    phaserTranslate(position) {
        var tween = this.block.phaserGame.add.tween(this.block.phaserGroup);

        tween.to(
          position.phaserGroupPosition(),
          1,
          Phaser.Easing.Linear.None,
          true
        );

        return tween;
    }

    tableTranslate() {
        this.block.clearCells();

        var pos = this.block.rotate.
        findPatternByAngle(this.block.phaserGroup.angle).positions;

        this.block.bricks.forEach((brick, idx) => {
            var position = new Position(
                pos[idx][0],
                pos[idx][1],
                brick.block.anchor
            );

            var nextPosition = position.relativeTo(this.block.position);

            return brick.putCell(nextPosition);
        });

    }

    /**
     * @internal  strDirection is used to calculate position for each brick
     * @param  {strDirection}
     * @return {[type]}
     */
    move(strDirection) {
        var self = this;

        return new Promise((resolve, reject) => {
            self.block.position = self.nextPosition;

            self.phaserTranslate(self.block.position);
            self.tableTranslate();

            resolve(self.position);
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

    right() {
        super.right();

        return this.move('right');
    }

    left() {
        super.left();

        return this.move('left');
    }
}
