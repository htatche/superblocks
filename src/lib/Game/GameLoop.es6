export default class GameLoop {
    constructor(game) {
        this.game                   = game;
    }

    start() {
        this.landBlocksIterate();
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

    createRandomBlock() {
        return this.game.table.blocks.add(this.game.newRandomBlock());
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

    afterLanding() {
        this.destroyCompletedRows(this.landBlocksIterate.bind(this));
    }

    landBlocksIterate() {
        this.landBlock().then(this.afterLanding.bind(this));
    }

    destroyCompletedRows(doneCallback) {
        var completedRows = this.game.table.completedRows;

        var row = completedRows.pop();

        if (!row) { doneCallback(); }
        else {
            row.destroy();

            var rowsAbove = this.game.table.rowsAbove(row.nRow);

            this.game.table.collapseRows(rowsAbove, () => {
                this.destroyCompletedRows(doneCallback);
            });
        }
    }

}
