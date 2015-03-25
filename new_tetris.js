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
	var tween;

	var dfd = new jQuery.Deferred();

	tween = move_to_floor.call(shape, "down", loop = true, dfd);

	return dfd.promise();
}

function move_to_floor(direction, loop, dfd) {
	var y = Math.round(this.y);

	var collision = detect_collision.call(this, direction);

	if (loop && y < HEIGHT && !collision) {
		
		setTimeout(loop_move.bind(this, direction, loop, dfd), 500);

	} else {
		dfd.resolve();
	}	

}

function loop_move(direction, loop, dfd) {
	
	var tween;
	var previous_x = this.x;
	var previous_y = this.y;

	tween = move.call(this, direction, loop=true, dfd);

  tween.onComplete.add(
  	update_grid.bind(this, previous_x, previous_y, "orange", dfd)
  , this);		

  // Loop
  if (loop) {
  	tween.onComplete.add(move_to_floor.bind(this, direction, loop=true, dfd), this);	
  }	

}

function detect_collision(direction) {
	var collision = false;
	var next_position = getNextPosition.call(this, direction);	

	for (var i=0; i < COLUMNS; ++i) {
		for (var j=0; j < ROWS; ++j) {

			for (var l=0; l < this.children.length; ++l) {
				var block = this.children[l];
				var next_axis = posToAxis(next_position.x + block.x, next_position.y + block.y);				

				if (i == next_axis[0] && j == next_axis[1]) {
					if (grid[j][i] != null && grid[j][i] != nshape) {
						return collision = true;
					}
				}				

			}
		}		
	}	

	return collision;
}

function move(direction, loop, dfd) {
	var tween = game.add.tween(this);
	var next_position = getNextPosition.call(this, direction);

	// tweenMenuShrink.chain(tweenFadeIn);	

  tween.to(
    next_position,
    100,
	  Phaser.Easing.Linear.None,
    true
  );

  return tween;
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

function update_grid(previous_x, previous_y, block_color, dfd) {
	var previous_axis;
	var axis;
	var x_transition = this.x - previous_x;
	var y_transition = this.y - previous_y;

	for (var i=0; i < COLUMNS; ++i) {
		for (var j=0; j < ROWS; ++j) {

			for (var l=0; l < this.children.length; ++l) {
				var block = this.children[l];

				previous_axis = posToAxis(previous_x + block.x, previous_y + block.y);
				axis 					= posToAxis(this.x + block.x, this.y + block.y);				

				if (i == previous_axis[0] && j == previous_axis[1]) {
			    grid[j][i] = null; //{busy: false, color: null};
				}	

			}

			for (var l=0; l < this.children.length; ++l) {
				var block = this.children[l];

				previous_axis = posToAxis(previous_x + block.x, previous_y + block.y);
				axis 					= posToAxis(this.x + block.x, this.y + block.y);				

				if (i == axis[0] && j == axis[1]) {
			    grid[j][i] = nshape; //{busy: true, color: block_color};
				}				

			}

		}		
	}

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
	  	++nshape;
	    game_loop();
	  },
	  function() {
	  	++nshape;
	  	game_loop();
	  }
  )	
}

function create() {  
	var graphics = game.add.graphics(0, 0);

	this.cursors = game.input.keyboard.createCursorKeys();
	initialize_grid();

	game_loop();
}

function update() {
	if (this.cursors.left.justDown) {
		move.call(falling_shape, "left", loop=false);
	}	else if (this.cursors.right.isDown) {
		move.call(falling_shape, "right", loop=false);
	}	
}

function preload() {
     game.load.image('block', 'images/block_orange.png');
}
