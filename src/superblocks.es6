import ArrayMain        from './lib/Array/ArrayMain.es6';
import Game             from './lib/Game/Game.es6';
import Data             from './data/data.json.es6';

var data = Data;

/**
 * @todo This will be translate to parseJSONFile in Block
 */
var DataBlocks = (function() {
    var array = new ArrayMain();

    for (var i = 0; i < data.blocks.length; ++i) {
        array.add(data.blocks[i]);
    }
    return array;
})();

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
    data.gameOptions,
    DataBlocks,
    start, update,
    true
);
