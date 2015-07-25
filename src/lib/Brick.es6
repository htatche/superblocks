import BrickPosition             from './Position/BrickPosition.es6';
import MoveBrick                 from './Move/MoveBrick.es6';
import CollisionDetection        from './Collision/CollisionDetection.es6';

/**
 * @internal Brick can exist on its own or in a Block
 */
export default class Brick {
    constructor(table, coord, color, phaserGame, parentBlock, n) {
        this.table                  = table;
        this.color                  = color;
        this.phaserGame             = phaserGame;

        if (parentBlock) { this.parentBlock = parentBlock; }

        this.nBrick = n ? n : this.table.incrementNBricks();
        this.position     = this.createPosition(coord);
    }

    get moveBrick()         { return new MoveBrick(this.position, this); }

    // get / set cell

    detectCollisions() {
        var collisions = new CollisionDetection(this.table).lookOut(this);

        return collisions.length === 0;
    }

    build(checkCollision = false) {
        return new Promise((resolve, reject) => {

            var buildSuccess = () => {
                this.phaserSprite = this.createPhaserSprite();

                this.loadPhaserSpriteAnchor();
                this.putCell(this.position);

                resolve(this);
            };

            if (!checkCollision) { buildSuccess.call(this); }
            else {
                if (this.detectCollisions()) { reject(collisions); }
                else { buildSuccess.call(this); }
            }
        });
    }

    createPosition(coord) {
        if (this.parentBlock) {
            return new BrickPosition(
                coord[0], coord[1],
                this.parentBlock.position
            );
        } else {
            return new BrickPosition(
                coord.x, coord.y
            );
        }
    }

    loadPhaserSpriteAnchor() {
        this.phaserSprite.anchor.setTo(
            this.position.anchor.x,
            this.position.anchor.y
        );
    }

    createPhaserSprite() {
        var spritePosition = this.position.phaserSpritePosition();

        return this.phaserGame.add.sprite(
            spritePosition.x,
            spritePosition.y,
            this.color
        );
    }

    remove(destroy = false) {
        if (this.parentBlock) { this.parentBlock.removeBrick(this, destroy); }
    }

    destroy() {
        this.remove(true);

        this.phaserSprite.destroy();

        return this.clearCell();
    }

    clearCell() {
        return this.table.cell(this.position).clear();
    } 

    putCell(position) {
        // Allow to pass no position arg (Block.addBrick)
        this.position = position;

        return this.table.cellsArray.cell(this.position).setTo(this);
    }

    collapse(doneCallback) {
        return this.down(true).then(
            this.collapse.bind(this, doneCallback),
            doneCallback
        );
    }

    down(detectCollision)   { return this.moveBrick.down(detectCollision); }
}
