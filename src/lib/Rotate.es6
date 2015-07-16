/*global Phaser*/

import BrickPosition         from './Position/BrickPosition.es6';
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

            resolve(angle);
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

    pretendFirst(angle, resolve, reject) {
        var collisions;
        var positions = [];
        var pattern;

        if (angle === 360) { angle = 0; }

        pattern = this.findPatternByAngle(angle);

        // this.block.bricks.forEach((brick) => {
        //     brick.position.saveRelativeCoords();
        //     brick.clearCell();
        // });
        // this.block.clearCells();

        positions = this.block.bricks.map((brick, idx) => {
            brick.position.saveRelativeCoords();
            brick.clearCell();
                        
            return new BrickPosition(
                this.block.position,
                pattern.positions[idx][0],
                pattern.positions[idx][1],
                brick.anchor
            );
        });

        // for (var i = 0; i < this.block.bricks.length; ++i) {
        //     positions.push(new BrickPosition(
        //         this.block.position,
        //         pattern.positions[i][0],
        //         pattern.positions[i][1],
        //         this.block.bricks[i].anchor
        //     ));
        // }

        collisions = new CollisionDetection(this.block.table)
        .lookOut(
            positions
        );

        this.block.bricks.forEach((brick) => {
            brick.position.rollbackRelativeCoords();
        });

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
