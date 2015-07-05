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
            var array = new Array(this.xSize);

            for (var y = 0; y < this.xSize; y++) {
                array[y] = new Array(this.ySize);
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

},{}],2:[function(require,module,exports){
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

},{"./ArrayMain.es6":3}],3:[function(require,module,exports){
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
            this.push(block);

            return this.last();
        }
    }, {
        key: "last",
        value: function last() {
            return this.slice(-1)[0];
        }
    }]);

    return ArrayBlocks;
})(Array);

exports["default"] = ArrayBlocks;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
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

var Block = (function () {
    function Block(phaserGame, table) {
        _classCallCheck(this, Block);

        this.position = new _PositionEs62['default']();
        this.bricks = new _ArrayMainEs62['default']();
        this.table = table;
        this.nBlock = table.incrementNBlocks();
        this.phaserGroup = phaserGame.add.group();
    }

    _createClass(Block, [{
        key: 'addBrick',
        value: function addBrick(brick) {
            return this.bricks.add(brick);
        }
    }, {
        key: 'newBrick',
        value: function newBrick(position) {
            this.phaserGroup.create(position.xPixels, position.yPixels, 'green');

            return this.addBrick(new _BrickEs62['default'](position));
        }
    }]);

    return Block;
})();

exports['default'] = Block;
module.exports = exports['default'];

},{"./ArrayMain.es6":3,"./Brick.es6":5,"./Position.es6":9}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Brick = function Brick(position) {
    _classCallCheck(this, Brick);

    this.position = position;
};

exports["default"] = Brick;
module.exports = exports["default"];

},{}],6:[function(require,module,exports){
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
    key: "reset",
    value: function reset() {
      this.nBlock = null;
      this.nBrick = null;
    }
  }, {
    key: "setTo",
    value: function setTo(nBrick, nBlock) {
      this.nBlock = nBlock;
      this.nBrick = nBrick;
    }
  }]);

  return Cell;
})();

exports["default"] = Cell;
module.exports = exports["default"];

},{}],7:[function(require,module,exports){
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
        key: 'createCells',
        value: function createCells() {
            for (var x = 0; x < this.xSize; ++x) {
                for (var y = 0; y < this.ySize; ++y) {
                    this.setAt(x, y, new _CellEs62['default'](x, y));
                }
            }

            return this.array;
        }
    }, {
        key: 'cell',
        value: function cell(x, y) {
            return this[x][y];
        }
    }, {
        key: 'array',
        get: function get() {
            return this._array;
        }
    }]);

    return CellsArray;
})(_Array2DEs62['default']);

exports['default'] = CellsArray;
module.exports = exports['default'];

},{"./Array2D.es6":1,"./Cell.es6":6}],8:[function(require,module,exports){
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
    function Game(xSize, ySize, cellSize, startCallback) {
        _classCallCheck(this, Game);

        this.xSize = xSize;
        this.ySize = ySize;
        this.cellSize = cellSize;
        this.phaser = this.phaserGame(startCallback);
        this.table = new _TableEs62['default'](xSize, ySize);
        this.cursos = null;
    }

    _createClass(Game, [{
        key: 'phaserGame',
        value: function phaserGame(startCallback) {
            var width = _PositionEs62['default'].toPixels(this.xSize),
                height = _PositionEs62['default'].toPixels(this.ySize);

            return new Phaser.Game(width, height, Phaser.AUTO, 'tetris', { preload: this.phaserPreload,
                create: this.phaserCreate.bind(this, startCallback),
                update: this.phaserUpdate });
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
        key: 'cellsArray',
        get: function get() {
            return this._cellsArray;
        }
    }]);

    return Game;
})();

exports['default'] = Game;
module.exports = exports['default'];

},{"./Position.es6":9,"./Table.es6":10}],9:[function(require,module,exports){
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

        _classCallCheck(this, Position);

        this.x = x;
        this.y = y;

        this.xPixels = Position.toPixels(x);
        this.yPixels = Position.toPixels(y);
    }

    _createClass(Position, null, [{
        key: "toPixels",
        value: function toPixels(val) {
            var cellSize = arguments[1] === undefined ? 35 : arguments[1];

            return val * cellSize;
        }
    }]);

    return Position;
})();

exports["default"] = Position;
module.exports = exports["default"];

},{}],10:[function(require,module,exports){
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

var Table = (function () {
    function Table(xSize, ySize) {
        _classCallCheck(this, Table);

        this.xSize = xSize;
        this.ySize = ySize;
        this._cellsArray = new _CellsArrayEs62['default'](xSize, ySize);
        this.blocks = new _ArrayBlocksEs62['default']();
    }

    _createClass(Table, [{
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

},{"./ArrayBlocks.es6":2,"./CellsArray.es6":7}],11:[function(require,module,exports){
/*global Phaser*/

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libGameEs6 = require('./lib/Game.es6');

var _libGameEs62 = _interopRequireDefault(_libGameEs6);

var _libBlockEs6 = require('./lib/Block.es6');

var _libBlockEs62 = _interopRequireDefault(_libBlockEs6);

var _libPositionEs6 = require('./lib/Position.es6');

var _libPositionEs62 = _interopRequireDefault(_libPositionEs6);

var game;

var start = function start() {
    var block = new _libBlockEs62['default'](game.phaser, game.table);

    block.newBrick(new _libPositionEs62['default'](0, 0));
    block.newBrick(new _libPositionEs62['default'](0, 1));
    block.newBrick(new _libPositionEs62['default'](0, 2));
};

game = new _libGameEs62['default'](10, 20, 35, start);

},{"./lib/Block.es6":4,"./lib/Game.es6":8,"./lib/Position.es6":9}]},{},[11])


//# sourceMappingURL=superblocks.js.map