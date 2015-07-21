import ArrayMain      from '../Array/ArrayMain.es6';

export default class GameLoop {
    constructor(game) {
        this.game                   = game;
    }

    start() {
        this.landBlocksIterate();
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
        this.destroyCompletedRows(this.landBlocksIterate.bind(this));
    }

    landBlocksIterate() {
        this.landBlock().then(this.afterLanding.bind(this));
    }

    collapseTable() {
        return new Promise((allCollapsed) => {
            this.destroyRows(allCollapsed);
        });
    }

    destroyCompletedRows(doneCallback) {
        var self = this;
        var completedRows = this.game.table.completedRows;

        var row = completedRows.pop();

        if (!row) { doneCallback(); }
        else {
            row.destroy();

            var rowsAbove = this.game.table.rowsAbove(row.nRow);

            this.game.table.collapseRows(rowsAbove, () => {
                self.destroyCompletedRows(doneCallback);
            });
        }
    }

}
