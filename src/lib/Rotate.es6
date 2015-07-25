/*global Phaser*/

import BrickPosition             from './Position/BrickPosition.es6';
import CollisionDetection        from './Collision/CollisionDetection.es6';

export default class Rotate {
    constructor(block, detectCollision) {
        this.block              = block;
        this.detectCollision    = detectCollision;

        this.phaserGame         = block.phaserGame;
        this.phaserGroup        = block.phaserGroup;
    }

    findPatternByAngle(angle) {
        var array = this.block.patterns.filter((i) => {
            return i.angle === angle;
        });

        return array[0];
    }

    phaserTranslate(angle) {
        var tween = this.phaserGame.add.tween(this.phaserGroup);

        return new Promise((resolve) => {
            tween.onComplete.add(resolve);

            tween.to(
                { angle: angle },
                1,
                Phaser.Easing.Linear.None,
                true
            );
        });
    }

    tableTranslate(angle) {
        var pattern;

        if (angle === 360) { angle = 0; }

        pattern = this.findPatternByAngle(angle);

        this.block.clearCells();

        for (var i = 0; i < this.block.bricks.length; ++i) {
            var position = new BrickPosition(
                pattern.positions[i][0],
                pattern.positions[i][1],
                this.block.position
            );

            this.block.bricks[i].putCell(position);
        }
    }

    pretendFirst(angle, resolve, reject) {
        var pattern, bricks, collisions;

        if (angle === 360) { angle = 0; }

        pattern = this.findPatternByAngle(angle);

        bricks = this.block.bricks.map((brick, idx) => {
            /*
                We only reference the object, no deep cloning.
             */
            var brickRef = Object.create(brick);

            brickRef.position = new BrickPosition(
                pattern.positions[idx][0],
                pattern.positions[idx][1],
                this.block.position
            );

            return brickRef;
        });

        collisions = new CollisionDetection(this.block.table)
        .lookOut(bricks);

        if (collisions.length === 0) {
            return this.execute(angle, resolve);
        } else {
            reject(collisions);
        }
    }

    execute(angle, resolve) {
        this.tableTranslate(angle);
        this.phaserTranslate(angle).then(resolve);
    }

    carryOut(angle, detectCollision) {
        return new Promise((resolve, reject) => {
            if (detectCollision) {
                this.pretendFirst(angle, resolve, reject);
            } else {
                this.execute(angle, resolve);
            }
        });
    }

    /**
     * @todo Fix bug: When angle 0, phaser will rotate right to 270
     * @return {[type]} [description]
     */
    left() {
        var angle = this.phaserGroup.angle === 0
            ? 270 : this.phaserGroup.angle - 90;

        return this.carryOut(angle, this.detectCollision);
    }

    right() {
        var angle = this.phaserGroup.angle === 360
            ? 90 : this.phaserGroup.angle + 90;

        return this.carryOut(angle, this.detectCollision);
    }

}
