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

var block_types = ['column', 'triangle'];

var blocks = [
    {name: 'column',   xsize: 3, ysize: 1},
    {name: 'triangle', xsize: 2, ysize: 3}
]

var last_column;

// Block starts in row 0
// moveDown() moves it one row below, if there is no
// collision, we execute again this function

var Block = function() {
    this.row      = 0,
    this.column   = 0
    // this.sprite   = null
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
        true // No autostart
    );

    parent.tween.onComplete.add(this.moveDown, this);

    // tween = game.add.tween(block).to( { y: FLOOR }, 2400, Phaser.Easing.Linear.None, true);

    // debugger;
    // setTimeout(this.moveDown(), 5);
    // this.moveDown()

    // debugger;
}

Block.prototype.detectCollision = function() {
    // this.moveDown();
    // return function(){};
}

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

    var block = new Block();

    var random_column;

    while (last_column === random_column) random_column = pickRandomColumn();

    last_column = random_column;          

    block.sprite = blocks.create(random_column, 0, pickRandomBlock());
    block.sprite.anchor.setTo(0, 0);

    block.moveDown();

    // block.moveDown();
}

var complete = function() {  
    console.log('complete!');
}

function create() {  

    blocks = game.add.group();

    throwBlock();

    // setInterval(throwBlock, 500);
}

function update() {
}
