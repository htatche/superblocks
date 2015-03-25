var CELL_SIZE = 35;

var HEIGHT    = CELL_SIZE * 20,
    WIDTH 		= CELL_SIZE * 10;

var game = new Phaser.Game(WIDTH,
													 HEIGHT,
                           Phaser.AUTO, 
                           'tetris',
                           { preload: preload, create: create, update: update });

var grid = [];
var shapes = [
	{type: 'column',   	blocks: [ [0,0], [0,1], [0,2] ]},
	{type: 'triangle',	blocks: [ [1,0], [0,1], [1,1], [2,1] ]}
]

function initialize_grid() {
	var n = HEIGHT * WIDTH;

	for (var i=0; i < n; ++i) {
	    grid[i] = {busy: false, color: null};
	}
}

function create_shape() {
	var blocks_group = game.add.group();
	var blocks = shapes[0].blocks;

	for (var i=0; i < blocks.length; ++i) {
	    add_block(blocks_group, blocks[i]); 
	}

	return blocks_group;

}

function add_block(blocks_group, block) {
	var x = block[0] * CELL_SIZE;
	var y = block[1] * CELL_SIZE;
	    // y = y - 105;

  var block = blocks_group.create(x, y, 'block');

  return block;
}

function throw_shape(shape) {
	var tween;

	tween = move.call(shape, "down", loop = true);
}

function move_to_floor(direction, loop) {
	var y = Math.round(this.y);

	if (loop && y < HEIGHT - 105) {
		setTimeout(move.bind(this, direction, loop=true), 500);
	}	
}

function move(direction, loop) {
	var tween = game.add.tween(this);
	var coords;

	switch(direction) {
		case "down":
			coords = { y: this.y + CELL_SIZE };
	}

  tween.to(
    coords,
    100,
	  Phaser.Easing.Linear.None,
    true
  );

  // Loop
	tween.onComplete.add(move_to_floor.bind(this, "down", loop=true), this);

  return tween;
}

function clear_row() {

}

function create() {  
	var graphics = game.add.graphics(0, 0);

	initialize_grid();

	var shape = create_shape();

	throw_shape(shape);
}

function update() {
}

function preload() {
     game.load.image('block', 'images/block_orange.png');
}
