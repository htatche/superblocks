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
var grid;

// function generateGrid() {

//     for (var i = 0; i < ROWS.length; i++) {
//         for (var j = 0; j < COLUMNS.length; j++) {
//             grid[i][j] = 0;
//         }        
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

    // trackBlock(block, tween);
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

// function shapeOccupiedCells(block) {

//     if (!tween.isRunning) clearInterval(interval_id);

//     var x = block.x / CELL_SIZE;
//     var y = block.y / CELL_SIZE;

//     var grid = [];// = [[x,y]];

//     var shape_type = 'column';

//     switch(shape_type) {
//         case 'column':
//             grid.push([x,y]);
//             // Next cell is at the bottom
//             grid.push([x+1,y]);
//             // Next cell is at the bottom
//             grid.push([x+2,y]);
//     }
// }

function trackBlock(block, tween) {
    var inderval_id = setInterval(shapeOccupiedCells,50);

    while (tween.isRunning) {
        // shapeOccupiedCells(block);
    }
    debugger;
}

function create() {  

    blocks = game.add.group();

    setInterval(throwBlock, 500);
}

function update() {
}
