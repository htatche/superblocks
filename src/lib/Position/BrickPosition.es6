import Position            from './Position.es6';

export default class BrickPosition extends Position {

    constructor(x, y, anchor, blockPosition) {
        super(x, y);

        if (blockPosition) { this.blockPosition = blockPosition; }

        this.anchor = anchor;
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
        var pivot = this.blockPosition.pivot;

        return {
            x: this.toPixels(pivot.x + this._x + this.anchor.x),
            y: this.toPixels(pivot.y + this._y + this.anchor.y)
        };
    }
}
