import ArrayMain             from '../ArrayMain.es6';
import Collision             from './Collision.es6';

export default class CollisionDetection {
    constructor(table) {
        this.table          = table;
    }

    againstWall(brick) {
        return this.table.offLimits(brick.position);
    }

    againstBlock(brick) {
        var cellBrick = this.table.cell(brick.position).brick;

        return cellBrick !== null &&
               cellBrick.block.nBlock !== brick.block.nBlock;
    }

    againstAll(brick) {
        if (this.againstWall(brick)) {
            return new Collision(brick.position, 'WALL_COLLISION');
        }

        if (this.againstBlock(brick)) {
            return new Collision(brick.position, 'BLOCK_COLLISION');
        }

        return false;
    }

    lookOut(bricks) {
        var collisions = new ArrayMain();

        if (!(bricks instanceof Array)) { bricks = [bricks]; }

        bricks.forEach((brick) => {
            var collision = this.againstAll(brick);

            if (collision) { collisions.add(collision); }

            return;
        }, this);

        return collisions;
    }
}
