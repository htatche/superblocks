(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Array2D = (function () {
    function Array2D(xSize, ySize) {
        _classCallCheck(this, Array2D);

        this.xSize = xSize;
        this.ySize = ySize;
        this._array = this.buildArray();
    }

    _createClass(Array2D, [{
        key: "getAt",
        value: function getAt(x, y) {
            return this.array[x][y];
        }
    }, {
        key: "setAt",
        value: function setAt(x, y, val) {
            this._array[x][y] = val;
        }
    }, {
        key: "buildArray",
        value: function buildArray() {
            var array = new Array(this.xSize);

            for (var y = 0; y < this.xSize; y++) {
                array[y] = new Array(this.ySize);
            }

            this._array = array;

            return this.array;
        }
    }, {
        key: "fillWith",
        value: function fillWith(val) {
            for (var x = 0; x < this.xSize; ++x) {
                for (var y = 0; y < this.ySize; ++y) {
                    this.setAt(x, y, val);
                }
            }

            return this.array;
        }
    }, {
        key: "array",
        get: function get() {
            return this._array;
        }
    }]);

    return Array2D;
})();

exports["default"] = Array2D;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var ArrayBlocks = (function (_Array) {
    function ArrayBlocks() {
        _classCallCheck(this, ArrayBlocks);

        _get(Object.getPrototypeOf(ArrayBlocks.prototype), "constructor", this).call(this);
    }

    _inherits(ArrayBlocks, _Array);

    _createClass(ArrayBlocks, [{
        key: "add",
        value: function add(block) {
            return this.push(block);
        }
    }, {
        key: "last",
        value: function last() {
            return this.slice(-1)[0];
        }
    }, {
        key: "findByColor",
        value: function findByColor() {}
    }, {
        key: "findByTexture",
        value: function findByTexture() {}
    }]);

    return ArrayBlocks;
})(Array);

exports["default"] = ArrayBlocks;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ArrayBlocksEs6 = require('./ArrayBlocks.es6');

var _ArrayBlocksEs62 = _interopRequireDefault(_ArrayBlocksEs6);

var _Array2DEs6 = require('./Array2D.es6');

var _Array2DEs62 = _interopRequireDefault(_Array2DEs6);

var Canvas = (function () {
    function Canvas(width, height) {
        _classCallCheck(this, Canvas);

        this.width = width;
        this.height = height;
        this.blocks = new _ArrayBlocksEs62['default']();

        this._grid = new _Array2DEs62['default'](width, height);
    }

    _createClass(Canvas, [{
        key: 'newBlock',
        value: function newBlock() {
            return this.addBlock(new Block());
        }
    }, {
        key: 'addBlock',
        value: function addBlock(block) {
            return this.blocks.add(block);
        }
    }, {
        key: 'isRowIsCompleted',
        value: function isRowIsCompleted() {}
    }, {
        key: 'shiftRowDown',
        value: function shiftRowDown(n) {}
    }, {
        key: 'clearRow',
        value: function clearRow(n) {}
    }, {
        key: 'clearAt',
        value: function clearAt(x, y) {}
    }, {
        key: 'clean',
        value: function clean() {
            this.grid.fillWith(null);
        }
    }, {
        key: 'consolePrint',
        value: function consolePrint() {
            console.table(this.grid.array);
        }
    }, {
        key: 'grid',
        get: function get() {
            return this._grid;
        }
    }]);

    return Canvas;
})();

exports['default'] = Canvas;
module.exports = exports['default'];

},{"./Array2D.es6":1,"./ArrayBlocks.es6":2}],4:[function(require,module,exports){
/*global document Phaser*/

// import Grid from './lib/Grid.es6';
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libCanvasEs6 = require('./lib/Canvas.es6');

var _libCanvasEs62 = _interopRequireDefault(_libCanvasEs6);

// var canvas = new Canvas(5, 5);

// import Array2D from './lib/Array2D.es6';

// var array2D = new Array2D(5, 5);

2 + 2;
2 + 2;
console.log('allright');

// var HEIGHT = 350,
//     WIDTH = 300;

// var group, game;

// function rotate() {
//   game.add.tween(group).to(
//     { angle: group.angle += 90 },
//     10,
//     Phaser.Easing.Linear.None,
//     true
//   );
// }

// function down() {
//   var tween = game.add.tween(group);

//   tween.to(
//     {y: group.y + 35},
//     1,
//     Phaser.Easing.Linear.None,
//     true
//   );

// }

// function create() {
//     // elm = document.getElementById('position');
//     var graphics = game.add.graphics();
//     this.cursors = game.input.keyboard.createCursorKeys();

//     group = game.add.group();

//     group.x = 35 + 35 / 2 + 35;
//     group.y = 35 + 35 / 2 + 35;

//     group.pivot.x = 35;
//     group.pivot.y = 35;

//     var sprite = group.create(0, 35, 'orange');
//     sprite.anchor.setTo(0.5, 0.5);

//     var sprite2 = group.create(35, 35, 'orange');
//     sprite2.anchor.setTo(0.5, 0.5);

//     var sprite3 = group.create(70, 35, 'orange');
//     sprite3.anchor.setTo(0.5, 0.5);

//     var sprite4 = group.create(35, 0, 'orange');
//     sprite4.anchor.setTo(0.5, 0.5);

//     // group.x = 35 + 35*0.5 + 70; //(35 + 35 * anchor + group pivot)
//     // group.y = 35 + 35*0.5;

//     // group.pivot.x = 35;
//     // group.pivot.y = 0;

//     // var sprite = group.create(0, 0, 'orange');
//     // sprite.anchor.setTo(0.5,0.5);

//     // var sprite2 = group.create(35, 0, 'orange');
//     // sprite2.anchor.setTo(0.5,0.5);

//     // var sprite2 = group.create(70, 0, 'orange');
//     // sprite2.anchor.setTo(0.5,0.5);

//     // var sprite2 = group.create(105, 0, 'orange');
//     // sprite2.anchor.setTo(0.5,0.5);

//     graphics.lineStyle(1, 0x00ff00, 1);
//     graphics.moveTo(0, 35);
//     graphics.lineTo(300, 35);

//     graphics.lineStyle(1, 0x00ff00, 1);
//     graphics.moveTo(0, 70);
//     graphics.lineTo(300, 70);

//     graphics.lineStyle(1, 0x00ff00, 1);
//     graphics.moveTo(35, 0);
//     graphics.lineTo(35, 300);

//     graphics.lineStyle(1, 0x00ff00, 1);
//     graphics.moveTo(70, 0);
//     graphics.lineTo(70, 300);
// }

// function update() {
//     var direction = null;

//     if (this.cursors.up.justDown) {
//         direction = 'up';
//     } else if (this.cursors.down.justDown) {
//         direction = 'down';
//     } else if (this.cursors.left.justDown) {
//         direction = 'left';
//     } else if (this.cursors.right.justDown) {
//         direction = 'right';
//     }

//   if (direction === 'up') {
//     rotate();
//   }

//   if (direction === 'down') {
//     down();
//   }

//   // elm.innerHTML = 'Position is ' + group.x + ',' + group.y;

// }

// function preload() {
//   game.load.image('orange', 'images/block_orange.png');
//   game.load.image('green', 'images/block_green.png');
//   game.load.image('yellow', 'images/block_yellow.png');
//   game.load.image('pink', 'images/block_pink.png');
// }

// function render() {
// }

// game = new Phaser.Game(
//     WIDTH,
//     HEIGHT,
//     Phaser.AUTO,
//     'tetris',
//     { preload: preload, create: create, update: update, render: render }
// );

},{"./lib/Canvas.es6":3}]},{},[4])


//# sourceMappingURL=superblocks.js.map