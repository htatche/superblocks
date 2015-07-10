import Brick            from './Brick.es6';
import ArrayMain        from './ArrayMain.es6';
import Position         from './Position.es6';
import MoveBlock        from './Move/MoveBlock.es6';
import Rotate           from './Rotate.es6';

export default class Block {
    constructor(phaserGame, table) {
        this.position    = new Position(1, 1);
        this.angle       = 0;
        this.bricks      = new ArrayMain();
        this.table       = table;
        this.nBlock      = table.incrementNBlocks();
        this.phaserGame  = phaserGame;
        this.phaserGroup = phaserGame.add.group();

        this.put();
    }

    get position()          { return this._position; }
    set position(position)  { this._position = position; }
    get moveBlock()         { return new MoveBlock(this.position, this); }
    get rotate()            { return new Rotate(this); }

    put() {
        this.phaserGroup.x = this.position.xCenterPosition();
        this.phaserGroup.y = this.position.yCenterPosition();
    }

    addBrick(brick) {
        brick.putCell(brick.position, this.table);

        return this.bricks.add(brick);
    }

    newBrick(position) {
        var sprite = this.phaserGroup.create(position.xPixels, position.yPixels, 'green');

        return this.addBrick(new Brick(position, this, sprite));
    }

    /**
     * @todo  Add possibility to choose angle
     * @param  {[type]}
     * @return {[type]}
     */
    build(shape) {
        return new Promise((resolve, reject) => {
            if (!this.bricks.isEmpty) { return false; }

            var blocks = shape.angles[0].blocks;

            for (var i = 0; i < blocks.length; ++i) {
                this.newBrick(new Position(blocks[i][0], blocks[i][1]));
            }

            this.phaserGroup.pivot.x = shape.pivot.x;
            this.phaserGroup.pivot.y = shape.pivot.y;

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

    /**
     * @param  {Boolean}
     * @return {[type]}
     */
    removeBricks(destroy = false) {
        this.phaserGroup.removeAll(destroy);
        this.clearCells();
    }

    /**
     * @return {[type]}
     */
    destroy() {
        this.phaserGroup.removeAll(true);
    }

    down()              { return this.moveBlock.down(); }

    up()                { return this.moveBlock.up(); }

    rotateRight()       { return new Rotate(this).right(); }

    rotateLeft()        { return new Rotate(this).left(); }

}
