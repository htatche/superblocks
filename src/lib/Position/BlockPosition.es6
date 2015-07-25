import Position            from './Position.es6';

export default class BlockPosition extends Position {
    constructor(x, y, pivot, childsAnchor) {
        super(x, y);

        this.pivot                      = pivot;
        this.childsAnchor               = childsAnchor;
    }

    get coordinates() {
        return {
            x: this.x,
            y: this.y
        };
    }

    set coordinates(coordinates) {
        this.x = coordinates.x;
        this.y = coordinates.y;
    }

    phaserGroupPosition() {
        return {
            x: this.toPixels(this.x + this.childsAnchor.x),
            y: this.toPixels(this.y + this.childsAnchor.y)
        };
    }

    phaserGroupPivot() {
        return {
            x: this.toPixels(this.pivot.x + this.childsAnchor.x),
            y: this.toPixels(this.pivot.y + this.childsAnchor.y)
        };
    }

    saveCoordinates() {
        this.previousCoordinates = this.coordinates;
    }

    rollbackCoordinates() {
        this.coordinates = this.previousCoordinates;
    }
}
