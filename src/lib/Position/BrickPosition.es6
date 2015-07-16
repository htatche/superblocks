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

    get relativeCoordinates() {
        return {
            x: this.relativeX,
            y: this.relativeY
        };
    }

    set relativeCoordinates(coordinates) {
        this.relativeX = coordinates.x;
        this.relativeY = coordinates.y;
    }

    phaserSpritePosition() {
        var pivot = this.blockPosition.pivot;

        return {
            x: this.toPixels(pivot.x + this.relativeX + this.anchor.x),
            y: this.toPixels(pivot.y + this.relativeY + this.anchor.y)
        };
    }

    saveRelativeCoords() {
        this.previousRelativeCoords = this.relativeCoordinates;
    }

    rollbackRelativeCoords() {
        this.relativeCoordinates = this.previousRelativeCoords;
    }
}
