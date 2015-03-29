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
    {name: 'column',     ysize: 3, xsize: 1, cells: [1, COLUMNS.length, 2 * COLUMNS.length]},
    {name: 'triangle',   ysize: 2, xsize: 3, cells: [2, COLUMNS.length + 1, (2 * COLUMNS.length) + 1]}
    // {name: 'triangle', ysize: 2, xsize: 3}
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

Grid.prototype.initialize = function() {
    var parent = this;

    var ncells = ROWS.length * COLUMNS.length;

    for (var i=1; i <= ncells; ++i) {
        parent.cells[i] = [{occupied: false, number: null}];
    }
}

Grid.prototype.throwBlock = function() {

    var block_shape = pickRandomBlock();

    var random_column;

    while (last_column === random_column) random_column = pickRandomColumn(block_shape);

    last_column = random_column;           

    block.shape = block_shape;

    var x_pos = random_column;
    var y_pos = -35; //- (block.shape.ysize * 35);

    console.log("x_pos: " + x_pos);
    console.log("y_pos: " + y_pos);

    block.moveDown();
}

Block.prototype.moveDown = function() {
    var parent = this;

    parent.setOccupiedCells();    

    if (grid.updateGrid(parent)) {
        console.log ("Collision !");
        parent.tween.stop();
        console.log("Throwing another block");
        grid.throwBlock();        
        return;
    }     

    if (parent.row == (ROWS.length - parent.shape.ysize) ) {
        console.log("Ground touched !");
        parent.tween.stop();
        console.log("Throwing another block");
        grid.throwBlock();
        return;
    }  

    // ++parent.row;

    parent.tween = game.add.tween(parent.sprite);

    var x_pos = parent.sprite.x;
    var y_pos = parent.sprite.y + 35;

    console.log("x_pos: " + x_pos);
    console.log("y_pos: " + y_pos);

    parent.tween.to(
        { y: y_pos },
        500,
        Phaser.Easing.Linear.None,
        true
    );

    parent.row =  y_pos / 35;

    // ++parent.row;

    parent.tween.onComplete.add(parent.moveDown, parent); 
}

function pickRandomColumn(block_shape) {
    // We add 1 since the last column of the array isn't the
    // y limit but only the last available column
    var limit = (COLUMNS.length + 1) - block_shape.xsize;


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
}

function update() {
}
