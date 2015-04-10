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
	// {type: 'block',   	blocks: [ [0,0] ],        							xsize: 1, ysize: 1 * CELL_SIZE}
	{type: 'triangle',	blocks: [ [0,1], [1,1], [2,1], [1,0] ], xsize: 3, ysize: 2 * CELL_SIZE},
	{type: 'cube',			blocks: [ [0,0], [0,1], [1,0], [1,1] ], xsize: 2, ysize: 2 * CELL_SIZE},
	{type: 'snake',			blocks: [ [0,0], [1,0], [1,1], [2,1] ], xsize: 4, ysize: 2 * CELL_SIZE},
]

var block_colors = ['orange', 'yellow', 'green', 'pink'];

var nshape = 0;
var falling_shape = null;
var thrown_shapes = [];

var queue = [];

var stop_throwing_shapes = false;

function nshapes_grid (argument) {
	var ngrid = [];

	for (var x=0; x < ROWS; ++x) {
		ngrid[x] = new Array(COLUMNS); 

		for (var y=0; y < COLUMNS; ++y) {
			if (grid[x][y] != null) {
				ngrid[x][y] = grid[x][y].nshape; 
			} else {
				ngrid[x][y] = null;
			}
		}		
	}

	// console.table(ngrid);
}

function initialize_grid() {
	for (var x=0; x < ROWS; ++x) {
		grid[x] = new Array(COLUMNS); 

		for (var y=0; y < COLUMNS; ++y) {
			grid[x][y] = null; 
		}		
	}
}

function create_shape(shape) {
	var blocks_group = game.add.group();
			blocks_group.details = shape;

	var blocks = shape.blocks;

	// Random column
	var random_x = randomNColumn(shape.xsize);

	// Random color (color)
	var color = random_color();

	for (var i=0; i < blocks.length; ++i) {
	    add_block(blocks_group, blocks[i], random_x, color); 
	}

	return blocks_group;
}

function transform_shape(shape) {

}

function random_color (argument) {
	var color = block_colors[Math.floor(Math.random() * block_colors.length)]; 

	return color;
}

function add_block(blocks_group, block, random_x, color) {
	var x = block[0] * CELL_SIZE;
	var y = block[1] * CELL_SIZE;

	// Random column
	x = x + random_x;

	// We launch it from above the grid
	y = y - blocks_group.details.ysize;

  var block = blocks_group.create(x, y, color);

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
		game.time.events.add(150, loop_move.bind(parent, direction, dfd), this);
	} else {

		if (bottom_row_is_completed()) {
			stop_throwing_shapes = true;
		}

		// nshapes_grid();
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
  	update_grid.bind(parent, previous_x, previous_y, dfd_move)
  , parent);	

	return dfd_move.promise();
}

function update_grid(previous_x, previous_y, dfd_move) {
	var previous_axis;
	var axis;

	for (var l=0; l < this.children.length; ++l) {
		var block = this.children[l];

		previous_axis = posToAxis(previous_x + block.x, previous_y + block.y);

		if (previous_axis[1] > 0) {
	    grid[previous_axis[1]][previous_axis[0]] = null; 
		}

	}

	for (var l=0; l < this.children.length; ++l) {
		var block = this.children[l];

		axis = posToAxis(this.x + block.x, this.y + block.y);				

		// If the shape is not above the grid
		if (axis[1] > 0) {
    	console.log("updating nshape " + this.nshape + "to x:" + axis[1] + " y:" + axis[0]);
    	grid[axis[1]][axis[0]] = {block: this.children[l], nshape: this.nshape};
		}			

	}

	if (dfd_move) dfd_move.resolve();
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
			if (grid[next_axis[1]][next_axis[0]] != null && grid[next_axis[1]][next_axis[0]].nshape != nshape) {
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

	if (!stop_throwing_shapes) { 
		var random_shape_type = randomShape();
		var shape = create_shape(random_shape_type);

		shape.nshape = nshape;

		thrown_shapes.push(shape);	
		falling_shape = shape; 

		$.when( throw_shape(shape) ).then(
		  function() {

				// Save the nrow where the last shape has collapsed
				var axis = posToAxis(falling_shape.x, falling_shape.y);
				falling_shape.last_nrow = axis[1];

		    game_loop();

		  }
	  )	

	} else {
		setTimeout(function() { game_loop(); }, 1);
	}

}

function create() {  
	var graphics = game.add.graphics(0, 0);

	this.cursors = game.input.keyboard.createCursorKeys();
	initialize_grid();

	game_loop();
	flush_queue();
}

/* Flush the queue every 1 ms or after movement is completed */
function flush_queue () {
	if (queue.length > 0) {
		$.when( queue[0].call() ).then(
			function() {
				queue.shift();
				flush_queue.call();
			}		
		);			
	} else {
		var nrow = bottom_row_is_completed();

		if (stop_throwing_shapes && nrow) {
			clear_completed_row(nrow);
		} else {
			stop_throwing_shapes = false;
		}
		setTimeout(function() { flush_queue.call(); }, 1)
	}
}

function bottom_row_is_completed (argument) {
	// var bottom_row = 19;
	var nrow;

	for (var i=0; i<ROWS; ++i) {
		var row_is_completed = true;

		for (var j=0; j<COLUMNS; ++j) {
			var cell  = grid[i][j];

			if (cell == null) {
				row_is_completed = false;
			}
		}
		if (row_is_completed) {
			nrow = i;
			return nrow;
		}
	}

	return row_is_completed;
}

/* Clear bottom row when completed */
function clear_completed_row (nrow) {
	var bottom_row = nrow;

	// Destroy the blocks at the bottom
	for (var i=0; i<COLUMNS; ++i) {
		var cell  = grid[bottom_row][i];
		
		cell.block.parent.remove(cell.block, destroy=true);

		grid[bottom_row][i] = null;
	}

	move_all_blocks_down(nrow);
}

/* After clearing one row, we move all the blocks
   of rows above one level below */
function move_all_blocks_down (nrow) {

	var shapes_moved_down = [];
	var above_row = nrow - 1;

	for (var j=above_row; j>0; --j) {

		for (var i=0; i<COLUMNS; ++i) {

			// If cell is not null
			if (grid[j][i]) {

				var shape = grid[j][i].block.parent;

				if (shape.children.length > 0) {

					var nshape = grid[j][i].nshape;

					if (shapes_moved_down.indexOf(nshape) == -1) {
						queue.push(move.bind(shape, "down"));
						shapes_moved_down.push(nshape);					
					} 

				}

			}

		}

	}

	shapes_moved_down = [];

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
	game.load.image('orange', 'images/block_orange.png');
	game.load.image('green', 'images/block_green.png');
	game.load.image('yellow', 'images/block_yellow.png');
	game.load.image('pink', 'images/block_pink.png');
}
