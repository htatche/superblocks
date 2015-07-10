/*global Phaser*/

import Game             from './lib/Game.es6';
import Block            from './lib/Block.es6';
import ArrayMain        from './lib/ArrayMain.es6';
import data             from './data/data.json.es6';

var game;

var printMessage = function() {
    console.log('Done !');
};

/**
 * @todo This will be translate to parseJSONFile in Block
 */
var createShapesArray = function() {
    var array = new ArrayMain();

    for (var i = 0; i < data.shapes.length; ++i) {
        array.add(data.shapes[i]);
    }

    return array;
};

var start = function() {
    var shapes = createShapesArray();

    var block = new Block(game.phaser, game.table);

    block.build(shapes.first)
    // .then(block.rotateRight.bind(block))
    .then(block.rotateRight.bind(block));
};

game = new Game(10, 20, 35, 'path', start);
window.game = game;