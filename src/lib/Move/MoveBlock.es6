/*global Phaser*/

import Move             from './Move.es6';

export default class MoveBlock extends Move {
    constructor(position, block) {
        super();

        this.position = position;
        this.block    = block;
    }

    phaserTranslate() {
        var tween = this.block.phaserGame.add.tween(this.block.phaserGroup);

        tween.to(
          this.block.position.phaserGroupPosition(),
          1,
          Phaser.Easing.Linear.None,
          true
        );

        return tween;
    }

    tableTranslate() {
        this.block.bricks.forEach((brick) => {
            return brick.putCell(brick.position);
        });
    }

    execute(position) {
        return new Promise((resolve) => {
            this.block.clearCells();

            this.block.position.x = position.x;
            this.block.position.y = position.y;

            this.tableTranslate();
            this.phaserTranslate();

            resolve(this.position);
        });
    }

    down() {
        var position = super.down();

        return this.execute(position);
    }

    up() {
        var position = super.up();

        return this.execute(position);
    }

    right() {
        var position = super.right();

        return this.execute(position);
    }

    left() {
        var position = super.left();

        return this.execute(position);
    }

    to(position) {
        return this.execute(position);
    }
}
