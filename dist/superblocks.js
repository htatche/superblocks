(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var data = {
    gameOptions: {
        speedOptions: {
            defaultSpeed: 220,
            speedFactor: 20
        },
        levels: {
            requiredRows: 5
        }
    },
    blocks: [{
        name: 'pyramid',
        colorName: 'green',
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
            positions: [[0, -1], [0, 0], [0, 1], [1, 0]]
        }, {
            angle: 180,
            positions: [[1, 0], [0, 0], [-1, 0], [0, 1]]
        }, {
            angle: 270,
            positions: [[0, 1], [0, 0], [0, -1], [-1, 0]]
        }]
    }, {
        name: 'column',
        colorName: 'yellow',
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
        }]
    }, {
        name: 'cube',
        colorName: 'orange',
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
    }, {
        name: 'stack_right',
        colorName: 'pink',
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
            positions: [[-1, 0], [0, 0], [0, -1], [1, -1]]
        }, {
            angle: 90,
            positions: [[0, -1], [0, 0], [1, 0], [1, 1]]
        }, {
            angle: 180,
            positions: [[1, 0], [0, 0], [0, 1], [-1, 1]]
        }, {
            angle: 270,
            positions: [[0, 1], [0, 0], [-1, 0], [-1, -1]]
        }]
    }, {
        name: 'stack_left',
        colorName: 'skyblue',
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
            positions: [[-1, -1], [0, -1], [0, 0], [1, 0]]
        }, {
            angle: 90,
            positions: [[1, -1], [1, 0], [0, 0], [0, 1]]
        }, {
            angle: 180,
            positions: [[1, 1], [0, 1], [0, 0], [-1, 0]]
        }, {
            angle: 270,
            positions: [[0, 1], [0, 0], [1, 0], [1, -1]]
        }]
    }, {
        name: 'square_left',
        colorName: 'red',
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
            positions: [[-1, 0], [0, 0], [1, 0], [1, -1]]
        }, {
            angle: 90,
            positions: [[0, -1], [0, 0], [0, 1], [1, 1]]
        }, {
            angle: 180,
            positions: [[1, 0], [0, 0], [-1, 0], [-1, 1]]
        }, {
            angle: 270,
            positions: [[0, 1], [0, 0], [0, -1], [-1, -1]]
        }]
    }, {
        name: 'square_right',
        colorName: 'blue',
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
            positions: [[-1, -1], [-1, 0], [0, 0], [1, 0]]
        }, {
            angle: 90,
            positions: [[1, -1], [0, -1], [0, 0], [0, 1]]
        }, {
            angle: 180,
            positions: [[1, 1], [1, 0], [0, 0], [-1, 0]]
        }, {
            angle: 270,
            positions: [[-1, 1], [0, 1], [0, 0], [0, -1]]
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
                        return cell.brick.nBrick;
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
    _inherits(ArrayBlocks, _ArrayMain);

    function ArrayBlocks() {
        _classCallCheck(this, ArrayBlocks);

        _get(Object.getPrototypeOf(ArrayBlocks.prototype), 'constructor', this).call(this);
    }

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
    _inherits(ArrayMain, _Array);

    function ArrayMain() {
        _classCallCheck(this, ArrayMain);

        _get(Object.getPrototypeOf(ArrayMain.prototype), "constructor", this).call(this);
    }

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
        key: "contains",
        value: function contains(elm) {
            return this.indexOf(elm) !== -1;
        }
    }, {
        key: "mapTo",
        value: function mapTo(x) {
            var array = new ArrayMain();

            this.forEach(function (elm) {
                array.add(elm[x]);
            });

            return array;
        }
    }, {
        key: "equals",

        /**
         * Array comparison (http://stackoverflow.com/a/14853974/2048774)
         * @param  {[type]} array [description]
         * @return {[type]}       [description]
         */
        value: function equals(array) {
            // if the other array is a falsy value, return
            if (!array) {
                return false;
            }

            // compare lengths - can save a lot of time
            if (this.length !== array.length) {
                return false;
            }

            for (var i = 0, l = this.length; i < l; i++) {
                // Check if we have nested arrays
                if (this[i] instanceof Array && array[i] instanceof Array) {
                    // recurse into the nested arrays
                    if (!this[i].equals(array[i])) {
                        return false;
                    }
                } else if (this[i] !== array[i]) {
                    // Warning - two different object instances
                    // will never be equal: {x:20} != {x:20}
                    return false;
                }
            }
            return true;
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

var _UtilEs6 = require('./Util.es6');

var _UtilEs62 = _interopRequireDefault(_UtilEs6);

var _BrickEs6 = require('./Brick.es6');

var _BrickEs62 = _interopRequireDefault(_BrickEs6);

var _ArrayArrayMainEs6 = require('./Array/ArrayMain.es6');

var _ArrayArrayMainEs62 = _interopRequireDefault(_ArrayArrayMainEs6);

var _PositionBlockPositionEs6 = require('./Position/BlockPosition.es6');

var _PositionBlockPositionEs62 = _interopRequireDefault(_PositionBlockPositionEs6);

var _MoveMoveBlockEs6 = require('./Move/MoveBlock.es6');

var _MoveMoveBlockEs62 = _interopRequireDefault(_MoveMoveBlockEs6);

var _RotateEs6 = require('./Rotate.es6');

var _RotateEs62 = _interopRequireDefault(_RotateEs6);

var _CollisionCollisionDetectionEs6 = require('./Collision/CollisionDetection.es6');

var _CollisionCollisionDetectionEs62 = _interopRequireDefault(_CollisionCollisionDetectionEs6);

var _ColorEs6 = require('./Color.es6');

var _ColorEs62 = _interopRequireDefault(_ColorEs6);

var Block = (function () {
    function Block(phaserGame, table, patterns, positionArgs, colorName) {
        _classCallCheck(this, Block);

        this.phaserGame = phaserGame;
        this.phaserGroup = this.phaserGame.add.group();

        this.table = table;
        this.position = this.createPosition(positionArgs);

        this.bricks = new _ArrayArrayMainEs62['default']();
        this.patterns = patterns;
        this.color = new _ColorEs62['default'](colorName);
        this.nBlock = table.incrementNBlocks();

        this.loadPhaserGroupPivot();
        this.loadPhaserGroupPosition();
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
        key: 'addOneBrick',
        value: function addOneBrick(brick) {
            brick.build(false);
            this.phaserGroup.add(brick.phaserSprite);

            return this.bricks.add(brick);
        }
    }, {
        key: 'addBricks',
        value: function addBricks(bricks) {
            var _this = this;

            bricks.forEach(function (brick) {
                _this.addOneBrick(brick);
            });
        }
    }, {
        key: 'build',
        value: function build() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {

                var pattern = _this2.rotate.findPatternByAngle(0);

                var bricks = pattern.positions.map(function (coord) {
                    return new _BrickEs62['default'](_this2.table, coord, _this2.color.name, _this2.phaserGame, _this2);
                });

                var collisions = new _CollisionCollisionDetectionEs62['default'](_this2.table).lookOut(bricks);

                if (collisions.length === 0) {
                    _this2.addBricks(bricks);

                    resolve(_this2);
                } else {
                    _this2.removeBricks(true);

                    reject(collisions);
                }
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
            return this.bricks.forEach(function (brick) {
                return brick.clearCell();
            });
        }
    }, {
        key: 'removeBrick',
        value: function removeBrick(brick) {
            var destroy = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

            var index = this.bricks.find(brick);

            this.bricks.splice(index, 1);

            /* Remove parentBlock from table.blocks is last brick was removed.
             */
            if (this.bricks.isEmpty) {
                var tableBlocks = this.table.blocks,
                    idx = tableBlocks.indexOf(this);

                tableBlocks.splice(idx, 1);
            }

            this.phaserGroup.remove(this.phaserSprite, destroy);
        }
    }, {
        key: 'removeAllBricks',
        value: function removeAllBricks() {
            var destroy = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

            this.bricks = new _ArrayArrayMainEs62['default']();

            this.phaserGroup.removeAll(destroy);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.removeAllBricks(true);
            this.clearCells();
        }
    }, {
        key: 'unbound',
        value: function unbound() {
            this.bricks.forEach(function (brick) {
                var _brick = new _BrickEs62['default'](brick.table, brick.position.coordinates, brick.color, brick.phaserGame, null, brick.nBrick);

                _brick.build(false);
            });

            return this.destroy();
        }
    }, {
        key: 'land',
        value: function land(speed, didLand) {
            var _this3 = this;

            var resolved = function resolved() {
                _this3.land(speed, didLand);
            },
                rejected = function rejected(collisions) {
                _this3.unbound();
                didLand(collisions);
            };

            setTimeout(function () {
                _this3.down(true).then(resolved, rejected);
            }, speed);
        }
    }, {
        key: 'collapse',
        value: function collapse(doneCallback) {
            return this.down(true).then(this.collapse.bind(this, doneCallback), doneCallback);
        }
    }, {
        key: 'randomLandingPosition',
        value: function randomLandingPosition(args) {
            var min = args.pivot.x,
                max = this.table.xSize - args.pivot.x,
                x = _UtilEs62['default'].getRandomInt(min, max - 1),
                y = args.pivot.y;

            args.x = x;
            args.y = y;

            return args;
        }
    }, {
        key: 'createPosition',
        value: function createPosition(args) {
            if (args.randomLanding) {
                args = this.randomLandingPosition(args);
            }

            var pos = new _PositionBlockPositionEs62['default'](args.x, args.y, args.pivot, args.childsAnchor);

            return pos;
        }
    }, {
        key: 'down',
        value: function down(detectCollision) {
            return this.moveBlock.down(detectCollision);
        }
    }, {
        key: 'up',
        value: function up(detectCollision) {
            return this.moveBlock.up(detectCollision);
        }
    }, {
        key: 'right',
        value: function right(detectCollision) {
            return this.moveBlock.right(detectCollision);
        }
    }, {
        key: 'left',
        value: function left(detectCollision) {
            return this.moveBlock.left(detectCollision);
        }
    }, {
        key: 'to',
        value: function to(position, detectCollision) {
            return this.moveBlock.to(position, detectCollision);
        }
    }, {
        key: 'rotateRight',
        value: function rotateRight(detectCollision) {
            return new _RotateEs62['default'](this, detectCollision).right();
        }
    }, {
        key: 'rotateLeft',
        value: function rotateLeft(detectCollision) {
            return new _RotateEs62['default'](this, detectCollision).left();
        }
    }, {
        key: 'moveBlock',
        get: function get() {
            return new _MoveMoveBlockEs62['default'](this.position, this);
        }
    }, {
        key: 'rotate',
        get: function get() {
            return new _RotateEs62['default'](this, true);
        }
    }]);

    return Block;
})();

exports['default'] = Block;
module.exports = exports['default'];

},{"./Array/ArrayMain.es6":4,"./Brick.es6":6,"./Collision/CollisionDetection.es6":10,"./Color.es6":11,"./Move/MoveBlock.es6":16,"./Position/BlockPosition.es6":18,"./Rotate.es6":21,"./Util.es6":24}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _PositionBrickPositionEs6 = require('./Position/BrickPosition.es6');

var _PositionBrickPositionEs62 = _interopRequireDefault(_PositionBrickPositionEs6);

var _MoveMoveBrickEs6 = require('./Move/MoveBrick.es6');

var _MoveMoveBrickEs62 = _interopRequireDefault(_MoveMoveBrickEs6);

var _CollisionCollisionDetectionEs6 = require('./Collision/CollisionDetection.es6');

var _CollisionCollisionDetectionEs62 = _interopRequireDefault(_CollisionCollisionDetectionEs6);

/**
 * @internal Brick can exist on its own or in a Block
 */

var Brick = (function () {
    function Brick(table, coord, color, phaserGame, parentBlock, n) {
        _classCallCheck(this, Brick);

        this.table = table;
        this.color = color;
        this.phaserGame = phaserGame;

        if (parentBlock) {
            this.parentBlock = parentBlock;
        }

        this.nBrick = n ? n : this.table.incrementNBricks();
        this.position = this.createPosition(coord);
    }

    _createClass(Brick, [{
        key: 'detectCollisions',

        // get / set cell

        value: function detectCollisions() {
            var collisions = new _CollisionCollisionDetectionEs62['default'](this.table).lookOut(this);

            return collisions.length === 0;
        }
    }, {
        key: 'build',
        value: function build() {
            var _this = this;

            var checkCollision = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

            return new Promise(function (resolve, reject) {

                var buildSuccess = function buildSuccess() {
                    _this.phaserSprite = _this.createPhaserSprite();

                    _this.loadPhaserSpriteAnchor();
                    _this.putCell(_this.position);

                    resolve(_this);
                };

                if (!checkCollision) {
                    buildSuccess.call(_this);
                } else {
                    if (_this.detectCollisions()) {
                        reject(collisions);
                    } else {
                        buildSuccess.call(_this);
                    }
                }
            });
        }
    }, {
        key: 'createPosition',
        value: function createPosition(coord) {
            if (this.parentBlock) {
                return new _PositionBrickPositionEs62['default'](coord[0], coord[1], this.parentBlock.position);
            } else {
                return new _PositionBrickPositionEs62['default'](coord.x, coord.y);
            }
        }
    }, {
        key: 'loadPhaserSpriteAnchor',
        value: function loadPhaserSpriteAnchor() {
            this.phaserSprite.anchor.setTo(this.position.anchor.x, this.position.anchor.y);
        }
    }, {
        key: 'createPhaserSprite',
        value: function createPhaserSprite() {
            var spritePosition = this.position.phaserSpritePosition();

            return this.phaserGame.add.sprite(spritePosition.x, spritePosition.y, this.color);
        }
    }, {
        key: 'remove',
        value: function remove() {
            var destroy = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

            if (this.parentBlock) {
                this.parentBlock.removeBrick(this, destroy);
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.remove(true);

            this.phaserSprite.destroy();

            return this.clearCell();
        }
    }, {
        key: 'clearCell',
        value: function clearCell() {
            return this.table.cell(this.position).clear();
        }
    }, {
        key: 'putCell',
        value: function putCell(position) {
            // Allow to pass no position arg (Block.addBrick)
            this.position = position;

            return this.table.cellsArray.cell(this.position).setTo(this);
        }
    }, {
        key: 'collapse',
        value: function collapse(doneCallback) {
            return this.down(true).then(this.collapse.bind(this, doneCallback), doneCallback);
        }
    }, {
        key: 'down',
        value: function down(detectCollision) {
            return this.moveBrick.down(detectCollision);
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

},{"./Collision/CollisionDetection.es6":10,"./Move/MoveBrick.es6":17,"./Position/BrickPosition.es6":19}],7:[function(require,module,exports){
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

var _ArrayArray2DEs6 = require('./Array/Array2D.es6');

var _ArrayArray2DEs62 = _interopRequireDefault(_ArrayArray2DEs6);

var _CellEs6 = require('./Cell.es6');

var _CellEs62 = _interopRequireDefault(_CellEs6);

var CellsArray = (function (_Array2D) {
    _inherits(CellsArray, _Array2D);

    function CellsArray(xSize, ySize) {
        _classCallCheck(this, CellsArray);

        _get(Object.getPrototypeOf(CellsArray.prototype), 'constructor', this).call(this, xSize, ySize);

        this.createCells();
    }

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
})(_ArrayArray2DEs62['default']);

exports['default'] = CellsArray;
module.exports = exports['default'];

},{"./Array/Array2D.es6":2,"./Cell.es6":7}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collision = function Collision(position, type) {
    _classCallCheck(this, Collision);

    this.position = position;
    this.type = type;
};

exports["default"] = Collision;
module.exports = exports["default"];

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ArrayArrayMainEs6 = require('../Array/ArrayMain.es6');

var _ArrayArrayMainEs62 = _interopRequireDefault(_ArrayArrayMainEs6);

var _CollisionEs6 = require('./Collision.es6');

var _CollisionEs62 = _interopRequireDefault(_CollisionEs6);

var CollisionDetection = (function () {
    function CollisionDetection(table) {
        _classCallCheck(this, CollisionDetection);

        this.table = table;
    }

    _createClass(CollisionDetection, [{
        key: 'againstWall',
        value: function againstWall(brick) {
            return this.table.offLimits(brick.position);
        }
    }, {
        key: 'againstBrick',
        value: function againstBrick(brick) {
            var cell = this.table.cell(brick.position);

            if (cell.isEmpty()) {
                return false;
            } else {
                if (cell.brick.parentBlock) {
                    return cell.brick.parentBlock.nBlock !== brick.parentBlock.nBlock;
                } else {
                    return true;
                }
            }
        }
    }, {
        key: 'againstAll',
        value: function againstAll(brick) {
            if (this.againstWall(brick)) {
                return new _CollisionEs62['default'](brick.position, 'WALL_COLLISION');
            }

            if (this.againstBrick(brick)) {
                return new _CollisionEs62['default'](brick.position, 'BLOCK_COLLISION');
            }

            return false;
        }
    }, {
        key: 'lookOut',
        value: function lookOut(bricks) {
            var _this = this;

            var collisions = new _ArrayArrayMainEs62['default']();

            if (!(bricks instanceof Array)) {
                bricks = [bricks];
            }

            bricks.forEach(function (brick) {
                var collision = _this.againstAll(brick);

                if (collision) {
                    collisions.add(collision);
                }

                return;
            }, this);

            return collisions;
        }
    }]);

    return CollisionDetection;
})();

exports['default'] = CollisionDetection;
module.exports = exports['default'];

},{"../Array/ArrayMain.es6":4,"./Collision.es6":9}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Color = (function () {
    function Color(name) {
        _classCallCheck(this, Color);

        this.name = name;
    }

    _createClass(Color, null, [{
        key: 'loadTextures',
        value: function loadTextures(game) {
            game.load.image('orange', 'images/block_orange.png');
            game.load.image('green', 'images/block_green.png');
            game.load.image('yellow', 'images/block_yellow.png');
            game.load.image('pink', 'images/block_pink.png');
            game.load.image('blue', 'images/block_blue.png');
            game.load.image('skyblue', 'images/block_skyblue.png');
            game.load.image('red', 'images/block_red.png');
        }
    }]);

    return Color;
})();

exports['default'] = Color;
module.exports = exports['default'];

},{}],12:[function(require,module,exports){
/*global Phaser*/

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _TableEs6 = require('../Table.es6');

var _TableEs62 = _interopRequireDefault(_TableEs6);

var _PositionPositionEs6 = require('../Position/Position.es6');

var _PositionPositionEs62 = _interopRequireDefault(_PositionPositionEs6);

var _BrickEs6 = require('../Brick.es6');

var _BrickEs62 = _interopRequireDefault(_BrickEs6);

var _BlockEs6 = require('../Block.es6');

var _BlockEs62 = _interopRequireDefault(_BlockEs6);

var _GameLoopEs6 = require('./GameLoop.es6');

var _GameLoopEs62 = _interopRequireDefault(_GameLoopEs6);

var _ColorEs6 = require('../Color.es6');

var _ColorEs62 = _interopRequireDefault(_ColorEs6);

var _LevelEs6 = require('../Level.es6');

var _LevelEs62 = _interopRequireDefault(_LevelEs6);

var Game = (function () {
    function Game(tableOptions, gameOptions, dataBlocks, startCallback, updateCallback, debugMode) {
        _classCallCheck(this, Game);

        this.cellSize = tableOptions.cellSize;
        this.options = gameOptions;

        this.level = new _LevelEs62['default'](1, gameOptions.speedOptions);
        this.score = 0;

        this.blocks = dataBlocks;

        this.table = new _TableEs62['default'](tableOptions.xSize, tableOptions.ySize);

        this.phaserGame = this.createPhaserGame(startCallback, updateCallback);

        this.cursors = null;
        this.keyboard = {};

        // this.data = this.parseJSONFile(dataPath);
        this.debugMode = debugMode;
    }

    _createClass(Game, [{
        key: 'createPhaserGame',
        value: function createPhaserGame(startCallback, updateCallback) {
            var position = new _PositionPositionEs62['default'](),
                width = position.toPixels(this.table.xSize, this.cellSize),
                height = position.toPixels(this.table.ySize, this.cellSize);

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
            _ColorEs62['default'].loadTextures(this);
        }
    }, {
        key: 'phaserCreate',
        value: function phaserCreate(startCallback) {
            this.phaserGame.add.graphics(0, 0);

            this.addKeyboardKeys();

            startCallback();

            this.start();
        }
    }, {
        key: 'phaserUpdate',
        value: function phaserUpdate(updateCallback) {
            this.listenKeyboardInput();

            // updateCallback();
        }
    }, {
        key: 'phaserRender',
        value: function phaserRender() {}
    }, {
        key: 'addKeyboardKeys',

        // parseJSONFile(json) {
        // }

        value: function addKeyboardKeys() {
            var phaserKeyboard = this.phaserGame.input.keyboard;

            this.cursors = phaserKeyboard.createCursorKeys();
            this.keyboard.A = phaserKeyboard.addKey(Phaser.Keyboard.A);
            this.keyboard.S = phaserKeyboard.addKey(Phaser.Keyboard.S);
            this.keyboard.SPACE = phaserKeyboard.addKey(Phaser.Keyboard.SPACEBAR);
        }
    }, {
        key: 'listenKeyboardInput',
        value: function listenKeyboardInput() {
            var keyArrow;

            if (this.cursors.up.justDown) {
                keyArrow = 'up';
            } else if (this.cursors.down.justDown) {
                keyArrow = 'down';
            } else if (this.cursors.left.justDown) {
                keyArrow = 'left';
            } else if (this.cursors.right.justDown) {
                keyArrow = 'right';
            } else if (this.keyboard.A.justDown) {
                keyArrow = 'A';
            } else if (this.keyboard.S.justDown) {
                keyArrow = 'S';
            } else if (this.keyboard.SPACE.justDown) {
                keyArrow = 'SPACE';
            }

            switch (keyArrow) {
                // case 'up':
                //     this.landingBlock.up(true);
                //     break;
                case 'down':
                    this.landingBlock.down(true);
                    break;
                case 'left':
                    this.landingBlock.left(true);
                    break;
                case 'right':
                    this.landingBlock.right(true);
                    break;
                case 'A':
                    this.landingBlock.rotateLeft(true);
                    break;
                case 'S':
                    this.landingBlock.rotateRight(true);
                    break;
                case 'SPACE':
                    this.landingBlock.collapse(function () {});
                    break;
            }
        }
    }, {
        key: 'newBlock',
        value: function newBlock(blockData) {
            return new _BlockEs62['default'](this.phaserGame, this.table, blockData.patterns, { randomLanding: true, pivot: blockData.pivot, childsAnchor: blockData.anchor }, blockData.colorName);
        }
    }, {
        key: 'newRandomBlock',
        value: function newRandomBlock() {
            return this.newBlock(this.blocks.randomPick());
        }
    }, {
        key: 'gameOver',
        value: function gameOver() {}
    }, {
        key: 'start',
        value: function start() {
            if (this.debugMode) {}

            var self = this;

            var pyramid = self.blocks[0],
                column = self.blocks[1],
                cube = self.blocks[2],
                stackRight = self.blocks[3],
                stackLeft = self.blocks[4],
                squareLeft = self.blocks[5],
                squareRight = self.blocks[6];

            // this.landingBlock = new Brick(
            //     self.table,
            //     [5, 5],
            //     'red',
            //     self.phaserGame
            // );

            // this.landingBlock.build(false);

            // this.landingBlock = new Block(
            //     self.phaserGame, self.table, squareRight.patterns,
            //     {
            //         x: 2, y: 2,
            //         pivot: squareRight.pivot,
            //         childsAnchor: squareRight.anchor
            //     },
            //     'blue'
            // );

            // this.landingBlock.build();

            var gameLoop = new _GameLoopEs62['default'](this);

            gameLoop.start();
        }
    }, {
        key: 'restart',
        value: function restart() {
            this.table.destroyAllRows();
            this.start();
        }
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

// var debug = new Debug();

},{"../Block.es6":5,"../Brick.es6":6,"../Color.es6":11,"../Level.es6":14,"../Position/Position.es6":20,"../Table.es6":23,"./GameLoop.es6":13}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameLoop = (function () {
    function GameLoop(game) {
        _classCallCheck(this, GameLoop);

        this.game = game;
    }

    _createClass(GameLoop, [{
        key: "landBlock",
        value: function landBlock(block, didLand) {
            this.game.landingBlock = block;

            this.game.landingBlock.land(this.game.level.speed(), didLand);
        }
    }, {
        key: "tossBlocks",
        value: function tossBlocks() {
            var _this = this;

            var didLand = function didLand() {
                _this.destroyCompletedRows(_this.tossBlocks.bind(_this));
            };

            var randomBlock = this.game.newRandomBlock();

            randomBlock.build().then(function (_block) {
                _this.game.table.blocks.add(_block);
                _this.landBlock(_block, didLand);
            }, function () {
                _this.game.restart();
            });
        }
    }, {
        key: "destroyCompletedRows",
        value: function destroyCompletedRows(doneCallback) {
            var _this2 = this;

            var completedRows = this.game.table.completedRows;

            var row = completedRows.pop();

            if (!row) {
                doneCallback();
            } else {
                row.destroy();

                var rowsAbove = this.game.table.rowsAbove(row.nRow);

                this.game.table.collapseRows(rowsAbove, function () {
                    _this2.updateScore();
                    _this2.destroyCompletedRows(doneCallback);
                });
            }
        }
    }, {
        key: "updateScore",
        value: function updateScore() {
            var nRequiredRows = this.game.options.levels.requiredRows,
                nDeletedRows = this.game.score - this.game.level.lastScore;

            ++this.game.score;

            if (nDeletedRows === nRequiredRows) {
                this.game.level.up(this.game.score);
            }
        }
    }, {
        key: "start",
        value: function start() {
            this.tossBlocks();
        }
    }]);

    return GameLoop;
})();

exports["default"] = GameLoop;
module.exports = exports["default"];

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Level = (function () {
    function Level(nLevel, speedOptions) {
        if (nLevel === undefined) nLevel = 1;

        _classCallCheck(this, Level);

        this.defaultSpeed = speedOptions.defaultSpeed;
        this.speedFactor = speedOptions.speedFactor;

        this.nLevel = nLevel;
        this.lastScore = 0;
    }

    _createClass(Level, [{
        key: "speed",
        value: function speed() {
            return this.defaultSpeed - this.nLevel * this.speedFactor;
        }
    }, {
        key: "music",
        value: function music() {}
    }, {
        key: "background",
        value: function background() {}
    }, {
        key: "up",
        value: function up(lastScore) {
            this.lastScore = lastScore;

            return ++this.nLevel;
        }
    }, {
        key: "to",
        value: function to(n) {
            this.nLevel = n;

            return this.nLevel;
        }
    }]);

    return Level;
})();

exports["default"] = Level;
module.exports = exports["default"];

/* Music for current level */

/* Background for current level */

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

var _CollisionCollisionDetectionEs6 = require('../Collision/CollisionDetection.es6');

var _CollisionCollisionDetectionEs62 = _interopRequireDefault(_CollisionCollisionDetectionEs6);

var MoveBlock = (function (_Move) {
    _inherits(MoveBlock, _Move);

    function MoveBlock(position, block) {
        _classCallCheck(this, MoveBlock);

        _get(Object.getPrototypeOf(MoveBlock.prototype), 'constructor', this).call(this);

        this.position = position;
        this.block = block;
    }

    _createClass(MoveBlock, [{
        key: 'phaserTranslate',
        value: function phaserTranslate() {
            var _this = this;

            var tween = this.block.phaserGame.add.tween(this.block.phaserGroup);

            return new Promise(function (resolve) {
                tween.onComplete.add(resolve);

                tween.to(_this.block.position.phaserGroupPosition(), 1, Phaser.Easing.Linear.None, true);
            });
        }
    }, {
        key: 'tableTranslate',
        value: function tableTranslate() {
            return this.block.bricks.forEach(function (brick) {
                return brick.putCell(brick.position);
            });
        }
    }, {
        key: 'pretendFirst',
        value: function pretendFirst(coordinates, resolve, reject) {
            var collisions;

            this.block.position.saveCoordinates();
            this.block.position.coordinates = coordinates;

            collisions = new _CollisionCollisionDetectionEs62['default'](this.block.table).lookOut(this.block.bricks);

            this.block.position.rollbackCoordinates();

            if (collisions.length === 0) {
                return this.execute(coordinates, resolve);
            } else {
                reject(collisions);
            }
        }
    }, {
        key: 'execute',
        value: function execute(coordinates, resolve) {
            this.block.clearCells();

            this.block.position.coordinates = coordinates;

            this.tableTranslate();
            this.phaserTranslate().then(resolve);
        }
    }, {
        key: 'carryOut',
        value: function carryOut(coordinates, detectCollision) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                if (detectCollision) {
                    _this2.pretendFirst(coordinates, resolve, reject);
                } else {
                    _this2.execute(coordinates, resolve);
                }
            });
        }
    }, {
        key: 'down',
        value: function down(detectCollision) {
            var coordinates = _get(Object.getPrototypeOf(MoveBlock.prototype), 'down', this).call(this);

            return this.carryOut(coordinates, detectCollision);
        }
    }, {
        key: 'up',
        value: function up(detectCollision) {
            var coordinates = _get(Object.getPrototypeOf(MoveBlock.prototype), 'up', this).call(this);

            return this.carryOut(coordinates, detectCollision);
        }
    }, {
        key: 'right',
        value: function right(detectCollision) {
            var coordinates = _get(Object.getPrototypeOf(MoveBlock.prototype), 'right', this).call(this);

            return this.carryOut(coordinates, detectCollision);
        }
    }, {
        key: 'left',
        value: function left(detectCollision) {
            var coordinates = _get(Object.getPrototypeOf(MoveBlock.prototype), 'left', this).call(this);

            return this.carryOut(coordinates, detectCollision);
        }
    }, {
        key: 'to',
        value: function to(coordinates, detectCollision) {
            return this.carryOut(coordinates, detectCollision);
        }
    }]);

    return MoveBlock;
})(_MoveEs62['default']);

exports['default'] = MoveBlock;
module.exports = exports['default'];

},{"../Collision/CollisionDetection.es6":10,"./Move.es6":15}],17:[function(require,module,exports){
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

var _MoveBlockEs6 = require('./MoveBlock.es6');

var _MoveBlockEs62 = _interopRequireDefault(_MoveBlockEs6);

var _CollisionCollisionDetectionEs6 = require('../Collision/CollisionDetection.es6');

var _CollisionCollisionDetectionEs62 = _interopRequireDefault(_CollisionCollisionDetectionEs6);

var MoveBrick = (function (_MoveBlock) {
    _inherits(MoveBrick, _MoveBlock);

    function MoveBrick(position, brick) {
        _classCallCheck(this, MoveBrick);

        _get(Object.getPrototypeOf(MoveBrick.prototype), 'constructor', this).call(this, position, brick);
    }

    _createClass(MoveBrick, [{
        key: 'tableTranslate',
        value: function tableTranslate() {
            return this.block.putCell(this.position);
        }
    }, {
        key: 'phaserTranslate',
        value: function phaserTranslate() {
            var _this = this;

            var tween = this.block.phaserGame.add.tween(this.block.phaserSprite);

            return new Promise(function (resolve) {
                tween.onComplete.add(resolve);
                tween.to(_this.block.position.phaserSpritePosition(), 1, Phaser.Easing.Linear.None, true);
            });
        }
    }, {
        key: 'pretendFirst',
        value: function pretendFirst(coordinates, resolve, reject) {
            var collisions;

            this.block.position.saveCoordinates();
            this.block.position.coordinates = coordinates;

            collisions = new _CollisionCollisionDetectionEs62['default'](this.block.table).lookOut(this.block);

            this.block.position.rollbackCoordinates();

            if (collisions.length === 0) {
                return this.execute(coordinates, resolve);
            } else {
                reject(collisions);
            }
        }
    }, {
        key: 'execute',
        value: function execute(coordinates, resolve) {
            this.block.clearCell();

            this.block.position.coordinates = coordinates;

            this.tableTranslate();
            this.phaserTranslate().then(resolve);
        }
    }]);

    return MoveBrick;
})(_MoveBlockEs62['default']);

exports['default'] = MoveBrick;
module.exports = exports['default'];

},{"../Collision/CollisionDetection.es6":10,"./MoveBlock.es6":16}],18:[function(require,module,exports){
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
    _inherits(BlockPosition, _Position);

    function BlockPosition(x, y, pivot, childsAnchor) {
        _classCallCheck(this, BlockPosition);

        _get(Object.getPrototypeOf(BlockPosition.prototype), 'constructor', this).call(this, x, y);

        this.pivot = pivot;
        this.childsAnchor = childsAnchor;
    }

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

},{"./Position.es6":20}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _PositionEs6 = require('./Position.es6');

var _PositionEs62 = _interopRequireDefault(_PositionEs6);

var BrickPosition = (function (_Position) {
    _inherits(BrickPosition, _Position);

    function BrickPosition(x, y, blockPosition) {
        var anchor = arguments.length <= 3 || arguments[3] === undefined ? { x: 0, y: 0 } : arguments[3];

        _classCallCheck(this, BrickPosition);

        _get(Object.getPrototypeOf(BrickPosition.prototype), 'constructor', this).call(this, x, y);

        if (blockPosition) {
            this.blockPosition = blockPosition;
            this.anchor = this.blockPosition.childsAnchor;
        } else {
            this.anchor = anchor;
        }
    }

    _createClass(BrickPosition, [{
        key: 'phaserSpritePosition',
        value: function phaserSpritePosition() {
            var position;

            position = { x: this._x, y: this._y };

            if (this.blockPosition) {
                position.x += this.blockPosition.pivot.x + this.anchor.x;
                position.y += this.blockPosition.pivot.y + this.anchor.y;
            }

            return { x: this.toPixels(position.x), y: this.toPixels(position.y) };
        }
    }, {
        key: 'x',
        get: function get() {
            var x;

            if (this.blockPosition) {
                x = this.blockPosition.x + this._x;
            } else {
                x = this._x;
            }

            return x;
        },
        set: function set(x) {
            this._x = x;
        }
    }, {
        key: 'y',
        get: function get() {
            var y;

            if (this.blockPosition) {
                y = this.blockPosition.y + this._y;
            } else {
                y = this._y;
            }

            return y;
        },
        set: function set(y) {
            this._y = y;
        }
    }]);

    return BrickPosition;
})(_PositionEs62['default']);

exports['default'] = BrickPosition;
module.exports = exports['default'];

},{"./Position.es6":20}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Position = (function () {
    function Position(x, y) {
        var cellSize = arguments.length <= 2 || arguments[2] === undefined ? 35 : arguments[2];

        _classCallCheck(this, Position);

        this.x = x;
        this.y = y;

        this.cellSize = cellSize;
    }

    _createClass(Position, [{
        key: "saveCoordinates",
        value: function saveCoordinates() {
            this.previousCoordinates = this.coordinates;
        }
    }, {
        key: "rollbackCoordinates",
        value: function rollbackCoordinates() {
            this.coordinates = this.previousCoordinates;
        }
    }, {
        key: "toPixels",
        value: function toPixels(val) {
            return val * this.cellSize;
        }
    }, {
        key: "coordinates",
        get: function get() {
            return {
                x: this.x,
                y: this.y
            };
        },
        set: function set(coordinates) {
            this.x = coordinates.x;
            this.y = coordinates.y;
        }
    }]);

    return Position;
})();

exports["default"] = Position;
module.exports = exports["default"];

},{}],21:[function(require,module,exports){
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

var _CollisionCollisionDetectionEs6 = require('./Collision/CollisionDetection.es6');

var _CollisionCollisionDetectionEs62 = _interopRequireDefault(_CollisionCollisionDetectionEs6);

var Rotate = (function () {
    function Rotate(block, detectCollision) {
        _classCallCheck(this, Rotate);

        this.block = block;
        this.detectCollision = detectCollision;

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
            var tween = this.phaserGame.add.tween(this.phaserGroup);

            return new Promise(function (resolve) {
                tween.onComplete.add(resolve);

                tween.to({ angle: angle }, 1, Phaser.Easing.Linear.None, true);
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
                var position = new _PositionBrickPositionEs62['default'](pattern.positions[i][0], pattern.positions[i][1], this.block.position);

                this.block.bricks[i].putCell(position);
            }
        }
    }, {
        key: 'pretendFirst',
        value: function pretendFirst(angle, resolve, reject) {
            var _this = this;

            var pattern, bricks, collisions;

            if (angle === 360) {
                angle = 0;
            }

            pattern = this.findPatternByAngle(angle);

            bricks = this.block.bricks.map(function (brick, idx) {
                /*
                    We only reference the object, no deep cloning.
                 */
                var brickRef = Object.create(brick);

                brickRef.position = new _PositionBrickPositionEs62['default'](pattern.positions[idx][0], pattern.positions[idx][1], _this.block.position);

                return brickRef;
            });

            collisions = new _CollisionCollisionDetectionEs62['default'](this.block.table).lookOut(bricks);

            if (collisions.length === 0) {
                return this.execute(angle, resolve);
            } else {
                reject(collisions);
            }
        }
    }, {
        key: 'execute',
        value: function execute(angle, resolve) {
            this.tableTranslate(angle);
            this.phaserTranslate(angle).then(resolve);
        }
    }, {
        key: 'carryOut',
        value: function carryOut(angle, detectCollision) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                if (detectCollision) {
                    _this2.pretendFirst(angle, resolve, reject);
                } else {
                    _this2.execute(angle, resolve);
                }
            });
        }
    }, {
        key: 'left',

        /**
         * @todo Fix bug: When angle 0, phaser will rotate right to 270
         * @return {[type]} [description]
         */
        value: function left() {
            var angle = this.phaserGroup.angle === 0 ? 270 : this.phaserGroup.angle - 90;

            return this.carryOut(angle, this.detectCollision);
        }
    }, {
        key: 'right',
        value: function right() {
            var angle = this.phaserGroup.angle === 360 ? 90 : this.phaserGroup.angle + 90;

            return this.carryOut(angle, this.detectCollision);
        }
    }]);

    return Rotate;
})();

exports['default'] = Rotate;
module.exports = exports['default'];

},{"./Collision/CollisionDetection.es6":10,"./Position/BrickPosition.es6":19}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _UtilEs6 = require('./Util.es6');

var _UtilEs62 = _interopRequireDefault(_UtilEs6);

var _ArrayArrayMainEs6 = require('./Array/ArrayMain.es6');

var _ArrayArrayMainEs62 = _interopRequireDefault(_ArrayArrayMainEs6);

var Row = (function () {
    function Row(table, tableRow, nRow) {
        _classCallCheck(this, Row);

        this.table = table;
        this.cells = tableRow;
        this.nRow = nRow;
    }

    _createClass(Row, [{
        key: 'clear',
        value: function clear() {
            for (var i = 0; i < this.cells.length; ++i) {
                this.cells[i].clear();
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            for (var i = 0; i < this.cells.length; ++i) {
                var cell = this.cells[i];

                if (!cell.isEmpty()) {
                    cell.brick.destroy();
                }
            }

            return this.nRow;
        }
    }, {
        key: 'collapse',
        value: function collapse(doneCallback) {
            var _this = this;

            var promises = [],
                previousBricks = this.bricks.mapTo('nBrick');

            this.bricks.forEach(function (brick) {
                promises.push(brick.collapse(function () {}));
            });

            Promise.all(promises).then(function () {
                var bricks = _this.bricks.mapTo('nBrick');

                if (bricks.equals(previousBricks)) {
                    doneCallback();
                } else {
                    _this.collapse(doneCallback);
                }
            });
        }
    }, {
        key: 'cells',
        get: function get() {
            return this._cells;
        },
        set: function set(cells) {
            this._cells = cells;
        }
    }, {
        key: 'isCompleted',
        get: function get() {
            return this.cells.every(function (cell) {
                return !cell.isEmpty();
            });
        }
    }, {
        key: 'isEmpty',
        get: function get() {
            return this.cells.every(function (cell) {
                return cell.isEmpty();
            });
        }
    }, {
        key: 'bricks',
        get: function get() {
            var bricks = new _ArrayArrayMainEs62['default']();

            this.cells.forEach(function (cell) {

                if (!cell.isEmpty()) {
                    var brick = cell.brick;

                    if (!bricks.contains(brick)) {
                        bricks.add(brick);
                    }
                }
            });

            return bricks;
        }
    }, {
        key: 'blocks',

        /**
         * @todo Refactor to use get bricks()
         * @return {[type]} [description]
         */
        get: function get() {
            var blocks = new _ArrayArrayMainEs62['default']();

            this.cells.forEach(function (cell) {

                if (!cell.isEmpty()) {
                    var block = cell.brick.parentBlock;

                    if (!blocks.contains(block)) {
                        blocks.add(block);
                    }
                }
            });

            return blocks;
        }
    }]);

    return Row;
})();

exports['default'] = Row;
module.exports = exports['default'];

},{"./Array/ArrayMain.es6":4,"./Util.es6":24}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ArrayArrayBlocksEs6 = require('./Array/ArrayBlocks.es6');

var _ArrayArrayBlocksEs62 = _interopRequireDefault(_ArrayArrayBlocksEs6);

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
        this.blocks = new _ArrayArrayBlocksEs62['default']();
        this.nBlocks = 0;
        this.nBricks = 0;
    }

    _createClass(Table, [{
        key: 'cell',
        value: function cell(position) {
            return this.cellsArray.cell(position);
        }
    }, {
        key: 'row',
        value: function row(x) {
            return new _RowEs62['default'](this, this.cellsArray.array[x], x);
        }
    }, {
        key: 'rowAbove',
        value: function rowAbove(row) {
            if (row.nRow === 0) {
                return false;
            }

            return this.row(row.nRow - 1);
        }
    }, {
        key: 'incrementNBlocks',
        value: function incrementNBlocks() {
            return ++this.nBlocks;
        }
    }, {
        key: 'incrementNBricks',
        value: function incrementNBricks() {
            return ++this.nBricks;
        }
    }, {
        key: 'offLimits',
        value: function offLimits(position) {
            return position.x >= this.xSize || position.x < 0 || position.y >= this.ySize || position.y < 0;
        }
    }, {
        key: 'destroyAllRows',
        value: function destroyAllRows() {
            this.rows.forEach(function (row) {
                return row.destroy();
            });
        }
    }, {
        key: 'rowsAbove',
        value: function rowsAbove(i) {
            return this.rows.filter(function (row) {
                return row.nRow < i;
            });
        }
    }, {
        key: 'collapseRows',
        value: function collapseRows(rows, doneCallback) {
            var row = rows.pop();

            if (!row) {
                doneCallback();
            } else {
                row.collapse(this.collapseRows.bind(this, rows, doneCallback));
            }
        }
    }, {
        key: 'cellsArray',
        get: function get() {
            return this._cellsArray;
        }
    }, {
        key: 'rows',
        get: function get() {
            var _this = this;

            return this.cellsArray.array.map(function (row, idx) {
                return _this.row(idx);
            });
        }
    }, {
        key: 'completedRows',
        get: function get() {
            return this.rows.filter(function (row) {
                return row.isCompleted;
            });
        }
    }]);

    return Table;
})();

exports['default'] = Table;
module.exports = exports['default'];

},{"./Array/ArrayBlocks.es6":3,"./CellsArray.es6":8,"./Row.es6":22}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Util = (function () {
    function Util() {
        _classCallCheck(this, Util);
    }

    _createClass(Util, null, [{
        key: 'getRandomInt',
        value: function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }, {
        key: 'deepCompare',
        value: function deepCompare() {
            var i, l, leftChain, rightChain;

            function deep(x, y) {
                var p;

                // remember that NaN === NaN returns false
                // and isNaN(undefined) returns true
                if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
                    return true;
                }

                // Compare primitives and functions.
                // Check if both arguments link to the same object.
                // Especially useful on step when comparing prototypes
                if (x === y) {
                    return true;
                }

                // Works in case when functions are created in constructor.
                // Comparing dates is a common scenario. Another built-ins?
                // We can even handle functions passed across iframes
                if (typeof x === 'function' && typeof y === 'function' || x instanceof Date && y instanceof Date || x instanceof RegExp && y instanceof RegExp || x instanceof String && y instanceof String || x instanceof Number && y instanceof Number) {
                    return x.toString() === y.toString();
                }

                // At last checking prototypes as good a we can
                if (!(x instanceof Object && y instanceof Object)) {
                    return false;
                }

                if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
                    return false;
                }

                if (x.constructor !== y.constructor) {
                    return false;
                }

                if (x.prototype !== y.prototype) {
                    return false;
                }

                // Check for infinitive linking loops
                if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
                    return false;
                }

                // Quick checking of one object beeing a subset of another.
                // todo: cache the structure of arguments[0] for performance
                for (p in y) {
                    if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                        return false;
                    } else if (typeof y[p] !== typeof x[p]) {
                        return false;
                    }
                }

                for (p in x) {
                    if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                        return false;
                    } else if (typeof y[p] !== typeof x[p]) {
                        return false;
                    }

                    switch (typeof x[p]) {
                        case 'object':
                        case 'function':

                            leftChain.push(x);
                            rightChain.push(y);

                            if (!deep(x[p], y[p])) {
                                return false;
                            }

                            leftChain.pop();
                            rightChain.pop();
                            break;

                        default:
                            if (x[p] !== y[p]) {
                                return false;
                            }
                            break;
                    }
                }

                return true;
            }

            if (arguments.length < 1) {
                return true; //Die silently? Don't know how to handle such case, please help...
                // throw "Need two or more arguments to compare";
            }

            for (i = 1, l = arguments.length; i < l; i++) {

                leftChain = []; //Todo: this can be cached
                rightChain = [];

                if (!deep(arguments[0], arguments[i])) {
                    return false;
                }
            }

            return true;
        }
    }]);

    return Util;
})();

exports['default'] = Util;
module.exports = exports['default'];

},{}],25:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libArrayArrayMainEs6 = require('./lib/Array/ArrayMain.es6');

var _libArrayArrayMainEs62 = _interopRequireDefault(_libArrayArrayMainEs6);

var _libGameGameEs6 = require('./lib/Game/Game.es6');

var _libGameGameEs62 = _interopRequireDefault(_libGameGameEs6);

var _dataDataJsonEs6 = require('./data/data.json.es6');

var _dataDataJsonEs62 = _interopRequireDefault(_dataDataJsonEs6);

var data = _dataDataJsonEs62['default'];

/**
 * @todo This will be translate to parseJSONFile in Block
 */
var DataBlocks = (function () {
    var array = new _libArrayArrayMainEs62['default']();

    for (var i = 0; i < data.blocks.length; ++i) {
        array.add(data.blocks[i]);
    }
    return array;
})();

var start = function start() {
    var game = window.Superblocks;

    return true;
};

var update = function update() {};

window.Superblocks = new _libGameGameEs62['default']({
    xSize: 10, ySize: 20, cellSize: 35
}, data.gameOptions, DataBlocks, start, update, true);

},{"./data/data.json.es6":1,"./lib/Array/ArrayMain.es6":4,"./lib/Game/Game.es6":12}]},{},[25])


//# sourceMappingURL=superblocks.js.map