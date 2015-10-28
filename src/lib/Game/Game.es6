/*global Phaser*/

import Table                     from '../Table.es6';
import Position                  from '../Position/Position.es6';
import Brick                     from '../Brick.es6';
import Block                     from '../Block.es6';
import GameLoop                  from './GameLoop.es6';
import Color                     from '../Color.es6';
import Level                     from '../Level.es6';

export default class Game {
    constructor(
        tableOptions, gameOptions, dataBlocks,
        startCallback, updateCallback,
        debugMode
    ) {
        this.cellSize           = tableOptions.cellSize;
        this.options            = gameOptions;

        this.level              = new Level(1, gameOptions.speedOptions);
        this.score              = 0;

        this.blocks             = dataBlocks;

        this.table              = new Table(
            tableOptions.xSize, tableOptions.ySize
        );

        this.phaserGame         = this.createPhaserGame(
            startCallback, updateCallback
        );

        this.cursors            = null;
        this.keyboard           = {};

        // this.data = this.parseJSONFile(dataPath);
        this.debugMode          = debugMode;
    }

    get cellsArray()   { return this._cellsArray; }

    createPhaserGame(startCallback, updateCallback) {
        var position = new Position(),
            width    = position.toPixels(this.table.xSize, this.cellSize),
            height   = position.toPixels(this.table.ySize, this.cellSize);

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
        Color.loadTextures(this);
    }

    phaserCreate(startCallback) {
        this.phaserGame.add.graphics(0, 0);

        this.addKeyboardKeys();

        startCallback();

        this.start();
    }

    phaserUpdate(updateCallback) {
        this.listenKeyboardInput();

        // updateCallback();
    }

    phaserRender() {

    }

    // parseJSONFile(json) {
    // }

    addKeyboardKeys() {
        var phaserKeyboard = this.phaserGame.input.keyboard;

        this.cursors = phaserKeyboard.createCursorKeys();
        this.keyboard.A = phaserKeyboard.addKey(Phaser.Keyboard.A);
        this.keyboard.S = phaserKeyboard.addKey(Phaser.Keyboard.S);
        this.keyboard.SPACE = phaserKeyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }

    listenKeyboardInput() {
        var keyArrow;

        if (this.cursors.up.justDown)          { keyArrow = 'up'; }
        else if (this.cursors.down.justDown)   { keyArrow = 'down'; }
        else if (this.cursors.left.justDown)   { keyArrow = 'left'; }
        else if (this.cursors.right.justDown)  { keyArrow = 'right'; }
        else if (this.keyboard.A.justDown)     { keyArrow = 'A'; }
        else if (this.keyboard.S.justDown)     { keyArrow = 'S'; }
        else if (this.keyboard.SPACE.justDown) { keyArrow = 'SPACE'; }

        switch (keyArrow) {
            // case 'up':
            //     this.landingBlock.up(true);
            //     break;
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
            case 'SPACE':
                this.landingBlock.collapse(() => {});
                break;
        }
    }

    newBlock(blockData) {
        return new Block(
            this.phaserGame, this.table, blockData.patterns,
            { randomLanding: true, pivot: blockData.pivot, childsAnchor: blockData.anchor },
            blockData.colorName
        );
    }

    newRandomBlock() {
        return this.newBlock(this.blocks.randomPick());
    }

    gameOver() {

    }

    start() {
        if (this.debugMode) {
            // var debug = new Debug();
        }

        var self = this;

        var pyramid             = self.blocks[0],
            column              = self.blocks[1],
            cube                = self.blocks[2],
            stackRight          = self.blocks[3],
            stackLeft           = self.blocks[4],
            squareLeft          = self.blocks[5],
            squareRight         = self.blocks[6];

        // this.landingBlock = new Brick(
        //     self.table,
        //     [5, 5],
        //     'red',
        //     self.phaserGame
        // );

        // this.landingBlock.build(false);

        // this.landingBlock = new Block(
        //     self.phaserGame, self.table, squareRight.patterns,
        //     {
        //         x: 2, y: 2,
        //         pivot: squareRight.pivot,
        //         childsAnchor: squareRight.anchor
        //     },
        //     'blue'
        // );

        // this.landingBlock.build();

        var gameLoop = new GameLoop(this);

        gameLoop.start();
    }

    restart() {
        this.table.destroyAllRows();
        this.start();
    }

}
