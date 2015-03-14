var TOP         = 0,
    FLOOR       = 600,
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

var block_types = ['column', 'triangle'];

var blocks = [
    {name: 'column',   xsize: 3, ysize: 1, cells_occupied: []},
    {name: 'triangle', xsize: 2, ysize: 3}
];

var last_column;

// Block starts in row 0
// moveDown() moves it one row below, if there is no
// collision, we execute again this function

var Block = function() {
    this.row      = 0,
    this.column   = 0
}

Block.prototype.moveDown = function() {
    var parent = this;

    if (ROWS[this.row] == ROWS[FLOOR] ) return;

    ++this.row;

    this.tween = game.add.tween(this.sprite);

    this.tween.to(
        { y: ROWS[this.row] },
        500,
        Phaser.Easing.Linear.None,
        true
    );

    parent.tween.onComplete.add(this.preventCollision, this);
}

Block.prototype.preventCollision = function() {
    // 1 Create an array of falses that represents the grid
    // 2 Give to every block an array that represents which blocks it uses (from anchor)
    // 3 Before moveDown(), check that we are not going to overlap any existing block
    // 4 Perform actual tween move with moveDown(), update grid with new cells used
    // Back to 3
    this.moveDown();
}

function preload() {
     game.load.image('column', 'images/block_03.png');
     game.load.image('triangle', 'images/block_06.png');
}

function pickRandomColumn(block_shape) {
    // We add 1 since the last column of the array isn't the
    // y limit but only the last available column
    var limit = (COLUMNS.length + 1) - block_shape.ysize;

    return COLUMNS[Math.floor(Math.random() * limit)]; 
}

function pickRandomBlock() {
    var block_shape = blocks[Math.floor(Math.random() * blocks.length)]; 

    return block_shape;
}

function throwBlock() {

    var block = new Block();   

    var block_shape = pickRandomBlock();

    var random_column;

    while (last_column === random_column) random_column = pickRandomColumn(block_shape);

    last_column = random_column;           

    block.sprite = blocks_group.create(random_column, 0, block_shape.name);
    block.sprite.anchor.setTo(0, 0);

    block.moveDown();

}

var complete = function() {  
    console.log('complete!');
}

function create() {  

    blocks_group = game.add.group();

    throwBlock();

    setInterval(throwBlock, 200);
}

function update() {
}
