(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var data = {
    blocks: [{
        name: 'pyramid',
        color: 'green',
        pivot: {
            x: 1,
            y: 1
        },
        anchor: {
            x: 0.5,
            y: 0.5
        },
        patterns: [{
            angle: 0,
            positions: [[-1, 0], [0, 0], [1, 0], [0, -1]]
        }, {
            angle: 90,
            positions: [[0, 0], [0, -1], [0, 1], [1, 0]]
        }, {
            angle: 180,
            positions: [[-1, 0], [0, 0], [1, 0], [0, 1]]
        }, {
            angle: 270,
            positions: [[0, 0], [0, -1], [0, 1], [-1, 0]]
        }]
    }, {
        name: 'column',
        color: 'yellow',
        pivot: {
            x: 2,
            y: 0
        },
        anchor: {
            x: 0,
            y: 1
        },
        patterns: [{
            angle: 0,
            positions: [[-2, 0], [-1, 0], [0, 0], [1, 0]]
        }, {
            angle: 90,
            positions: [[0, -1], [0, 0], [0, 1], [0, 2]]
        }, {
            angle: 180,
            positions: [[1, 1], [0, 1], [-1, 1], [-2, 1]]
        }, {
            angle: 270,
            positions: [[-1, 2], [-1, 1], [-1, 0], [-1, -1]]
        }
        // {
        //     angle: 360,
        //     positions: [
        //         [-2, 0], [-1, 0], [0, 0], [1, 0]
        //     ]
        // }
        ]
    },
    // {
    //     name: 'cube',
    //     color: 'blue',
    //     pivot: {
    //         x: 1,
    //         y: 1
    //     },
    //     anchor: {
    //         x: 1,
    //         y: 0
    //     },
    //     patterns: [
    //         {
    //             angle: 0,
    //             positions: [
    //                 [0, 0], [0, -1], [1, -1], [1, 0]
    //             ]
    //         },
    //         {
    //             angle: 90,
    //             positions: [
    //                 [0, -1], [1, -1], [1, 0], [0, 0]
    //             ]
    //         },
    //         {
    //             angle: 180,
    //             positions: [
    //                 [1, -1], [0, -1], [0, 0], [0, 1]
    //             ]
    //         },
    //         {
    //             angle: 270,
    //             positions: [
    //                 [1, 0], [0, 0], [0, -1], [1, -1]
    //             ]
    //         }
    //     ]
    // }          
    {
        name: 'cube',
        color: 'blue',
        pivot: {
            x: 1,
            y: 1
        },
        anchor: {
            x: 0,
            y: 0
        },
        patterns: [{
            angle: 0,
            positions: [[-1, 0], [-1, -1], [0, -1], [0, 0]]
        }, {
            angle: 90,
            positions: [[-1, -1], [0, -1], [0, 0], [-1, 0]]
        }, {
            angle: 180,
            positions: [[0, -1], [0, 0], [-1, 0], [-1, -1]]
        }, {
            angle: 270,
            positions: [[0, 0], [-1, 0], [-1, -1], [0, -1]]
        }]
    }]
};

exports['default'] = data;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
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
            return this._array[x][y];
        }
    }, {
        key: "setAt",
        value: function setAt(x, y, val) {
            this._array[x][y] = val;
        }
    }, {
        key: "buildArray",
        value: function buildArray() {
            var array = new Array(this.ySize);

            for (var y = 0; y < this.ySize; y++) {
                array[y] = new Array(this.xSize);
            }

            this._array = array;

            return this.array;
        }
    }, {
        key: "prettyPrint",
        value: function prettyPrint() {
            var array = this.array.map(function (row) {
                return row.map(function (cell) {
                    if (!cell.isEmpty()) {
                        return cell.brick.block.nBlock;
                    }
                });
            });

            return console.table(array);
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

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _ArrayMainEs6 = require('./ArrayMain.es6');

var _ArrayMainEs62 = _interopRequireDefault(_ArrayMainEs6);

var ArrayBlocks = (function (_ArrayMain) {
    function ArrayBlocks() {
        _classCallCheck(this, ArrayBlocks);

        _get(Object.getPrototypeOf(ArrayBlocks.prototype), 'constructor', this).call(this);
    }

    _inherits(ArrayBlocks, _ArrayMain);

    _createClass(ArrayBlocks, [{
        key: 'findByColor',
        value: function findByColor() {}
    }, {
        key: 'findByTexture',
        value: function findByTexture() {}
    }]);

    return ArrayBlocks;
})(_ArrayMainEs62['default']);

exports['default'] = ArrayBlocks;
module.exports = exports['default'];

},{"./ArrayMain.es6":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var ArrayMain = (function (_Array) {
    function ArrayMain() {
        _classCallCheck(this, ArrayMain);

        _get(Object.getPrototypeOf(ArrayMain.prototype), "constructor", this).call(this);
    }

    _inherits(ArrayMain, _Array);

    _createClass(ArrayMain, [{
        key: "add",
        value: function add(block) {
            this.push(block);

            return this.last;
        }
    }, {
        key: "find",
        value: function find(idx) {
            return this.indexOf(idx);
        }
    }, {
        key: "randomPick",
        value: function randomPick() {
            return this[Math.floor(Math.random() * this.length)];
        }
    }, {
        key: "first",
        get: function get() {
            return this[0];
        }
    }, {
        key: "last",
        get: function get() {
            return this.slice(-1)[0];
        }
    }, {
        key: "isEmpty",
        get: function get() {
            return this.length === 0;
        }
    }]);

    return ArrayMain;
})(Array);

exports["default"] = ArrayMain;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _BrickEs6 = require('./Brick.es6');

var _BrickEs62 = _interopRequireDefault(_BrickEs6);

var _ArrayMainEs6 = require('./ArrayMain.es6');

var _ArrayMainEs62 = _interopRequireDefault(_ArrayMainEs6);

var _PositionBlockPositionEs6 = require('./Position/BlockPosition.es6');

var _PositionBlockPositionEs62 = _interopRequireDefault(_PositionBlockPositionEs6);

var _PositionBrickPositionEs6 = require('./Position/BrickPosition.es6');

var _PositionBrickPositionEs62 = _interopRequireDefault(_PositionBrickPositionEs6);

var _MoveMoveBlockEs6 = require('./Move/MoveBlock.es6');

var _MoveMoveBlockEs62 = _interopRequireDefault(_MoveMoveBlockEs6);

var _RotateEs6 = require('./Rotate.es6');

var _RotateEs62 = _interopRequireDefault(_RotateEs6);

var Block = (function () {
    function Block(phaserGame, table, patterns, x, y, pivot, childsAnchor) {
        _classCallCheck(this, Block);

        this.phaserGame = phaserGame;
        this.phaserGroup = this.phaserGame.add.group();

        this.position = new _PositionBlockPositionEs62['default'](x, y, pivot, childsAnchor);
        this.bricks = new _ArrayMainEs62['default']();

        this.patterns = patterns;
        this.table = table;
        this.nBlock = table.incrementNBlocks();

        this.loadPhaserGroupPosition();
        this.loadPhaserGroupPivot();
    }

    _createClass(Block, [{
        key: 'loadPhaserGroupPosition',
        value: function loadPhaserGroupPosition() {
            var position = this.position.phaserGroupPosition();

            this.phaserGroup.x = position.x;
            this.phaserGroup.y = position.y;
        }
    }, {
        key: 'loadPhaserGroupPivot',
        value: function loadPhaserGroupPivot() {
            var pivot = this.position.phaserGroupPivot();

            this.phaserGroup.pivot.x = pivot.x;
            this.phaserGroup.pivot.y = pivot.y;
        }
    }, {
        key: 'addBrick',
        value: function addBrick(brick) {
            brick.putCell(brick.position, this.table);

            return this.bricks.add(brick);
        }
    }, {
        key: 'newBrick',
        value: function newBrick(position) {
            var spritePosition = position.phaserSpritePosition();

            var sprite = this.phaserGroup.create(spritePosition.x, spritePosition.y, 'green');

            return this.addBrick(new _BrickEs62['default'](position, this, sprite));
        }
    }, {
        key: 'build',
        value: function build() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                var pattern = _this.rotate.findPatternByAngle(0);

                for (var i = 0; i < pattern.positions.length; ++i) {
                    _this.newBrick(new _PositionBrickPositionEs62['default'](_this.position, pattern.positions[i][0], pattern.positions[i][1], _this.position.childsAnchor));
                }

                resolve(_this);
            });
        }
    }, {
        key: 'buildAny',
        value: function buildAny(shapes) {
            this.build(shapes.randomPick());
        }
    }, {
        key: 'clearCells',
        value: function clearCells() {
            this.bricks.forEach(function (brick) {
                return brick.clearCell();
            });
        }
    }, {
        key: 'removeBricks',
        value: function removeBricks() {
            var destroy = arguments[0] === undefined ? false : arguments[0];

            this.phaserGroup.removeAll(destroy);
            this.clearCells();
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.phaserGroup.removeAll(true);
        }
    }, {
        key: 'down',
        value: function down() {
            return this.moveBlock.down();
        }
    }, {
        key: 'up',
        value: function up() {
            return this.moveBlock.up();
        }
    }, {
        key: 'right',
        value: function right() {
            return this.moveBlock.right();
        }
    }, {
        key: 'left',
        value: function left() {
            return this.moveBlock.left();
        }
    }, {
        key: 'to',
        value: function to(position) {
            return this.moveBlock.to(position);
        }
    }, {
        key: 'rotateRight',
        value: function rotateRight() {
            return new _RotateEs62['default'](this).right();
        }
    }, {
        key: 'rotateLeft',
        value: function rotateLeft() {
            return new _RotateEs62['default'](this).left();
        }
    }, {
        key: 'moveBlock',
        get: function get() {
            return new _MoveMoveBlockEs62['default'](this.position, this);
        }
    }, {
        key: 'rotate',
        get: function get() {
            return new _RotateEs62['default'](this);
        }
    }]);

    return Block;
})();

exports['default'] = Block;
module.exports = exports['default'];

},{"./ArrayMain.es6":4,"./Brick.es6":6,"./Move/MoveBlock.es6":11,"./Position/BlockPosition.es6":12,"./Position/BrickPosition.es6":13,"./Rotate.es6":15}],6:[function(require,module,exports){
// import MoveBrick             from './Move/MoveBrick.es6';

/**
 * @internal Brick is always be attached to a Block
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Brick = (function () {
    function Brick(position, block, phaserSprite) {
        _classCallCheck(this, Brick);

        this.position = position;
        this.block = block;
        this.phaserSprite = phaserSprite;

        this.loadPhaserSpriteAnchor();
    }

    _createClass(Brick, [{
        key: "loadPhaserSpriteAnchor",

        // Deprecated
        // get moveBrick()         { return new MoveBrick(this.position, this); }

        value: function loadPhaserSpriteAnchor() {
            this.phaserSprite.anchor.setTo(this.position.anchor.x, this.position.anchor.y);
        }
    }, {
        key: "remove",

        /**
         * @param  {Boolean}
         * @return {[type]}
         * @todo Apply changes in Table
         */
        value: function remove() {
            var destroy = arguments[0] === undefined ? false : arguments[0];

            var index = this.block.bricks.find(this);

            this.block.bricks.splice(index, 1);
            this.block.phaserGroup.remove(this.phaserSprite, destroy);

            return this.clearCell();
        }
    }, {
        key: "destroy",

        /**
         * @return {[type]}
         */
        value: function destroy() {
            return this.remove(true);
        }
    }, {
        key: "clearCell",
        value: function clearCell() {
            return this.block.table.cell(this.position).clear();
        }
    }, {
        key: "putCell",
        value: function putCell(position) {
            // Allow to pass no position arg (Block.addBrick)
            this.position = position;

            return this.block.table.cellsArray.cell(this.position).setTo(this);
        }
    }]);

    return Brick;
})();

exports["default"] = Brick;
module.exports = exports["default"];

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = (function () {
    function Cell(x, y) {
        _classCallCheck(this, Cell);

        this.x = x;
        this.y = y;
        this.brick = null;
    }

    _createClass(Cell, [{
        key: "clear",
        value: function clear() {
            this.brick = null;
        }
    }, {
        key: "setTo",
        value: function setTo(brick) {
            this.brick = brick;

            return this;
        }
    }, {
        key: "isEmpty",
        value: function isEmpty() {
            return this.brick === null;
        }
    }]);

    return Cell;
})();

exports["default"] = Cell;
module.exports = exports["default"];

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Array2DEs6 = require('./Array2D.es6');

var _Array2DEs62 = _interopRequireDefault(_Array2DEs6);

var _CellEs6 = require('./Cell.es6');

var _CellEs62 = _interopRequireDefault(_CellEs6);

var CellsArray = (function (_Array2D) {
    function CellsArray(xSize, ySize) {
        _classCallCheck(this, CellsArray);

        _get(Object.getPrototypeOf(CellsArray.prototype), 'constructor', this).call(this, xSize, ySize);

        this.createCells();
    }

    _inherits(CellsArray, _Array2D);

    _createClass(CellsArray, [{
        key: 'cell',

        /* Notice that x and y are switched */
        value: function cell(position) {
            return this.array[position.y][position.x];
        }
    }, {
        key: 'createCells',
        value: function createCells() {
            for (var x = 0; x < this.ySize; ++x) {
                for (var y = 0; y < this.xSize; ++y) {
                    this.setAt(x, y, new _CellEs62['default'](x, y));
                }
            }

            return this.array;
        }
    }]);

    return CellsArray;
})(_Array2DEs62['default']);

exports['default'] = CellsArray;
module.exports = exports['default'];

},{"./Array2D.es6":2,"./Cell.es6":7}],9:[function(require,module,exports){
/*global Phaser*/

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _TableEs6 = require('./Table.es6');

var _TableEs62 = _interopRequireDefault(_TableEs6);

var _PositionPositionEs6 = require('./Position/Position.es6');

var _PositionPositionEs62 = _interopRequireDefault(_PositionPositionEs6);

var Game = (function () {
    function Game(xSize, ySize, cellSize, dataPath, startCallback, updateCallback) {
        _classCallCheck(this, Game);

        this.xSize = xSize;
        this.ySize = ySize;
        this.cellSize = cellSize;
        this.phaser = this.phaserGame(startCallback, updateCallback);
        this.table = new _TableEs62['default'](xSize, ySize);
        this.cursos = null;
        // this.data = this.parseJSONFile(dataPath);
        this.data = dataPath;
    }

    _createClass(Game, [{
        key: 'phaserGame',
        value: function phaserGame(startCallback, updateCallback) {
            var position = new _PositionPositionEs62['default'](),
                width = position.toPixels(this.xSize, this.cellSize),
                height = position.toPixels(this.ySize, this.cellSize);

            return new Phaser.Game(width, height, Phaser.AUTO, 'tetris', {
                preload: this.phaserPreload,
                create: this.phaserCreate.bind(this, startCallback),
                update: this.phaserUpdate.bind(this, updateCallback),
                render: this.phaserRender
            });
        }
    }, {
        key: 'phaserPreload',
        value: function phaserPreload() {
            this.load.image('orange', '../images/block_orange.png');
            this.load.image('green', './images/block_green.png');
            this.load.image('yellow', '../../images/block_yellow.png');
            this.load.image('pink', '../../images/block_pink.png');
        }
    }, {
        key: 'phaserCreate',
        value: function phaserCreate(startCallback) {
            this.phaser.add.graphics(0, 0);
            this.cursors = this.phaser.input.keyboard.createCursorKeys();

            startCallback();
        }
    }, {
        key: 'phaserUpdate',
        value: function phaserUpdate(updateCallback) {}
    }, {
        key: 'phaserRender',
        value: function phaserRender() {}

        // parseJSONFile(json) {
        // }

    }, {
        key: 'cellsArray',
        get: function get() {
            return this._cellsArray;
        }
    }]);

    return Game;
})();

exports['default'] = Game;
module.exports = exports['default'];

// updateCallback();

},{"./Position/Position.es6":14,"./Table.es6":17}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Move = (function () {
  function Move() {
    _classCallCheck(this, Move);
  }

  _createClass(Move, [{
    key: "up",
    value: function up() {
      return {
        x: this.position.x,
        y: this.position.y - 1
      };
    }
  }, {
    key: "down",
    value: function down() {
      return {
        x: this.position.x,
        y: this.position.y + 1
      };
    }
  }, {
    key: "right",
    value: function right() {
      return {
        x: this.position.x + 1,
        y: this.position.y
      };
    }
  }, {
    key: "left",
    value: function left() {
      return {
        x: this.position.x - 1,
        y: this.position.y
      };
    }
  }]);

  return Move;
})();

exports["default"] = Move;
module.exports = exports["default"];

},{}],11:[function(require,module,exports){
/*global Phaser*/

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _MoveEs6 = require('./Move.es6');

var _MoveEs62 = _interopRequireDefault(_MoveEs6);

var MoveBlock = (function (_Move) {
    function MoveBlock(position, block) {
        _classCallCheck(this, MoveBlock);

        _get(Object.getPrototypeOf(MoveBlock.prototype), 'constructor', this).call(this);

        this.position = position;
        this.block = block;
    }

    _inherits(MoveBlock, _Move);

    _createClass(MoveBlock, [{
        key: 'phaserTranslate',
        value: function phaserTranslate() {
            var tween = this.block.phaserGame.add.tween(this.block.phaserGroup);

            tween.to(this.block.position.phaserGroupPosition(), 1, Phaser.Easing.Linear.None, true);

            return tween;
        }
    }, {
        key: 'tableTranslate',
        value: function tableTranslate() {
            this.block.bricks.forEach(function (brick) {
                return brick.putCell(brick.position);
            });
        }
    }, {
        key: 'execute',
        value: function execute(position) {
            var _this = this;

            return new Promise(function (resolve) {
                _this.block.clearCells();

                _this.block.position.x = position.x;
                _this.block.position.y = position.y;

                _this.tableTranslate();
                _this.phaserTranslate();

                resolve(_this.position);
            });
        }
    }, {
        key: 'down',
        value: function down() {
            var position = _get(Object.getPrototypeOf(MoveBlock.prototype), 'down', this).call(this);

            return this.execute(position);
        }
    }, {
        key: 'up',
        value: function up() {
            var position = _get(Object.getPrototypeOf(MoveBlock.prototype), 'up', this).call(this);

            return this.execute(position);
        }
    }, {
        key: 'right',
        value: function right() {
            var position = _get(Object.getPrototypeOf(MoveBlock.prototype), 'right', this).call(this);

            return this.execute(position);
        }
    }, {
        key: 'left',
        value: function left() {
            var position = _get(Object.getPrototypeOf(MoveBlock.prototype), 'left', this).call(this);

            return this.execute(position);
        }
    }, {
        key: 'to',
        value: function to(position) {
            return this.execute(position);
        }
    }]);

    return MoveBlock;
})(_MoveEs62['default']);

exports['default'] = MoveBlock;
module.exports = exports['default'];

},{"./Move.es6":10}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _PositionEs6 = require('./Position.es6');

var _PositionEs62 = _interopRequireDefault(_PositionEs6);

var BlockPosition = (function (_Position) {
    function BlockPosition(x, y, pivot, childsAnchor) {
        _classCallCheck(this, BlockPosition);

        _get(Object.getPrototypeOf(BlockPosition.prototype), 'constructor', this).call(this);

        this.x = x;
        this.y = y;

        this.pivot = pivot;
        this.childsAnchor = childsAnchor;
    }

    _inherits(BlockPosition, _Position);

    _createClass(BlockPosition, [{
        key: 'phaserGroupPosition',
        value: function phaserGroupPosition() {
            return {
                x: this.toPixels(this.x + this.childsAnchor.x),
                y: this.toPixels(this.y + this.childsAnchor.y)
            };
        }
    }, {
        key: 'phaserGroupPivot',
        value: function phaserGroupPivot() {
            return {
                x: this.toPixels(this.pivot.x + this.childsAnchor.x),
                y: this.toPixels(this.pivot.y + this.childsAnchor.y)
            };
        }
    }]);

    return BlockPosition;
})(_PositionEs62['default']);

exports['default'] = BlockPosition;
module.exports = exports['default'];

},{"./Position.es6":14}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _PositionEs6 = require('./Position.es6');

var _PositionEs62 = _interopRequireDefault(_PositionEs6);

var BrickPosition = (function (_Position) {
    function BrickPosition(blockPosition, relativeX, relativeY, anchor) {
        _classCallCheck(this, BrickPosition);

        _get(Object.getPrototypeOf(BrickPosition.prototype), 'constructor', this).call(this);

        this.blockPosition = blockPosition;

        this.relativeX = relativeX;
        this.relativeY = relativeY;

        this.anchor = anchor;
    }

    _inherits(BrickPosition, _Position);

    _createClass(BrickPosition, [{
        key: 'phaserSpritePosition',
        value: function phaserSpritePosition() {
            var pivot = this.blockPosition.pivot;

            return {
                x: this.toPixels(pivot.x + this.relativeX + this.anchor.x),
                y: this.toPixels(pivot.y + this.relativeY + this.anchor.y)
            };
        }
    }, {
        key: 'x',
        get: function get() {
            return this.blockPosition.x + this.relativeX;
        }
    }, {
        key: 'y',
        get: function get() {
            return this.blockPosition.y + this.relativeY;
        }
    }]);

    return BrickPosition;
})(_PositionEs62['default']);

exports['default'] = BrickPosition;
module.exports = exports['default'];

},{"./Position.es6":14}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Position = (function () {
    function Position() {
        var cellSize = arguments[0] === undefined ? 35 : arguments[0];

        _classCallCheck(this, Position);

        // this.x              = x;
        // this.y              = y;

        this.cellSize = cellSize;

        // this.pivot          = pivot;
        // this.anchor         = anchor;
    }

    _createClass(Position, [{
        key: "toPixels",
        value: function toPixels(val) {
            return val * this.cellSize;
        }

        // phaserGroupPosition() {
        //     return {
        //         x: Position.toPixels(this.x + this.anchor.x, this.cellSize),
        //         y: Position.toPixels(this.y + this.anchor.y, this.cellSize)
        //     };
        // }

        // get phaserPivot() {
        //     return {
        //         x: Position.toPixels(this.pivot.x + this.anchor.x, this.cellSize),
        //         y: Position.toPixels(this.pivot.y + this.anchor.y, this.cellSize)
        //     };
        // }

        // relativeTo(position) {
        //     return {
        //         x: (position.x + this.x),
        //         y: (position.y + this.y)
        //     };
        // }

        // relativeToPivot(pivot) {
        //     return {
        //         x: (pivot.x + this.x + this.anchor.x) * this.cellSize,
        //         y: (pivot.y + this.y + this.anchor.y) * this.cellSize
        //     };
        // }

        // static toPixels(val, cellSize) {
        //     return val * cellSize;
        // }

    }]);

    return Position;
})();

exports["default"] = Position;
module.exports = exports["default"];

},{}],15:[function(require,module,exports){
/*global Phaser*/

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _PositionBrickPositionEs6 = require('./Position/BrickPosition.es6');

var _PositionBrickPositionEs62 = _interopRequireDefault(_PositionBrickPositionEs6);

var Rotate = (function () {
    function Rotate(block) {
        _classCallCheck(this, Rotate);

        this.block = block;

        this.phaserGame = block.phaserGame;
        this.phaserGroup = block.phaserGroup;
    }

    _createClass(Rotate, [{
        key: 'findPatternByAngle',
        value: function findPatternByAngle(angle) {
            var array = this.block.patterns.filter(function (i) {
                return i.angle === angle;
            });

            return array[0];
        }
    }, {
        key: 'phaserTranslate',
        value: function phaserTranslate(angle) {
            var _this = this;

            return new Promise(function (resolve) {
                _this.phaserGame.add.tween(_this.phaserGroup).to({ angle: angle }, 500, Phaser.Easing.Linear.None, true);

                resolve(_this.block);
            });
        }
    }, {
        key: 'tableTranslate',
        value: function tableTranslate(angle) {
            var pattern;

            if (angle === 360) {
                angle = 0;
            }

            pattern = this.findPatternByAngle(angle);

            this.block.clearCells();

            for (var i = 0; i < this.block.bricks.length; ++i) {
                var position = new _PositionBrickPositionEs62['default'](this.block.position, pattern.positions[i][0], pattern.positions[i][1], this.block.bricks[i].anchor);

                this.block.bricks[i].putCell(position);
            }
        }
    }, {
        key: 'execute',
        value: function execute(angle) {
            var _this2 = this;

            this.phaserTranslate(angle).then(function (block) {
                _this2.tableTranslate(angle, block);
            });
        }
    }, {
        key: 'left',
        value: function left() {
            var angle = this.phaserGroup.angle === 0 ? 270 : this.phaserGroup.angle - 90;

            this.execute(angle);
        }
    }, {
        key: 'right',
        value: function right() {
            var angle = this.phaserGroup.angle === 360 ? 90 : this.phaserGroup.angle + 90;

            console.log(angle);

            this.execute(angle);
        }
    }]);

    return Rotate;
})();

exports['default'] = Rotate;
module.exports = exports['default'];

},{"./Position/BrickPosition.es6":13}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Row = (function () {
    function Row(tableRow) {
        _classCallCheck(this, Row);

        this.cells = tableRow;
    }

    _createClass(Row, [{
        key: "clear",
        value: function clear() {
            for (var i = 0; i < this.cells.length; ++i) {
                this.cells[i].clear();
            }
        }
    }, {
        key: "destroy",

        /**
         * @todo  level Up if x rows deleted from las time
         * @return {[type]}
         */
        value: function destroy() {
            for (var i = 0; i < this.cells.length; ++i) {
                var cell = this.cells[i];

                if (!cell.isEmpty()) {
                    cell.brick.destroy();
                }
            }
        }
    }, {
        key: "down",
        value: function down() {
            for (var i = 0; i < this.cells.length; ++i) {
                var cell = this.cells[i];

                if (!cell.isEmpty()) {
                    cell.brick.block.down();
                }
            }
        }
    }, {
        key: "cells",
        get: function get() {
            return this._cells;
        },
        set: function set(cells) {
            this._cells = cells;
        }
    }]);

    return Row;
})();

exports["default"] = Row;
module.exports = exports["default"];

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ArrayBlocksEs6 = require('./ArrayBlocks.es6');

var _ArrayBlocksEs62 = _interopRequireDefault(_ArrayBlocksEs6);

var _CellsArrayEs6 = require('./CellsArray.es6');

var _CellsArrayEs62 = _interopRequireDefault(_CellsArrayEs6);

var _RowEs6 = require('./Row.es6');

var _RowEs62 = _interopRequireDefault(_RowEs6);

var Table = (function () {
    function Table(xSize, ySize) {
        _classCallCheck(this, Table);

        this.xSize = xSize;
        this.ySize = ySize;
        this._cellsArray = new _CellsArrayEs62['default'](xSize, ySize);
        this.blocks = new _ArrayBlocksEs62['default']();
    }

    _createClass(Table, [{
        key: 'row',
        value: function row(x) {
            return new _RowEs62['default'](this.cellsArray.array[x]);
        }
    }, {
        key: 'cell',
        value: function cell(position) {
            return this.cellsArray.cell(position);
        }
    }, {
        key: 'incrementNBlocks',
        value: function incrementNBlocks() {
            return ++this.blocks.length;
        }
    }, {
        key: 'cellsArray',
        get: function get() {
            return this._cellsArray;
        }
    }]);

    return Table;
})();

exports['default'] = Table;
module.exports = exports['default'];

},{"./ArrayBlocks.es6":3,"./CellsArray.es6":8,"./Row.es6":16}],18:[function(require,module,exports){
/*global Phaser*/

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libGameEs6 = require('./lib/Game.es6');

var _libGameEs62 = _interopRequireDefault(_libGameEs6);

var _libBlockEs6 = require('./lib/Block.es6');

var _libBlockEs62 = _interopRequireDefault(_libBlockEs6);

var _libArrayMainEs6 = require('./lib/ArrayMain.es6');

var _libArrayMainEs62 = _interopRequireDefault(_libArrayMainEs6);

var _dataDataJsonEs6 = require('./data/data.json.es6');

var _dataDataJsonEs62 = _interopRequireDefault(_dataDataJsonEs6);

var game;

/**
 * @todo This will be translate to parseJSONFile in Block
 */
var createBlocksArray = function createBlocksArray() {
    var array = new _libArrayMainEs62['default']();

    for (var i = 0; i < _dataDataJsonEs62['default'].blocks.length; ++i) {
        array.add(_dataDataJsonEs62['default'].blocks[i]);
    }

    return array;
};

var moveAround = function moveAround(block) {};

var start = function start() {
    var blocks = createBlocksArray(),
        column = blocks[1],
        pyramid = blocks[0];

    new _libBlockEs62['default'](game.phaser, game.table, column.patterns, 2, 19, column.pivot, column.anchor).build();

    new _libBlockEs62['default'](game.phaser, game.table, column.patterns, 6, 19, column.pivot, column.anchor).build();

    var pyramidBlock = new _libBlockEs62['default'](game.phaser, game.table, pyramid.patterns, 2, 2, pyramid.pivot, pyramid.anchor);

    pyramidBlock.build();

    setTimeout(pyramidBlock.rotateRight.bind(pyramidBlock), 1000);
    setTimeout(pyramidBlock.to.bind(pyramidBlock, { x: 8, y: 18 }), 2000);

    setTimeout(function () {
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

var update = function update() {};

game = new _libGameEs62['default'](10, 20, 35, 'path', start, update);
window.game = game;

// setTimeout(block.down.bind(block), 500);
// setTimeout(block.down.bind(block), 700);
// setTimeout(block.right.bind(block), 900);

// setTimeout(block.rotateRight.bind(block), 1000);
// setTimeout(block.rotateRight.bind(block), 2000);
// setTimeout(block.rotateRight.bind(block), 3000);
// setTimeout(block.rotateRight.bind(block), 4000);

},{"./data/data.json.es6":1,"./lib/ArrayMain.es6":4,"./lib/Block.es6":5,"./lib/Game.es6":9}]},{},[18])


//# sourceMappingURL=superblocks.js.map