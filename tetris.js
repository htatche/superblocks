// 
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'tetris', { preload: preload, create: create, update: update });

var blocks, platforms, floor;

var block, block2;

function throwBlock() {
        var block = blocks.create(game.world.randomX, 0, 'column');
        var block2 = blocks.create(game.world.randomX, 0, 'triangle');

        // block.body.setCollisionGroup(blocks_collision_group);
        // block.body.collides([blocks_collision_group]);

        block.body.collideWorldBounds = true;
        block.body.velocity.y=150;
        block.body.bounce.y = 0;    

        block2.body.collideWorldBounds = true;
        block2.body.velocity.y=150;
        block2.body.bounce.y = 0;              
}

function preload() {
     game.load.image('column', 'images/column_03.png');
     game.load.image('triangle', 'images/column_06.png');
}

function create() {  

    game.physics.startSystem(Phaser.Physics.ARCADE);

    blocks = game.add.group();
    blocks.enableBody = true;
    blocks.physicsBodyType = Phaser.Physics.ARCADE;

    // block = blocks.create(100, 100, 'column');

    // block.body.collideWorldBounds = true;
    // block.body.velocity.y=150;
    // block.body.bounce.y = 0;

    // block2 = blocks.create(100, 300, 'column');

    // block2.body.collideWorldBounds = true;
    // block2.body.velocity.y=150;    


    setInterval(throwBlock, 2000);

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
    game.physics.arcade.collide(blocks);
}
