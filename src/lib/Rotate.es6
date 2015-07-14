/*global Phaser*/

import BrickPosition         from './Position/BrickPosition.es6';

export default class Rotate {
    constructor(block) {
        this.block       = block;

        this.phaserGame  = block.phaserGame;
        this.phaserGroup = block.phaserGroup;
    }

    findPatternByAngle(angle) {
        var array = this.block.patterns.filter((i) => {
            return i.angle === angle; }
        );

        return array[0];
    }

    phaserTranslate(angle) {
        return new Promise((resolve) => {
            this.phaserGame.add.tween(this.phaserGroup).to(
                { angle: angle },
                500,
                Phaser.Easing.Linear.None,
                true
            );

            resolve(this.block);
        });
    }

    tableTranslate(angle) {
        var pattern;

        if (angle === 360) { angle = 0; }

        pattern = this.findPatternByAngle(angle);

        this.block.clearCells();

        for (var i = 0; i < this.block.bricks.length; ++i) {
            var position = new BrickPosition(
                this.block.position,
                pattern.positions[i][0],
                pattern.positions[i][1],
                this.block.bricks[i].anchor
            );

            this.block.bricks[i].putCell(position);
        }
    }

    execute(angle) {
        this.phaserTranslate(angle).then((block) => {
            this.tableTranslate(angle, block);
        });
    }

    left() {
        var angle = this.phaserGroup.angle === 0
            ? 270 : this.phaserGroup.angle - 90;

        this.execute(angle);
    }

    right() {
        var angle = this.phaserGroup.angle === 360
            ? 90 : this.phaserGroup.angle + 90;

        console.log(angle);

        this.execute(angle);
    }

}
