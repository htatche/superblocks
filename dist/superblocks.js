(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var data = {
    shapes: [{
        name: 'column',
        color: 'yellow',
        pivot: {
            x: 35,
            y: 35
        },
        angles: [{
            degrees: 0,
            blocks: [[0, 1], [1, 1], [2, 1], [1, 0]]
        }, {
            degrees: 90,
            blocks: [[1, 0], [1, 1], [2, 1], [1, 2]]
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
                    return cell.nBlock;
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

var _PositionEs6 = require('./Position.es6');

var _PositionEs62 = _interopRequireDefault(_PositionEs6);

var _MoveMoveBlockEs6 = require('./Move/MoveBlock.es6');

var _MoveMoveBlockEs62 = _interopRequireDefault(_MoveMoveBlockEs6);

var _RotateEs6 = require('./Rotate.es6');

var _RotateEs62 = _interopRequireDefault(_RotateEs6);

var Block = (function () {
    function Block(phaserGame, table) {
        _classCallCheck(this, Block);

        this.position = new _PositionEs62['default'](1, 1);
        this.angle = 0;
        this.bricks = new _ArrayMainEs62['default']();
        this.table = table;
        this.nBlock = table.incrementNBlocks();
        this.phaserGame = phaserGame;
        this.phaserGroup = phaserGame.add.group();

        this.put();
    }

    _createClass(Block, [{
        key: 'put',
        value: function put() {
            this.phaserGroup.x = this.position.xCenterPosition();
            this.phaserGroup.y = this.position.yCenterPosition();
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
            var sprite = this.phaserGroup.create(position.xPixels, position.yPixels, 'green');

            return this.addBrick(new _BrickEs62['default'](position, this, sprite));
        }
    }, {
        key: 'build',

        /**
         * @todo  Add possibility to choose angle
         * @param  {[type]}
         * @return {[type]}
         */
        value: function build(shape) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                if (!_this.bricks.isEmpty) {
                    return false;
                }

                var blocks = shape.angles[0].blocks;

                for (var i = 0; i < blocks.length; ++i) {
                    _this.newBrick(new _PositionEs62['default'](blocks[i][0], blocks[i][1]));
                }

                _this.phaserGroup.pivot.x = shape.pivot.x;
                _this.phaserGroup.pivot.y = shape.pivot.y;

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

        /**
         * @param  {Boolean}
         * @return {[type]}
         */
        value: function removeBricks() {
            var destroy = arguments[0] === undefined ? false : arguments[0];

            this.phaserGroup.removeAll(destroy);
            this.clearCells();
        }
    }, {
        key: 'destroy',

        /**
         * @return {[type]}
         */
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
        key: 'position',
        get: function get() {
            return this._position;
        },
        set: function set(position) {
            this._position = position;
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

},{"./ArrayMain.es6":4,"./Brick.es6":6,"./Move/MoveBlock.es6":11,"./Position.es6":13,"./Rotate.es6":14}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _MoveMoveBrickEs6 = require('./Move/MoveBrick.es6');

var _MoveMoveBrickEs62 = _interopRequireDefault(_MoveMoveBrickEs6);

/**
 * @internal Brick should always be attached to a Block
 */

var Brick = (function () {
    function Brick(position, block, phaserSprite) {
        _classCallCheck(this, Brick);

        this.position = position;
        this.block = block;
        this.phaserSprite = phaserSprite;

        this.setAnchor();
    }

    _createClass(Brick, [{
        key: 'setAnchor',
        value: function setAnchor() {
            this.phaserSprite.anchor.setTo(this.position.anchor, this.position.anchor);
        }
    }, {
        key: 'remove',

        /**
         * @param  {Boolean}
         * @return {[type]}
         * @todo Apply changes in Table
         */
        value: function remove() {
            var destroy = arguments[0] === undefined ? false : arguments[0];

            return this.block.remove(destroy);
        }
    }, {
        key: 'destroy',

        /**
         * @todo Apply changes in Table
         * @return {[type]}
         */
        value: function destroy() {
            return this.block.remove(true);
        }
    }, {
        key: 'clearCell',
        value: function clearCell() {
            return this.block.table.cell(this.position).clear();
        }
    }, {
        key: 'putCell',
        value: function putCell(position) {
            this.position = position;

            return this.block.table.cellsArray.cell(position).setTo(this.block.nBlock);
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
        key: 'position',
        get: function get() {
            return this._position;
        },
        set: function set(position) {
            this._position = position;
        }
    }, {
        key: 'moveBrick',
        get: function get() {
            return new _MoveMoveBrickEs62['default'](this.position, this);
        }
    }]);

    return Brick;
})();

exports['default'] = Brick;
module.exports = exports['default'];

},{"./Move/MoveBrick.es6":12}],7:[function(require,module,exports){
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
    this.nBrick = null;
    this.nBlock = null;
  }

  _createClass(Cell, [{
    key: "clear",
    value: function clear() {
      this.nBlock = null;
    }
  }, {
    key: "setTo",
    value: function setTo(nBlock) {
      this.nBlock = nBlock;

      return this;
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

var _PositionEs6 = require('./Position.es6');

var _PositionEs62 = _interopRequireDefault(_PositionEs6);

var Game = (function () {
    function Game(xSize, ySize, cellSize, dataPath, startCallback) {
        _classCallCheck(this, Game);

        this.xSize = xSize;
        this.ySize = ySize;
        this.cellSize = cellSize;
        this.phaser = this.phaserGame(startCallback);
        this.table = new _TableEs62['default'](xSize, ySize);
        this.cursos = null;
        // this.data = this.parseJSONFile(dataPath);
        this.data = dataPath;
    }

    _createClass(Game, [{
        key: 'phaserGame',
        value: function phaserGame(startCallback) {
            var width = _PositionEs62['default'].toPixels(this.xSize, this.cellSize),
                height = _PositionEs62['default'].toPixels(this.ySize, this.cellSize);

            return new Phaser.Game(width, height, Phaser.AUTO, 'tetris', {
                preload: this.phaserPreload,
                create: this.phaserCreate.bind(this, startCallback),
                update: this.phaserUpdate,
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
        value: function phaserUpdate() {}
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

},{"./Position.es6":13,"./Table.es6":16}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _PositionEs6 = require('../Position.es6');

var _PositionEs62 = _interopRequireDefault(_PositionEs6);

var Move = (function () {
  function Move(position) {
    _classCallCheck(this, Move);

    this.position = position;
    this.nextPosition = null;
  }

  _createClass(Move, [{
    key: 'up',
    value: function up() {
      this.nextPosition = new _PositionEs62['default'](this.position.x, this.position.y - 1);

      return this.nextPosition;
    }
  }, {
    key: 'down',
    value: function down() {
      this.nextPosition = new _PositionEs62['default'](this.position.x, this.position.y + 1);

      return this.nextPosition;
    }
  }]);

  return Move;
})();

exports['default'] = Move;
module.exports = exports['default'];

},{"../Position.es6":13}],11:[function(require,module,exports){
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

var _MoveBrickEs6 = require('./MoveBrick.es6');

var _MoveBrickEs62 = _interopRequireDefault(_MoveBrickEs6);

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
        value: function phaserTranslate(position) {
            var tween = this.block.phaserGame.add.tween(this.block.phaserGroup);

            tween.to(position.tweenPosition, 1, Phaser.Easing.Linear.None, true);

            return tween;
        }
    }, {
        key: 'tableTranslate',
        value: function tableTranslate(strDirection) {
            this.block.clearCells();

            this.block.bricks.forEach(function (brick) {
                var nextPosition = new _MoveEs62['default'](brick.position, brick)[strDirection]();

                return brick.putCell(nextPosition);
            });
        }
    }, {
        key: 'move',

        /**
         * @internal  strDirection is used to calculate position for each brick
         * @param  {strDirection}
         * @return {[type]}
         */
        value: function move(strDirection) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.block.position = _this.nextPosition;

                _this.phaserTranslate(_this.nextPosition);
                _this.tableTranslate(strDirection);

                resolve(_this.position);
            });
        }
    }, {
        key: 'down',
        value: function down() {
            _get(Object.getPrototypeOf(MoveBlock.prototype), 'down', this).call(this);

            return this.move('down');
        }
    }, {
        key: 'up',
        value: function up() {
            _get(Object.getPrototypeOf(MoveBlock.prototype), 'up', this).call(this);

            return this.move('up');
        }
    }]);

    return MoveBlock;
})(_MoveEs62['default']);

exports['default'] = MoveBlock;
module.exports = exports['default'];

},{"./Move.es6":10,"./MoveBrick.es6":12}],12:[function(require,module,exports){
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

var MoveBrick = (function (_Move) {
    function MoveBrick(position, brick) {
        _classCallCheck(this, MoveBrick);

        _get(Object.getPrototypeOf(MoveBrick.prototype), 'constructor', this).call(this);

        this.position = position;
        this.brick = brick;
    }

    _inherits(MoveBrick, _Move);

    _createClass(MoveBrick, [{
        key: 'phaserTranslate',
        value: function phaserTranslate() {}
    }, {
        key: 'tableTranslate',
        value: function tableTranslate() {}
    }, {
        key: 'move',
        value: function move() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.brick.clearCell();

                _this.brick.position = _this.nextPosition;

                _this.brick.putCell(_this.brick.position);

                resolve(_this.position);
            });
        }
    }, {
        key: 'down',
        value: function down() {
            _get(Object.getPrototypeOf(MoveBrick.prototype), 'down', this).call(this);

            return this.move();
        }
    }]);

    return MoveBrick;
})(_MoveEs62['default']);

exports['default'] = MoveBrick;
module.exports = exports['default'];

},{"./Move.es6":10}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Position = (function () {
    function Position() {
        var x = arguments[0] === undefined ? 0 : arguments[0];
        var y = arguments[1] === undefined ? 0 : arguments[1];
        var cellSize = arguments[2] === undefined ? 35 : arguments[2];
        var anchor = arguments[3] === undefined ? 0.5 : arguments[3];

        _classCallCheck(this, Position);

        this.x = x;
        this.y = y;
        this.cellSize = cellSize;
        this.anchor = anchor;
    }

    _createClass(Position, [{
        key: "xCenterPosition",

        /**
         * @internal
         *     0  1  2  3
         *   0  __________
         *   1 |  o
         *   2 |o x o
         *   3 |
         *
         * The center of the block
         * (x * cellSize) + (cellSize / 2)
         * (y * cellSize) + (cellSize / 2)
         *
         * @todo      Modify so last value represents pivot and not cellSi
         * @param  {Number}
         * @return {[type]}
         */
        value: function xCenterPosition() {
            return this.xPixels + this.cellSize * this.anchor;
        }
    }, {
        key: "yCenterPosition",
        value: function yCenterPosition() {
            return this.yPixels + this.cellSize * this.anchor;
        }
    }, {
        key: "xPixels",
        get: function get() {
            return Position.toPixels(this.x, this.cellSize);
        }
    }, {
        key: "yPixels",
        get: function get() {
            return Position.toPixels(this.y, this.cellSize);
        }
    }, {
        key: "tweenPosition",
        get: function get() {
            return {
                x: this.xCenterPosition(),
                y: this.yCenterPosition()
            };
        }
    }], [{
        key: "toPixels",
        value: function toPixels(val, cellSize) {
            return val * cellSize;
        }
    }]);

    return Position;
})();

exports["default"] = Position;
module.exports = exports["default"];

},{}],14:[function(require,module,exports){
/*global Phaser*/

// import Brick            from './Brick.es6';
// import ArrayMain        from './ArrayMain.es6';
// import Position         from './Position.es6';
// import MoveBlock        from './Move/MoveBlock.es6';
// import Promise          from '../../bower_components/when/es6-shim/Promise.browserify-es6.js';

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rotate = (function () {
    function Rotate(block) {
        _classCallCheck(this, Rotate);

        this.phaserGame = block.phaserGame;
        this.phaserGroup = block.phaserGroup;
    }

    _createClass(Rotate, [{
        key: "phaserTranslate",
        value: function phaserTranslate(angle) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.phaserGame.add.tween(_this.phaserGroup).to({ angle: _this.phaserGroup.angle += angle }, 1, Phaser.Easing.Linear.None, true);

                resolve(_this.phaserGroup);
            });
        }
    }, {
        key: "execute",

        // tableTranslate() {
        //     this.block.clearCells();

        //     this.block.bricks.forEach((brick) => {
        //         var nextPosition = new Move(brick.position, brick)[strDirection]();

        //         return brick.putCell(nextPosition);
        //     });
        // }

        value: function execute(angle) {
            this.phaserTranslate(angle).then(function (phaserGroup) {
                phaserGroup.children.forEach(function (i) {});
            });
            // this.tableTranslate(angle);
        }
    }, {
        key: "left",
        value: function left() {
            this.execute(-90);
        }
    }, {
        key: "right",
        value: function right() {
            this.execute(90);
        }
    }]);

    return Rotate;
})();

exports["default"] = Rotate;
module.exports = exports["default"];

// debugger;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ArrayMainEs6 = require('./ArrayMain.es6');

var _ArrayMainEs62 = _interopRequireDefault(_ArrayMainEs6);

var Row = (function () {
    function Row(tableRow) {
        _classCallCheck(this, Row);

        this.cells = tableRow;
    }

    _createClass(Row, [{
        key: 'clear',
        value: function clear() {
            for (var i = 0; i < this.cells.length; ++i) {
                this.cells[i].clear();
            }
        }
    }, {
        key: 'cells',
        get: function get() {
            return this._cells;
        },
        set: function set(cells) {
            this._cells = cells;
        }
    }]);

    return Row;
})();

exports['default'] = Row;
module.exports = exports['default'];

},{"./ArrayMain.es6":4}],16:[function(require,module,exports){
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

// import Move             from './Move.es6';

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

},{"./ArrayBlocks.es6":3,"./CellsArray.es6":8,"./Row.es6":15}],17:[function(require,module,exports){
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

var printMessage = function printMessage() {
    console.log('Done !');
};

/**
 * @todo This will be translate to parseJSONFile in Block
 */
var createShapesArray = function createShapesArray() {
    var array = new _libArrayMainEs62['default']();

    for (var i = 0; i < _dataDataJsonEs62['default'].shapes.length; ++i) {
        array.add(_dataDataJsonEs62['default'].shapes[i]);
    }

    return array;
};

var start = function start() {
    var shapes = createShapesArray();

    var block = new _libBlockEs62['default'](game.phaser, game.table);

    block.build(shapes.first)
    // .then(block.rotateRight.bind(block))
    .then(block.rotateRight.bind(block));
};

game = new _libGameEs62['default'](10, 20, 35, 'path', start);
window.game = game;

},{"./data/data.json.es6":1,"./lib/ArrayMain.es6":4,"./lib/Block.es6":5,"./lib/Game.es6":9}]},{},[17])


//# sourceMappingURL=superblocks.js.map