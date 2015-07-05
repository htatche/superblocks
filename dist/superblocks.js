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

},{"./Array2D.es6":1,"./Cell.es6":2}],4:[function(require,module,exports){
/*global document Phaser*/

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libCellsArrayEs6 = require('./lib/CellsArray.es6');

var _libCellsArrayEs62 = _interopRequireDefault(_libCellsArrayEs6);

var cellsArray = new _libCellsArrayEs62['default'](5, 5);

cellsArray.prettyPrint();

},{"./lib/CellsArray.es6":3}]},{},[4])


//# sourceMappingURL=superblocks.js.map