/*global Phaser*/

import MoveBlock                 from './MoveBlock.es6';
import CollisionDetection        from '../Collision/CollisionDetection.es6';

export default class MoveBrick extends MoveBlock {
    constructor(position, brick) {
        super(position, brick);
    }

    tableTranslate() {
        return this.block.putCell(this.position);
    }

    phaserTranslate() {
        var tween = this.block.phaserGame.add.tween(this.block.phaserSprite);

        return new Promise((resolve) => {
            tween.onComplete.add(resolve);
            tween.to(
              this.block.position.phaserSpritePosition(),
              1,
              Phaser.Easing.Linear.None,
              true
            );
        });

    }

    pretendFirst(coordinates, resolve, reject) {
        var collisions;

        this.block.position.saveCoordinates();
        this.block.position.coordinates = coordinates;

        collisions = new CollisionDetection(this.block.table)
        .lookOut(this.block);

        this.block.position.rollbackCoordinates();

        if (collisions.length === 0) {
            return this.execute(coordinates, resolve);
        } else {
            reject(collisions);
        }
    }

    execute(coordinates, resolve) {
        this.block.clearCell();

        this.block.position.coordinates = coordinates;

        this.tableTranslate();
        this.phaserTranslate().then(resolve);
    }

}
