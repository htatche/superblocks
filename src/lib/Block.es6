/*global Phaser*/

import Brick            from './Brick.es6';
import ArrayMain        from './ArrayMain.es6';
import Position         from './Position.es6';
import Move             from './Move.es6';
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

    addBrick(brick) {
        this.table.putBrick(brick);

        return this.bricks.add(brick);
    }

    newBrick(position) {
        this.phaserGroup.create(position.xPixels, position.yPixels, 'green');

        return this.addBrick(new Brick(position, this.nBlock));
    }

    move(direction) {
        return new Promise((resolve, reject) => {
            this.phaserTranslate(new Move(this.position)[direction]());
            this.table.moveBlock(this, direction);

            resolve(this.position);
        });
    }

    down() {
        return this.move('down');
    }

    phaserTranslate(position) {
        var tween = this.phaserGame.add.tween(this.phaserGroup);

        // should I return tween ?
        tween.to(
          position.phaserPosition,
          1,
          Phaser.Easing.Linear.None,
          true
        );
    }

}
