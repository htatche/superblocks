/*global Phaser*/

// import Brick            from './Brick.es6';
// import ArrayMain        from './ArrayMain.es6';
// import Position         from './Position.es6';
// import MoveBlock        from './Move/MoveBlock.es6';
// import Promise          from '../../bower_components/when/es6-shim/Promise.browserify-es6.js';

export default class Rotate {
    constructor(block) {
        this.phaserGame  = block.phaserGame;
        this.phaserGroup = block.phaserGroup;
    }

    phaserTranslate(angle) {
        return new Promise((resolve, reject) => {
            this.phaserGame.add.tween(this.phaserGroup).to(
                { angle: this.phaserGroup.angle += angle },
                1,
                Phaser.Easing.Linear.None,
                true
            );

            resolve(this.phaserGroup);
        });
    }

    // tableTranslate() {
    //     this.block.clearCells();

    //     this.block.bricks.forEach((brick) => {
    //         var nextPosition = new Move(brick.position, brick)[strDirection]();

    //         return brick.putCell(nextPosition);
    //     });
    // }

    execute(angle) {
        this.phaserTranslate(angle).then((phaserGroup) => {
            phaserGroup.children.forEach((i) => {
                // debugger;
            });
        });
        // this.tableTranslate(angle);
    }

    left() {
        this.execute(-90);
    }

    right() {
        this.execute(90);
    }

}
