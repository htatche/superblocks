import Brick            from './Brick.es6';
import ArrayMain        from './ArrayMain.es6';
import Position         from './Position.es6';

export default class Block {
    constructor(phaserGame, table) {
        this.phaserGroup = phaserGame.add.group();
        this.position    = new Position();
        this.bricks      = new ArrayMain();
        this.table       = table;
        this.nBlock      = table.incrementNBlocks();
    }

}
