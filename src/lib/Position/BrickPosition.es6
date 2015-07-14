import Position            from './Position.es6';

export default class BrickPosition extends Position {
    constructor(blockPosition, relativeX, relativeY, anchor) {
        super();

        this.blockPosition              = blockPosition;

        this.relativeX                  = relativeX;
        this.relativeY                  = relativeY;

        this.anchor                     = anchor;
    }

    get x() {
        return this.blockPosition.x + this.relativeX;
    }

    get y() {
        return this.blockPosition.y + this.relativeY;
    }

    phaserSpritePosition() {
        var pivot = this.blockPosition.pivot;

        return {
            x: this.toPixels(pivot.x + this.relativeX + this.anchor.x),
            y: this.toPixels(pivot.y + this.relativeY + this.anchor.y)
        };
    }
}
