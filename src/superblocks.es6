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

var start = function() {
    var blocks = createBlocksArray(),
        block  = blocks[1];

    var block = new Block(game.phaser, game.table, block.patterns, block.pivot, block.anchor);

    block.build();
    setTimeout(block.down.bind(block), 500);
    // setTimeout(block.down.bind(block), 700);
    setTimeout(block.right.bind(block), 900);

    setTimeout(block.rotateRight.bind(block), 1000);
    setTimeout(block.rotateRight.bind(block), 2000);
    setTimeout(block.rotateRight.bind(block), 3000);
    setTimeout(block.rotateRight.bind(block), 4000);
};

var update = function() {
    // console.log('upd');
};

game = new Game(10, 20, 35, 'path', start, update);
window.game = game;