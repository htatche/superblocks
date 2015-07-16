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

// var moveAround = function(block) {
    // setTimeout(block.down.bind(block), 500);
    // setTimeout(block.down.bind(block), 700);
    // setTimeout(block.right.bind(block), 900);

    // setTimeout(block.rotateRight.bind(block), 1000);
    // setTimeout(block.rotateRight.bind(block), 2000);
    // setTimeout(block.rotateRight.bind(block), 3000);
    // setTimeout(block.rotateRight.bind(block), 4000);
// };

var start = function() {
    var blocks = createBlocksArray(),
        column  = blocks[1];

    game.landingBlock = new Block(
        game.phaser, game.table, column.patterns,
        2, 0, column.pivot, column.anchor
    );

    game.landingBlock.build();

    // var rotateRight = function() {
    //     var onSuccess = function() {
    //         console.log('sucess');
    //     };

    //     var onFail = function(collisions) {
    //         console.log(collisions);
    //     };

    //     this.rotateRight(true).then(onSuccess, onFail);
    // };

    // setTimeout(rotateRight.bind(column1), 1000);
    // setTimeout(rotateRight.bind(column2), 2000);

};

var update = function() {

};

game = new Game(10, 20, 35, 'path', start, update);
window.game = game;