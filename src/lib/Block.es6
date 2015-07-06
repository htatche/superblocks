import Brick            from './Brick.es6';
import ArrayMain        from './ArrayMain.es6';
import Position         from './Position.es6';
import MoveBlock        from './Move/MoveBlock.es6';
import Promise          from '../../bower_components/when/es6-shim/Promise.browserify-es6.js';

export default class Block {
    constructor(phaserGame, table) {
        this.position    = new Position();
        this.bricks      = new ArrayMain();
        this.table       = table;
        this.nBlock      = table.incrementNBlocks();
        this.phaserGame  = phaserGame;
        this.phaserGroup = phaserGame.add.group();
    }

    get position()          { return this._position; }
    set position(position)  { this._position = position; }
    get moveBlock()         { return new MoveBlock(this.position, this); }

    addBrick(brick) {
        brick.putCell(brick.position, this.table);

        return this.bricks.add(brick);
    }

    newBrick(position) {
        this.phaserGroup.create(position.xPixels, position.yPixels, 'green');

        return this.addBrick(new Brick(position, this));
    }

    /**
     * @param  {Boolean}
     * @return {[type]}
     * TODO: Apply changes in Table
     */
    removeBricks(destroy = false) {
        this.phaserGroup.removeAll(destroy);
    }

    /**
     * @return {[type]}
     * TODO: Apply changes in Table
     */
    destroy() {
        this.phaserGroup.removeAll(true);
    }

    down()      { return this.moveBlock.down(); }

    up()        { return this.moveBlock.up(); }
}
