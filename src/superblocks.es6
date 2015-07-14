/*global Phaser*/

import Game             from './lib/Game.es6';
import Block            from './lib/Block.es6';
import ArrayMain        from './lib/ArrayMain.es6';
import data             from './data/data.json.es6';

var game;

/**
 * @todo This will be translate to parseJSONFile in Block
 */
var createBlocksArray = function() {
    var array = new ArrayMain();

    for (var i = 0; i < data.blocks.length; ++i) {
        array.add(data.blocks[i]);
    }

    return array;
};

var moveAround = function(block) {
    // setTimeout(block.down.bind(block), 500);
    // setTimeout(block.down.bind(block), 700);
    // setTimeout(block.right.bind(block), 900);

    // setTimeout(block.rotateRight.bind(block), 1000);
    // setTimeout(block.rotateRight.bind(block), 2000);
    // setTimeout(block.rotateRight.bind(block), 3000);
    // setTimeout(block.rotateRight.bind(block), 4000);
};

var start = function() {
    var blocks = createBlocksArray(),
        column  = blocks[1],
        pyramid  = blocks[0];

    new Block(
        game.phaser, game.table, column.patterns,
        2, 19, column.pivot, column.anchor
    ).build();

    new Block(
        game.phaser, game.table, column.patterns,
        6, 19, column.pivot, column.anchor
    ).build();

    var pyramidBlock = new Block(
        game.phaser, game.table, pyramid.patterns,
        2, 2, pyramid.pivot, pyramid.anchor
    );

    pyramidBlock.build();

    setTimeout(pyramidBlock.rotateRight.bind(pyramidBlock), 1000);
    setTimeout(pyramidBlock.to.bind(pyramidBlock, {x: 8, y: 18}), 2000);

    setTimeout(function() {
        game.table.row(19).destroy();
        game.table.row(18).down();
    }, 5000);



    // cubeBlock.up();
    // cubeBlock.up();
    // cubeBlock.left();

    // new Block(
    //     game.phaser, game.table, block.patterns,
    //     2, 19, block.pivot, block.anchor
    // ).build();

    // new Block(
    //     game.phaser, game.table, block.patterns,
    //     2, 2, block.pivot, block.anchor
    // ).build();

    // new Block(
    //     game.phaser, game.table, block.patterns,
    //     2, 2, block.pivot, block.anchor
    // ).build();

    // new Block(
    //     game.phaser, game.table, block.patterns,
    //     2, 2, block.pivot, block.anchor
    // ).build();

    // new Block(
    //     game.phaser, game.table, block.patterns,
    //     2, 2, block.pivot, block.anchor
    // ).build();                

};

var update = function() {
};

game = new Game(10, 20, 35, 'path', start, update);
window.game = game;