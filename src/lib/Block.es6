import Brick            from './Brick.es6';
import ArrayMain        from './ArrayMain.es6';
import Position         from './Position.es6';

export default class Block {
    constructor(phaserGame, table) {
        this.position    = new Position();
        this.bricks      = new ArrayMain();
        this.table       = table;
        this.nBlock      = table.incrementNBlocks();
        this.phaserGroup = phaserGame.add.group();
    }

    addBrick(brick) {
      return this.bricks.add(brick);
    }

    newBrick(position) {
      this.phaserGroup.create(position.xPixels, position.yPixels, 'green');

      return this.addBrick(new Brick(position));
    }

}
