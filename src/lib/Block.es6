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

    get position() { return this._position; }
    set position(position) { this._position = position; }

    addBrick(brick) {
        this.table.putBrick(brick, brick.position);

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

    move(direction) {
        return new Promise((resolve, reject) => {
            var newPosition = new Move(this.position)[direction]();

            this.position = newPosition;

            this.phaserTranslate(newPosition);
            this.table.moveBlock(this, direction);

            resolve(this.position);
        });
    }

    up() {
        return this.move('up');
    }

    down() {
        return this.move('down');
    }

    phaserTranslate(position) {
        var tween = this.phaserGame.add.tween(this.phaserGroup);

        tween.to(
          position.phaserPosition,
          1,
          Phaser.Easing.Linear.None,
          true
        );

        return tween;
    }

}
