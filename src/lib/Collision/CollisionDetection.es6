import ArrayMain             from '../Array/ArrayMain.es6';
import Collision             from './Collision.es6';

export default class CollisionDetection {
    constructor(table) {
        this.table          = table;
    }

    againstWall(brick) {
        return this.table.offLimits(brick.position);
    }

    againstBrick(brick) {
        var cell = this.table.cell(brick.position);

        if (cell.isEmpty()) {
            return false;
        } else {
            if (cell.brick.parentBlock) {
                return cell.brick.parentBlock.nBlock !==
                       brick.parentBlock.nBlock;
            } else {
                return true;
            }
        }
    }

    againstAll(brick) {
        if (this.againstWall(brick)) {
            return new Collision(brick.position, 'WALL_COLLISION');
        }

        if (this.againstBrick(brick)) {
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
