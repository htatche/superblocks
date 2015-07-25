export default class GameLoop {
    constructor(game) {
        this.game                   = game;
    }

    landBlock(block, didLand) {
        this.game.landingBlock = block;

        this.game.landingBlock
        .land(this.game.level.speed(), didLand);
    }

    tossBlocks() {
        var didLand = () => {
                this.destroyCompletedRows(this.tossBlocks.bind(this));
            };

        var randomBlock = this.game.newRandomBlock();

        randomBlock.build().then(
            (_block) => {
                this.game.table.blocks.add(_block);
                this.landBlock(_block, didLand);
            },
            () => {
                this.game.restart();
            }
        );
    }

    destroyCompletedRows(doneCallback) {
        var completedRows = this.game.table.completedRows;

        var row = completedRows.pop();

        if (!row) { doneCallback(); }
        else {
            row.destroy();

            var rowsAbove = this.game.table.rowsAbove(row.nRow);

            this.game.table.collapseRows(rowsAbove, () => {
                this.updateScore();
                this.destroyCompletedRows(doneCallback);
            });
        }
    }

    updateScore() {
        var nRequiredRows = this.game.options.levels.requiredRows,
            nDeletedRows  = this.game.score - this.game.level.lastScore;

        ++this.game.score;

        if (nDeletedRows === nRequiredRows) {
            this.game.level.up(this.game.score);
        }
    }

    start() {
        this.tossBlocks();
    }

}
