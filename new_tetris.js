var CELL_SIZE = 35;

var COLUMNS = 10,
    ROWS		= 20;

var HEIGHT    = CELL_SIZE * ROWS,
    WIDTH 		= CELL_SIZE * COLUMNS;

var game = new Phaser.Game(WIDTH,
													 HEIGHT,
                           Phaser.AUTO, 
                           'tetris',
                           { preload: preload, create: create, update: update });

var grid = [];

var shapes = [
	{type: 'column',   	blocks: [ [0,0], [0,1], [0,2] ],        xsize: 1, ysize: 3 * CELL_SIZE},
	{type: 'triangle',	blocks: [ [0,0], [1,0], [2,0], [1,1] ], xsize: 3, ysize: 2 * CELL_SIZE}
]

var nshape = 0;
var falling_shape = null;
// var flag = false;

var queue = [];

function initialize_grid() {
	for (var x=0; x < ROWS; ++x) {
		grid[x] = new Array(COLUMNS); 

		for (var y=0; y < COLUMNS; ++y) {
			grid[x][y] = null; //{busy: false, color: null};
		}		
	}
}

function create_shape(shape) {
	var blocks_group = game.add.group();
			blocks_group.details = shape;

	var blocks = shape.blocks;

	// Random column
	var random_x = randomNColumn(shape.xsize);

	for (var i=0; i < blocks.length; ++i) {
	    add_block(blocks_group, blocks[i], random_x); 
	}

	return blocks_group;
}

function add_block(blocks_group, block, random_x) {
	var x = block[0] * CELL_SIZE;
	var y = block[1] * CELL_SIZE;

	// Random column
	x = x + random_x;

	// We launch it from above the grid
	y = y - blocks_group.details.ysize;

  var block = blocks_group.create(x, y, 'block');

  return block;
}

function throw_shape(shape) {
	var dfd = new jQuery.Deferred();

	loop_move.call(shape, "down", dfd);

	return dfd.promise();
}

function loop_move(direction, dfd) {
	var parent = this;

	var collision = detect_collision.call(this, direction);

	if (!collision) {	
		queue.push(move.bind(parent, direction));
		game.time.events.add(100, loop_move.bind(parent, direction, dfd), this);
	} else {
		++nshape;
		dfd.resolve();
	}		

}

function move(direction) {
	var parent = this;
	var tween = game.add.tween(parent);

	var dfd_move = new jQuery.Deferred();

	var x = Math.round(parent.children[0].x);
	var next_position = getNextPosition.call(parent, direction);
	var previous_x = parent.x;
	var previous_y = parent.y;

  tween.to(
    next_position,
    1,
	  Phaser.Easing.Linear.None,
    true
  );

  tween.onComplete.add(
  	update_grid.bind(parent, previous_x, previous_y, "orange", dfd_move)
  , parent);	

	return dfd_move.promise();
}

function detect_collision(direction) {
	var last_row 		= ROWS - 1,
			last_column = COLUMNS - 1;

	var collision = false;
	var next_position = getNextPosition.call(this, direction);	

	for (var l=0; l < this.children.length; ++l) {
		var block = this.children[l];
		var next_axis = posToAxis(next_position.x + block.x, next_position.y + block.y);				


		// Walls collision
		if (next_axis[0] < 0 || next_axis[0] > last_column || next_axis[1] > last_row) {
			return collision = true;
		}						

		// Cancel detection when above the grid 
		if (next_axis[1] > 0) {
			// Blocks collision
			if (grid[next_axis[1]][next_axis[0]] != null && grid[next_axis[1]][next_axis[0]] != nshape) {
				return collision = true;
			}				
		}

	}
	return collision;
}

function getNextPosition (direction) {
	var position;

	switch(direction) {
		case "down":
			position = { x: this.x, y: this.y + CELL_SIZE };
			break;
		case "left":
			position = { x: this.x - CELL_SIZE, y: this.y };			
			break;
		case "right":
			position = { x: this.x + CELL_SIZE, y: this.y };						
			break;
	}

	return position;
}

function posToAxis(x, y) {
	var x = Math.round(x / CELL_SIZE),
			y = Math.round(y / CELL_SIZE);

	return [x,y];
}

function update_grid(previous_x, previous_y, block_color, dfd_move) {
	var previous_axis;
	var axis;

	for (var l=0; l < this.children.length; ++l) {
		var block = this.children[l];

		previous_axis = posToAxis(previous_x + block.x, previous_y + block.y);

		if (previous_axis[1] > 0) {
	    grid[previous_axis[1]][previous_axis[0]] = null; //{busy: false, color: null};
		}

	}

	for (var l=0; l < this.children.length; ++l) {
		var block = this.children[l];

		axis = posToAxis(this.x + block.x, this.y + block.y);				

		if (axis[1] > 0) {
    	grid[axis[1]][axis[0]] = nshape; //{busy: true, color: block_color};
		}

	}

	if (dfd_move) dfd_move.resolve();
}

function clear_row() {

}

function randomNColumn(block_shape_xsize) {
    var limit = COLUMNS - block_shape_xsize;
    var ncolumn = limit + 1;
    var position;

    while (ncolumn > limit || ncolumn == 0) {
    	ncolumn = Math.round(Math.random() * 10);
    }

    position = ncolumn * CELL_SIZE;

    return position;
}

function randomShape() {
    var shape = shapes[Math.floor(Math.random() * shapes.length)]; 

    return shape;
}

function game_loop() {
	var random_shape_type = randomShape();
	var shape = create_shape(random_shape_type);
	falling_shape = shape; 

	$.when( throw_shape(shape) ).then(
	  function() {
	    game_loop();
	  },
	  function() {
	  	game_loop();
	  }
  )	
}

function create() {  
	var graphics = game.add.graphics(0, 0);

	this.cursors = game.input.keyboard.createCursorKeys();
	initialize_grid();

	game_loop();
	flush_queue();
}

/* Flush the queue every 1 ms */
function flush_queue () {
	if (queue.length > 0) {
		$.when( queue[0].call() ).then(
			function() {
				queue.shift();
				flush_queue.call();
			}		
		);			
	} else {
		setTimeout(function() { flush_queue.call(); }, 1)
	}
}

function update() {
	var direction;

	if (this.cursors.left.justDown) {
		var collision = detect_collision.call(falling_shape, "left");
		if (!collision) {
			queue.push(move.bind(falling_shape, "left"));
		}
	}	else if (this.cursors.right.justDown) {
		var collision = detect_collision.call(falling_shape, "right");
		if (!collision) {
			queue.push(move.bind(falling_shape, "right"));
		}
	}			

}

function preload() {
	game.load.image('block', 'images/block_orange.png');
}
