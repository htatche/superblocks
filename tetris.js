var TOP = 0,
    FLOOR = 600,
    LEFT_WALL = 0,
    RIGHT_WALL = 350;

// Each cell from the grid is 35 px

var ROWS    = [  0,  35,  70, 105, 140, 175, 210, 245, 280, 315,
               350, 385, 420, 455, 490, 525, 560, 595, 630, 665];

var COLUMNS = [0, 35, 70, 105, 140, 175, 210, 245, 280, 315];

// var GRID = generateGrid();//   = [[ROWS[0], COLUMNS[0]], [ROWS[0], COLUMNS[1]]];

var CELL_SIZE = 35;

var game = new Phaser.Game(RIGHT_WALL, FLOOR, Phaser.AUTO, 'tetris', { preload: preload, create: create, update: update });

var blocks, platforms, floor;

var block, block2;

var block_types = ['column', 'triangle'];
var last_column;

// function generateGrid() {
//     var current_CELL_SIZE = 0,
//         current_column = 0;

//     // Fill rows    
//     for (var i = 0; i < ROWS.length; i++) {
//         for (var j = 0; j < COLUMNS.length; j++) {
//             GRID[i][j] = COLUMNS
//         }        
//     }

//     // for (var i = 0; i < ROWS.length; i++) {
//     //     for (var j = 0; j < COLUMNS.length; j++) {
//     //         GRID[i][j] = ROW[i];
//     //         // GRID[i][j] = current_CELL_SIZE + CELL_SIZE;

//     //         // current_column = current_column + CELL_SIZE;
//     //         // current_CELL_SIZE   = GRID[] 
//     //     }    

//         // current_row = current_row + CELL_SIZE;
//         // current_
//     }
// }

function preload() {
     game.load.image('column', 'images/block_03.png');
     game.load.image('triangle', 'images/block_06.png');
}

function pickRandomColumn() {
    return COLUMNS[Math.floor(Math.random() * COLUMNS.length)]; 
}

function pickRandomBlock() {
    return block_types[Math.floor(Math.random() * block_types.length)]; 
}

function throwBlock() {

    var random_column, block, tween;

    while (last_column === random_column) random_column = pickRandomColumn();

    last_column = random_column;          

    block = blocks.create(random_column, 0, pickRandomBlock());
    block.anchor.setTo(0, 1);
    tween = game.add.tween(block).to( { y: FLOOR }, 2400, Phaser.Easing.Linear.None, true);

    getVirtualShape(block);
    // tween.onStart = trackBlock(block, tween);
    // var block2 = blocks.create(random_column, 0, 'triangle');

    // block.body.setCollisionGroup(blocks_collision_group);
    // block.body.collides([blocks_collision_group]);

    // block.body.collideWorldBounds = true;
    // block.body.velocity.y=150;
    // block.body.bounce.y = 0;    

    // block2.body.collideWorldBounds = true;
    // block2.body.velocity.y=150;
    // block2.body.bounce.y = 0;    

}

function trackOccupiedCells(block) {
    var x = block.x / CELL_SIZE;
    var y = block.y / CELL_SIZE;

    var cells = [];// = [[x,y]];

    var shape_type = 'column';

    switch(shape_type) {
        case 'column':
            cells.push([x,y]);
            // Next cell is at the bottom
            cells.push([x+1,y]);
            // Next cell is at the bottom
            cells.push([x+2,y]);
    }
}

function trackBlock(block, tween) {
    while (tween.isRunning) {
        trackOccupiedCells();
    }
}

function CELL_SIZEsOccupiedByShape(block) {

}

function create() {  

    // game.physics.startSystem(Phaser.Physics.ARCADE);

    blocks = game.add.group();
    // blocks.enableBody = true;
    // blocks.physicsBodyType = Phaser.Physics.ARCADE;

    // block = blocks.create(100, 100, 'column');

    // block.body.collideWorldBounds = true;
    // block.body.velocity.y=150;
    // block.body.bounce.y = 0;

    // block2 = blocks.create(100, 300, 'column');

    // block2.body.collideWorldBounds = true;
    // block2.body.velocity.y=150;    


    setInterval(throwBlock, 500);

    // for (var i = 0; i < 3; i++)
    // {
        // var block = blocks.create(game.world.randomX, 0, 'column');

        // // block.body.setCollisionGroup(blocks_collision_group);
        // // block.body.collides([blocks_collision_group]);

        // block.body.collideWorldBounds = true;
        // block.body.velocity.y=150;
        // block.body.bounce.y = 0;        
    // }     


}

function update() {
    // game.physics.arcade.collide(block, block2);
    // game.physics.arcade.collide(blocks);
}
