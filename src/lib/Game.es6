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

        this.cursors = null;
        this.keyboard = {};

        // this.data = this.parseJSONFile(dataPath);
        this.data = dataPath;
    }

    get cellsArray()   { return this._cellsArray; }

    addKeyboardKeys() {
        var phaserKeyboard = this.phaser.input.keyboard;

        this.cursors = phaserKeyboard.createCursorKeys();
        this.keyboard.A = phaserKeyboard.addKey(Phaser.Keyboard.A);
        this.keyboard.S = phaserKeyboard.addKey(Phaser.Keyboard.S);
    }

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

        this.addKeyboardKeys();

        startCallback();
    }

    phaserUpdate(updateCallback) {
        var keyArrow;

        if (this.cursors.up.justDown)         { keyArrow = 'up'; }
        else if (this.cursors.down.justDown)  { keyArrow = 'down'; }
        else if (this.cursors.left.justDown)  { keyArrow = 'left'; }
        else if (this.cursors.right.justDown) { keyArrow = 'right'; }
        else if (this.keyboard.A.justDown)    { keyArrow = 'A'; }
        else if (this.keyboard.S.justDown)    { keyArrow = 'S'; }

        switch (keyArrow) {
            case 'up':
                this.landingBlock.up(true);
                break;
            case 'down':
                this.landingBlock.down(true);
                break;
            case 'left':
                this.landingBlock.left(true);
                break;
            case 'right':
                this.landingBlock.right(true);
                break;
            case 'A':
                this.landingBlock.rotateLeft(true);
                break;
            case 'S':
                this.landingBlock.rotateRight(true);
                break;
        }

        // updateCallback();
    }

    phaserRender() {

    }

    // parseJSONFile(json) {
    // }

}
