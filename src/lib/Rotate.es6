/*global Phaser*/

// import Brick            from './Brick.es6';
// import ArrayMain        from './ArrayMain.es6';
import Position         from './Position.es6';
// import MoveBlock        from './Move/MoveBlock.es6';
// import Promise          from '../../bower_components/when/es6-shim/Promise.browserify-es6.js';

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
        // this.phaserGroup.pivot.x = 0;
        // this.phaserGroup.pivot.y = 0;

        return new Promise((resolve, reject) => {
            this.phaserGame.add.tween(this.phaserGroup).to(
                { angle: angle },
                1,
                Phaser.Easing.Linear.None,
                true
            );

            resolve(this.block);
        });
    }

    tableTranslate(angle) {
        var pos = this.findPatternByAngle(angle).positions;

        this.block.clearCells();

        this.block.bricks.forEach((brick, idx) => {
            var position = new Position(pos[idx][0], pos[idx][1], brick.block.anchor);

            var nextPosition = position.relativeTo(brick.block.position);

            return brick.putCell(nextPosition);
        });
    }

    execute(angle) {
        this.phaserTranslate(angle).then((block) => {
            this.tableTranslate(angle, block);
        });
    }

    left() {    /////// ?
        // var nextAngle = this.phaserGroup.angle === 0 ? 270 : -90;
        var angle = this.phaserGroup.angle === 0
            ? 270 : this.phaserGroup.angle - 90;

        this.execute(angle);
    }

    right() {
        var angle = this.phaserGroup.angle === 270
            ? 0 : this.phaserGroup.angle + 90;

        this.execute(angle);
    }

}
