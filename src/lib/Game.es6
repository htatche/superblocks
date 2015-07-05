/*global Phaser*/

import Table        from './Table.es6';
import Position     from './Position.es6';

export default class Game {
    constructor(xSize, ySize, cellSize, startCallback) {
        this.xSize = xSize;
        this.ySize = ySize;
        this.cellSize = cellSize;
        this.phaser = this.phaserGame(startCallback);
        this.table = new Table(xSize, ySize);
        this.cursos = null;
    }

    get cellsArray()   { return this._cellsArray; }

    phaserGame(startCallback) {
        var width  = Position.toPixels(this.xSize),
            height = Position.toPixels(this.ySize);

        return new Phaser.Game(
            width,
            height,
            Phaser.AUTO,
            'tetris',
            { preload: this.phaserPreload,
              create: this.phaserCreate.bind(this, startCallback),
              update: this.phaserUpdate });
    }

    phaserPreload() {
        this.load.image('orange', '../images/block_orange.png');
        this.load.image('green', './images/block_green.png');
        this.load.image('yellow', '../../images/block_yellow.png');
        this.load.image('pink', '../../images/block_pink.png');
    }

    phaserCreate(startCallback) {
        this.phaser.add.graphics(0, 0);
        this.cursors = this.phaser.input.keyboard.createCursorKeys();

        startCallback();
    }

    phaserUpdate() {

    }
}
