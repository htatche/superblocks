import Util                      from './Util.es6';
import Brick                     from './Brick.es6';
import ArrayMain                 from './Array/ArrayMain.es6';
import BlockPosition             from './Position/BlockPosition.es6';
import BrickPosition             from './Position/BrickPosition.es6';
import MoveBlock                 from './Move/MoveBlock.es6';
import Rotate                    from './Rotate.es6';
import CollisionDetection        from './Collision/CollisionDetection.es6';

export default class Block {
    constructor(phaserGame, table, patterns, positionArgs) {
        this.phaserGame         = phaserGame;
        this.phaserGroup        = this.phaserGame.add.group();

        this.table              = table;
        this.position           = this.createPosition(positionArgs);

        this.bricks             = new ArrayMain();
        this.patterns           = patterns;
        this.nBlock             = table.incrementNBlocks();

        this.loadPhaserGroupPosition();
        this.loadPhaserGroupPivot();
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
        brick.putCell(brick.position, this.table);

        return this.bricks.add(brick);
    }

    addBricks(bricks) {
        bricks.forEach((brick) => {
            this.addOneBrick(brick);
        });
    }

    createBrick(position) {
        var spritePosition = position.phaserSpritePosition();

        var sprite = this.phaserGroup.create(
            spritePosition.x,
            spritePosition.y,
            'green'
        );

        return new Brick(position, this, sprite);
    }

    build() {
        return new Promise((resolve, reject) => {

            var pattern = this.rotate.findPatternByAngle(0);

            var bricks = pattern.positions.map((position) => {
                return this.createBrick(new BrickPosition(
                    this.position,
                    position[0],
                    position[1],
                    this.position.childsAnchor
                ));
            });


            var collisions = new CollisionDetection(this.table)
            .lookOut(bricks);

            if (collisions.length === 0) {
                this.addBricks(bricks);

                resolve(this);
            } else {
                reject(collisions);
            }
        });
    }

    buildAny(shapes) {
        this.build(shapes.randomPick());
    }

    clearCells() {
        return this.bricks.forEach((brick) => {
            return brick.clearCell();
        });
    }

    removeBricks(destroy = false) {
        this.phaserGroup.removeAll(destroy);
        this.clearCells();
    }

    destroy() {
        this.phaserGroup.removeAll(true);
    }

    land(speed, didLand) {
        var resolved = () => {
            this.land(speed, didLand);
        };

        var rejected = function(collisions) {
            didLand(collisions);
        };

        setTimeout(() => {
            this.down(true).then(
                resolved,
                rejected
            );
        }, speed);
    }

    createPosition(args) {
        if (args.randomLanding) { args = this.randomLandingPosition(args); }

        return new BlockPosition(
            args.x, args.y, args.pivot, args.childsAnchor
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
