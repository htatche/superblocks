import Position            from './Position.es6';

export default class BrickPosition extends Position {

    constructor(x, y, blockPosition, anchor = {x: 0, y: 0}) {
        super(x, y);

        if (blockPosition) {
            this.blockPosition = blockPosition;
            this.anchor        = this.blockPosition.childsAnchor;
        } else {
            this.anchor = anchor;
        }
    }

    get x() {
        var x;

        if (this.blockPosition) { x = this.blockPosition.x + this._x; }
        else                    { x = this._x; }

        return x;
    }

    get y() {
        var y;

        if (this.blockPosition) { y = this.blockPosition.y + this._y; }
        else                    { y = this._y; }

        return y;
    }

    set x(x) { this._x = x; }
    set y(y) { this._y = y; }

    phaserSpritePosition() {
        var position;

        position = { x: this._x, y: this._y };

        if (this.blockPosition) {
            position.x += this.blockPosition.pivot.x + this.anchor.x;
            position.y += this.blockPosition.pivot.y + this.anchor.y;
        }

        return {x: this.toPixels(position.x), y: this.toPixels(position.y)};
    }
}
