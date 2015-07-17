export default class GameLoop {
    constructor(game) {
        this.game                   = game;
    }

    createRandomBlock() {
        return this.game.table.blocks.add(this.game.newRandomBlock());
    }

    successBuild(didLand, block) {
        block.land(this.game.options.speed, didLand);
    }

    failedBuild(collisions) {
        this.game.restart();

        console.log('Game Over');
        console.log(collisions);
    }

    buildBlock() {
        return this.game.landingBlock.build();
    }

    landBlock() {
        var self = this;

        return new Promise((didLand) => {
            this.game.landingBlock = this.createRandomBlock();

            this.buildBlock().then(
                this.successBuild.bind(self, didLand),
                this.failedBuild.bind(self)
            );
        });
    }

    afterLanding(collisions) {
        // Clean completed rows and shift down
            // Level Up (Higher speed)
            // New Block

        var nRow = this.game.table.destroyCompletedRows();

        if (nRow) {
            this.game.table.shiftRowsDown(nRow);
        }

        return this.landBlocksIterate();

    }

    landBlocksIterate() {
        this.landBlock().then(this.afterLanding.bind(this));
    }

    start() {
        this.landBlocksIterate();
    }

}
