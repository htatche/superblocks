var TOP         = 0,
    FLOOR       = 700,
    LEFT_WALL   = 0,
    RIGHT_WALL  = 350;

var ROWS    = [  0,  35,  70, 105, 140, 175, 210, 245, 280, 315,
               350, 385, 420, 455, 490, 525, 560, 595, 630, 665];

var COLUMNS = [0, 35, 70, 105, 140, 175, 210, 245, 280, 315];

var CELL_SIZE = 35;

var game = new Phaser.Game(RIGHT_WALL, FLOOR,
                           Phaser.AUTO, 
                           'tetris',
                           { preload: preload,
                             create: create,
                             update: update });

var blocks_group;

var blocks = [
    {name: 'column',   xsize: 3, ysize: 1, cells: [1, COLUMNS.length, 2 * COLUMNS.length]},
    {name: 'triangle',   xsize: 2, ysize: 3, cells: [2, COLUMNS.length + 1, (2 * COLUMNS.length) + 1]}
    // {name: 'triangle', xsize: 2, ysize: 3}
];

var last_column;

var grid;

// Blocks counter, used for block.number
var nblock = 0;

// Grid is 10x20 and contains 
// an array of cells initialized with falses

var Grid = function() {
    this.cells = []
}

// Block starts in row 0
// moveDown() moves it one row below, if there is no
// collision, we execute again this function

var Block = function() {
    this.row      = 1,
    this.column   = 1,
    this.occupied_cells = [],
    this.next_occupied_cells = []
}

Grid.prototype.initialize = function() {
    var parent = this;

    var ncells = ROWS.length * COLUMNS.length;

    for (var i=1; i <= ncells; ++i) {
        parent.cells[i] = [{occupied: false, number: null}];
    }
}

Grid.prototype.updateGrid = function(block) {
    var parent = this;  
    var collision = false;

    // Update old occupied cells with false
    for (var i=1; i < parent.cells.length; ++i) {
        if (parent.cells[i].number == block.number) {
            parent.cells[i] = {occupied: false, number: null};
        }
    }

    // Update new occupied cells with true
    for (var i=0; i < block.occupied_cells.length; ++i) {

        // before overriding grid cells occupation, we check if they are already
        // oocupied, which means collision!
        if (block.preventCollision("down")) {
            collision = true;
        } 

        parent.cells[block.occupied_cells[i]] = {occupied: true, number: block.number};
    }

    return collision;
}

// Updates cells that this block occupies
Block.prototype.setOccupiedCells = function() {
    var parent = this;

    var ncell = parent.shape.cells[0] * parent.row * COLUMNS.length; 

    for (var i=0; i < parent.shape.cells.length; ++i) {
        if (i == 0) {
            parent.occupied_cells[0] = parent.shape.cells[i] + ncell;
        } else {
            parent.occupied_cells[i] = parent.shape.cells[i] + ncell + 1;
        }
    }

    console.log(parent.occupied_cells);
}

// Updates next cells that will be occupied
Block.prototype.setNextOccupiedCells = function() {
    var parent = this;

    var next_row = parent.row + 1

    var ncell = parent.shape.cells[0] * next_row * COLUMNS.length; 

    for (var i=0; i < parent.shape.cells.length; ++i) {
        if (i == 0) {
            parent.next_occupied_cells[0] = parent.shape.cells[i] + ncell;
        } else {
            parent.next_occupied_cells[i] = parent.shape.cells[i] + ncell + 1;
        }
    }

    // console.log(parent.occupied_cells);
}

Block.prototype.preventCollision = function(direction) {
    var parent    = this;


    switch(direction) {
        case "down":
           parent.setNextOccupiedCells()
    }

    for (var i=0; i < parent.next_occupied_cells.length; ++i) {   
        // unless we touched ground or out of grid scope 
        if (grid.cells[parent.next_occupied_cells[i]] != undefined) {

            if (grid.cells[parent.next_occupied_cells[i]].number != parent.number) {
                if (grid.cells[parent.next_occupied_cells[i]].occupied == true) {
                    return true;
                }
            }

        } else {
            return true;
        }
    }

    return false;
}

Grid.prototype.throwBlock = function() {

    var block = new Block();   

    var block_shape = pickRandomBlock();

    var random_column;

    while (last_column === random_column) random_column = pickRandomColumn(block_shape);

    last_column = random_column;           

    block.shape = block_shape;
    block.number = ++nblock;

    block.sprite = blocks_group.create(random_column, - (block.shape.xsize * 35), block_shape.name);
    block.sprite.anchor.setTo(0, 3);

    block.moveDown();
}

Block.prototype.moveDown = function() {
    var parent = this;

    console.log(parent.number);

    // if (parent.preventCollision()) {
    //     console.log ("Collision !");
    //     parent.shape.tween.stop();
    //     return;
    // } 

    parent.setOccupiedCells();    
    // grid.updateGrid(parent);

    if (grid.updateGrid(parent)) {
        console.log ("Collision !");
        parent.tween.stop();
        console.log("Throwing another block");
        grid.throwBlock();        
        return;
    }     

    if (parent.row == (ROWS.length - parent.shape.xsize) ) {
        console.log("Ground touched !");
        parent.tween.stop();
        console.log("Throwing another block");
        grid.throwBlock();
        return;
    }  

    // ++parent.row;

    parent.tween = game.add.tween(parent.sprite);

    parent.tween.to(
        { y: ROWS[parent.row] },
        1,
        Phaser.Easing.Linear.None,
        true
    );

    ++parent.row;

    parent.tween.onComplete.add(parent.moveNext, parent); 
}

Block.prototype.moveNext = function() {
    var parent = this;

    setTimeout(parent.moveDown.bind(parent), 200);   
}

function preload() {
     game.load.image('column', 'images/block_03.png');
     game.load.image('triangle', 'images/block_06.png');
}

function pickRandomColumn(block_shape) {
    // We add 1 since the last column of the array isn't the
    // y limit but only the last available column
    var limit = (COLUMNS.length + 1) - block_shape.ysize;


    return COLUMNS[0]; 
    // return COLUMNS[Math.floor(Math.random() * limit)]; 
}

function pickRandomBlock() {
    var block_shape = blocks[Math.floor(Math.random() * blocks.length)]; 

    return block_shape;
}

function create() {  
    grid = new Grid();

    grid.initialize();

    blocks_group = game.add.group();

    grid.throwBlock();
    // setTimeout(grid.throwBlock, 10000);
    // setInterval(grid.throwBlock, 2000);
}

function update() {
}
