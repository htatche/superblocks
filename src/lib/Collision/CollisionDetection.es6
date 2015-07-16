import ArrayMain             from '../ArrayMain.es6';
import Collision             from './Collision.es6';

export default class CollisionDetection {
    constructor(table) {
        this.table          = table;
    }

    againstWall(position) {
        return this.table.offLimits(position);
    }

    againstBlock(position) {
        return this.table.cell(position).brick !== null;
    }

    againstAll(position) {        
        if (this.againstWall(position)) {
            return new Collision(position, 'WALL_COLLISION');
        }

        if (this.againstBlock(position)) {
            return new Collision(position, 'BLOCK_COLLISION');
        }

        return false;
    }

    lookOut(positions) {
        var collisions = new ArrayMain();

        if (!(positions instanceof Array)) { positions = [positions]; }

        positions.forEach((i) => {
            var collision = this.againstAll(i);

            if (collision) { collisions.add(collision); }
        }, this);

        return collisions;
    }
}
