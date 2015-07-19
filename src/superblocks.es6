/*global Phaser*/

import ArrayMain        from './lib/Array/ArrayMain.es6';
import Game             from './lib/Game/Game.es6';
import Data             from './data/data.json.es6';
import Block            from './lib/Block.es6';

/**
 * @todo This will be translate to parseJSONFile in Block
 */
var DataBlocks = (function() {
    var data = Data,
        array = new ArrayMain();

    for (var i = 0; i < data.blocks.length; ++i) {
        array.add(data.blocks[i]);
    }
    return array;
})();

// var moveAround = function(block) {
    // setTimeout(block.down.bind(block), 500);
    // setTimeout(block.down.bind(block), 700);
    // setTimeout(block.right.bind(block), 900);

    // setTimeout(block.rotateRight.bind(block), 1000);
    // setTimeout(block.rotateRight.bind(block), 2000);
    // setTimeout(block.rotateRight.bind(block), 3000);
    // setTimeout(block.rotateRight.bind(block), 4000);

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
// };


var start = function() {
    var game = window.Superblocks;

    return true;
};

var update = function() {

};

window.Superblocks = new Game(
    {
        xSize: 10, ySize: 20, cellSize: 35
    },
    {speed: 200},
    DataBlocks,
    start, update,
    true
);
