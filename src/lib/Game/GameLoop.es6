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
            console.log(`landBlock() ${this.game.landingBlock.nBlock}`);

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
        this.collapseTable().then(() => {
            return this.landBlocksIterate();
        });
    }

    landBlocksIterate() {
        console.log('landBlocksIterate()');
        this.landBlock().then(this.afterLanding.bind(this));
    }

    shiftBlock(block) {
        console.log('shiftBlock()');
        return new Promise((resolve) => {
            block.down(false).then(() => {
                resolve(block);
            });
        });
    }

    collapseBlocks(blocks, shiftedBlocks, rowIsCollapsed) {
        console.log('collapseBlocks()');
        var block = blocks.pop();

        if (!block) { rowIsCollapsed(); }
        else {
            if (!shiftedBlocks.contains(block)) {
                this.shiftBlock(block).then((_block) => {
                    shiftedBlocks.add(_block);
                    this.collapseBlocks(blocks, shiftedBlocks, rowIsCollapsed);
                });
            }
        }
    }

    collapseRow(row, shiftedBlocks) {
        console.log('collapseRow()');
        return new Promise((rowIsCollapsed) => {
            this.collapseBlocks(row.blocks, shiftedBlocks, rowIsCollapsed);
        });
    }

    collapseRowsAbove(row, shiftedBlocks, promise) {
        console.log('collapseRowsAbove()');
        var rowAbove = this.game.table.rowAbove(row);

        if (!rowAbove) { Promise.resolve(promise); }
        // if (!rowAbove || rowAbove.isEmpty) { Promise.resolve(promise); }
        else {
            this.collapseRow(rowAbove, shiftedBlocks).then(() => {

                window.Superblocks.table.cellsArray.prettyPrint();

                this.collapseRowsAbove(rowAbove, shiftedBlocks, promise);
            });
        }
    }

    destroyRows(allCollapsed) {
        console.log('destroyRows()');

        var completedRows = this.game.table.completedRows.reverse();

        var row = completedRows.shift();

        if (!row) { allCollapsed(); }
        else {
            row.destroy();

            var shiftedBlocks = new ArrayMain();

            var promise = new Promise((resolve) => {
                this.destroyRows(allCollapsed);
            });

            this.collapseRowsAbove(row, shiftedBlocks, promise);
        }
    }

    collapseTable() {
        console.log('collapseTable()');
        return new Promise((allCollapsed) => {
            this.destroyRows(allCollapsed);
        });
    }

}
