import Util                      from './Util.es6';
import Brick                     from './Brick.es6';
import ArrayMain                 from './Array/ArrayMain.es6';
import BlockPosition             from './Position/BlockPosition.es6';
// import BrickPosition             from './Position/BrickPosition.es6';
import MoveBlock                 from './Move/MoveBlock.es6';
import Rotate                    from './Rotate.es6';
import CollisionDetection        from './Collision/CollisionDetection.es6';
import Color                     from './Color.es6';

export default class Block {
    constructor(phaserGame, table, patterns, positionArgs, colorName) {
        this.phaserGame         = phaserGame;
        this.phaserGroup        = this.phaserGame.add.group();

        this.table              = table;
        this.position           = this.createPosition(positionArgs);

        this.bricks             = new ArrayMain();
        this.patterns           = patterns;
        this.color              = new Color(colorName);
        this.nBlock             = table.incrementNBlocks();

        this.loadPhaserGroupPivot();
        this.loadPhaserGroupPosition();
    }

    get moveBlock()         { return new MoveBlock(this.position, this); }
    get rotate()            { return new Rotate(this, true); }

    loadPhaserGroupPosition() {
        var position = this.position.phaserGroupPosition();

        this.phaserGroup.x = position.x;
        this.phaserGroup.y = position.y;
    }

    loadPhaserGroupPivot() {
        var pivot = this.position.phaserGroupPivot();

        this.phaserGroup.pivot.x = pivot.x;
        this.phaserGroup.pivot.y = pivot.y;
    }

    addOneBrick(brick) {
        brick.build(false);
        this.phaserGroup.add(brick.phaserSprite);

        return this.bricks.add(brick);
    }

    addBricks(bricks) {
        bricks.forEach((brick) => { this.addOneBrick(brick); });
    }

    build() {
        return new Promise((resolve, reject) => {

            var pattern = this.rotate.findPatternByAngle(0);

            var bricks = pattern.positions.map((coord) => {
                return new Brick(
                    this.table, coord, this.color.name, this.phaserGame, this
                );
            });

            var collisions = new CollisionDetection(this.table)
            .lookOut(bricks);

            if (collisions.length === 0) {
                this.addBricks(bricks);

                resolve(this);
            } else {
                this.removeBricks(true);

                reject(collisions);
            }
        });
    }

    buildAny(shapes) {
        this.build(shapes.randomPick());
    }

    clearCells() {
        return this.bricks.forEach((brick) => { return brick.clearCell(); });
    }

    removeBrick(brick, destroy = false) {
        var index = this.bricks.find(brick);

        this.bricks.splice(index, 1);

        /* Remove parentBlock from table.blocks is last brick was removed.
         */
        if (this.bricks.isEmpty) {
            var tableBlocks = this.table.blocks,
                idx = tableBlocks.indexOf(this);

            tableBlocks.splice(idx, 1);
        }

        this.phaserGroup.remove(this.phaserSprite, destroy);
    }

    removeAllBricks(destroy = false) {
        this.bricks = new ArrayMain();

        this.phaserGroup.removeAll(destroy);
    }

    destroy() {
        this.removeAllBricks(true);
        this.clearCells();
    }

    unbound() {
        this.bricks.forEach((brick) => {
            var _brick = new Brick(
                brick.table, brick.position.coordinates,
                brick.color,
                brick.phaserGame,
                null,
                brick.nBrick
            );

            _brick.build(false);
        });

        return this.destroy();
    }

    land(speed, didLand) {
        var resolved = ()           => { this.land(speed, didLand); },
            rejected = (collisions) => {
                this.unbound();
                didLand(collisions);
            };

        setTimeout(() => {
            this.down(true).then(
                resolved,
                rejected
            );
        }, speed);
    }

    /**
     * @deprecated !
     * @param  {[type]} doneCallback [description]
     * @return {[type]}              [description]
     */
    collapse(doneCallback) {
        return this.down(true).then(
            this.collapse.bind(this, doneCallback),
            doneCallback
        );
    }

    randomLandingPosition(args) {
        var min = args.pivot.x,
            max = this.table.xSize - args.pivot.x,

            x   = Util.getRandomInt(min, max - 1),
            y   = args.pivot.y;

        args.x = x;
        args.y = y;

        return args;
    }

    createPosition(args) {
        if (args.randomLanding) { args = this.randomLandingPosition(args); }

        var pos = new BlockPosition(
            args.x, args.y, args.pivot, args.childsAnchor
        );

        return pos;
    }

    down(detectCollision)   { return this.moveBlock.down(detectCollision); }

    up(detectCollision)     { return this.moveBlock.up(detectCollision); }

    right(detectCollision)  { return this.moveBlock.right(detectCollision); }

    left(detectCollision)   { return this.moveBlock.left(detectCollision); }

    to(position, detectCollision) {
        return this.moveBlock.to(position, detectCollision);
    }

    rotateRight(detectCollision) {
        return new Rotate(this, detectCollision).right();
    }

    rotateLeft(detectCollision) {
        return new Rotate(this, detectCollision).left();
    }
}
