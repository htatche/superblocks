import Brick            from './Brick.es6';
import ArrayMain        from './ArrayMain.es6';
import Position         from './Position.es6';
import MoveBlock        from './Move/MoveBlock.es6';
import Rotate           from './Rotate.es6';

export default class Block {
    constructor(phaserGame, table, patterns, pivot, anchor) {
        this.position           = new Position(1, 1, anchor, pivot);
        this.anchor             = anchor;
        this.bricks             = new ArrayMain();

        this.patterns           = patterns;
        this.table              = table;
        this.nBlock             = table.incrementNBlocks();

        this.phaserGame         = phaserGame;
        this.phaserGroup        = phaserGame.add.group();

        this.phaserPivot        = this.position.phaserPivot;
        this.phaserPosition     = this.position.phaserGroupPosition();
    }

    get position()          { return this._position; }
    set position(position)  { this._position = position; }

    get moveBlock()         { return new MoveBlock(this.position, this); }
    get rotate()            { return new Rotate(this); }

    set phaserPivot(pivot) {
        this.phaserGroup.pivot.x = pivot.x;
        this.phaserGroup.pivot.y = pivot.y;
    }

    set phaserPosition(position) {
        this.phaserGroup.x = position.x;
        this.phaserGroup.y = position.y;
    }

    addBrick(brick) {
        brick.putCell(brick.position, this.table);

        return this.bricks.add(brick);
    }

    newBrick(position) {
        var sprite = this.phaserGroup.create(
            position.relativeToPivot(this.position.pivot).x,
            position.relativeToPivot(this.position.pivot).y,
            'green'
        );

        position.x = position.relativeTo(this.position).x;
        position.y = position.relativeTo(this.position).y;

        return this.addBrick(new Brick(position, this, sprite));
    }

    build() {
        return new Promise((resolve, reject) => {
            if (!this.bricks.isEmpty) { return false; }

            var pattern = this.rotate.findPatternByAngle(0);

            for (var i = 0; i < pattern.positions.length; ++i) {
                this.newBrick(new Position(
                    pattern.positions[i][0],
                    pattern.positions[i][1],
                    this.anchor
                ));
            }

            resolve(this);
        });
    }

    put() {

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

    down()              { return this.moveBlock.down(); }

    up()                { return this.moveBlock.up(); }

    right()             { return this.moveBlock.right(); }

    left()             { return this.moveBlock.left(); }

    rotateRight()       { return new Rotate(this).right(); }

    rotateLeft()        { return new Rotate(this).left(); }

}
