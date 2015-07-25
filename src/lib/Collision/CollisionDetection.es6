import ArrayMain             from '../Array/ArrayMain.es6';
import Collision             from './Collision.es6';

export default class CollisionDetection {
    constructor(table) {
        this.table          = table;
    }

    againstWall(brick) {
        return this.table.offLimits(brick.position);
    }

    /**
     * @todo Change name to againstBrick()
     * @param  {[type]} brick [description]
     * @return {[type]}       [description]
     */
    againstBlock(brick) {
        var cell = this.table.cell(brick.position);

        return cell.brick !== null &&
               cell.brick.parentBlock.nBlock !== brick.parentBlock.nBlock;
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
