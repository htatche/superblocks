/*global Phaser*/

import Move                      from './Move.es6';
import CollisionDetection        from '../Collision/CollisionDetection.es6';

export default class MoveBlock extends Move {
    constructor(position, block) {
        super();

        this.position               = position;
        this.block                  = block;
    }

    phaserTranslate() {
        var tween = this.block.phaserGame.add.tween(this.block.phaserGroup);

        return new Promise((resolve) => {
            tween.onComplete.add(resolve);

            tween.to(
              this.block.position.phaserGroupPosition(),
              1,
              Phaser.Easing.Linear.None,
              true
            );
        });
    }

    tableTranslate() {
        return this.block.bricks.forEach((brick) => {
            // debugger;

            return brick.putCell(brick.position);
        });
    }

    pretendFirst(coordinates, resolve, reject) {
        var collisions;

        this.block.position.saveCoordinates();
        this.block.position.coordinates = coordinates;

        collisions = new CollisionDetection(this.block.table)
        .lookOut(this.block.bricks);

        this.block.position.rollbackCoordinates();

        if (collisions.length === 0) {
            return this.execute(coordinates, resolve);
        } else {
            reject(collisions);
        }
    }

    execute(coordinates, resolve) {
        this.block.clearCells();

        this.block.position.coordinates = coordinates;

        this.tableTranslate();
        this.phaserTranslate().then(resolve);
    }

    carryOut(coordinates, detectCollision) {
        return new Promise((resolve, reject) => {
            if (detectCollision) {
                this.pretendFirst(coordinates, resolve, reject);
            } else {
                this.execute(coordinates, resolve);
            }
        });
    }

    down(detectCollision) {
        var coordinates = super.down();

        // console.log(`down on ${this.block.nBlock}`);

        return this.carryOut(coordinates, detectCollision);
    }

    up(detectCollision) {
        var coordinates = super.up();

        return this.carryOut(coordinates, detectCollision);
    }

    right(detectCollision) {
        var coordinates = super.right();

        return this.carryOut(coordinates, detectCollision);
    }

    left(detectCollision) {
        var coordinates = super.left();

        return this.carryOut(coordinates, detectCollision);
    }

    to(coordinates, detectCollision) {
        return this.carryOut(coordinates, detectCollision);
    }
}
