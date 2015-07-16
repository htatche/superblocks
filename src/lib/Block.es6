import Brick            from './Brick.es6';
import ArrayMain        from './ArrayMain.es6';
import BlockPosition    from './Position/BlockPosition.es6';
import BrickPosition    from './Position/BrickPosition.es6';
import MoveBlock        from './Move/MoveBlock.es6';
import Rotate           from './Rotate.es6';

export default class Block {
    constructor(phaserGame, table, patterns, x, y, pivot, childsAnchor) {
        this.phaserGame         = phaserGame;
        this.phaserGroup        = this.phaserGame.add.group();

        this.position           = new BlockPosition(x, y, pivot, childsAnchor);
        this.bricks             = new ArrayMain();

        this.patterns           = patterns;
        this.table              = table;
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

    addBrick(brick) {
        brick.putCell(brick.position, this.table);

        return this.bricks.add(brick);
    }

    newBrick(position) {
        var spritePosition = position.phaserSpritePosition();

        var sprite = this.phaserGroup.create(
            spritePosition.x,
            spritePosition.y,
            'green'
        );

        return this.addBrick(new Brick(position, this, sprite));
    }

    build() {
        return new Promise((resolve, reject) => {
            var pattern = this.rotate.findPatternByAngle(0);

            for (var i = 0; i < pattern.positions.length; ++i) {
                this.newBrick(new BrickPosition(
                    this.position,
                    pattern.positions[i][0],
                    pattern.positions[i][1],
                    this.position.childsAnchor
                ));
            }

            resolve(this);
        });
    }

    buildAny(shapes) {
        this.build(shapes.randomPick());
    }

    clearCells() {
        this.bricks.forEach((brick) => {
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
