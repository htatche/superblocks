/*global Phaser*/

import Table        from './Table.es6';
import Position     from './Position/Position.es6';

export default class Game {
    constructor(xSize, ySize, cellSize, dataPath, startCallback, updateCallback) {
        this.xSize = xSize;
        this.ySize = ySize;
        this.cellSize = cellSize;
        this.phaser = this.phaserGame(startCallback, updateCallback);
        this.table = new Table(xSize, ySize);
        this.cursos = null;
        // this.data = this.parseJSONFile(dataPath);
        this.data = dataPath;
    }

    get cellsArray()   { return this._cellsArray; }

    phaserGame(startCallback, updateCallback) {
        var position = new Position(),
            width    = position.toPixels(this.xSize, this.cellSize),
            height   = position.toPixels(this.ySize, this.cellSize);

        return new Phaser.Game(
            width,
            height,
            Phaser.AUTO,
            'tetris', {
                preload: this.phaserPreload,
                create: this.phaserCreate.bind(this, startCallback),
                update: this.phaserUpdate.bind(this, updateCallback),
                render: this.phaserRender
            });
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

    phaserUpdate(updateCallback) {

        // updateCallback();
    }

    phaserRender() {

    }

    // parseJSONFile(json) {
    // }

}
