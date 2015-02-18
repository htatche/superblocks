
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'tetris', { preload: preload, create: create, update: update });

var blocks, platforms, floor;

var block, block2;

function preload() {
     game.load.image('column', 'images/column_03.png');
     // game.load.image('ground', 'images/ground_03.png');
}

function create() {  

    game.physics.startSystem(Phaser.Physics.ARCADE);

    // game.physics.p2.setImpactEvents(true);

    // game.physics.p2.restitution = 1;

    // var platforms_collision_group = game.physics.p2.createCollisionGroup();

    // platforms = game.add.group();
    // platforms.enableBody = true;
    // platforms.physicsBodyType = Phaser.Physics.P2JS;

    // var ground = platforms.create(200, game.world.height-50, 'ground');
    // ground.body.setCollisionGroup(platforms_collision_group);

    // ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
  


    blocks = game.add.group();
    blocks.enableBody = true;
    blocks.physicsBodyType = Phaser.Physics.ARCADE;

    block = blocks.create(100, 100, 'column');

    block.body.collideWorldBounds = true;
    block.body.velocity.y=150;
    block.body.bounce.y = 0;

    block2 = blocks.create(100, 300, 'column');

    block2.body.collideWorldBounds = true;
    block2.body.velocity.y=150;    
    // block2.body.bounce.y = 0;

    // game.physics.arcade.collide(block, block2);

    // var blocks_collision_group = game.physics.p2.createCollisionGroup();

    // block.body.setCollisionGroup(blocks_collision_group);
    // block.body.collides([blocks_collision_group, platforms_collision_group]);

    // ground.body.collides([blocks_collision_group]);

    // ground.body.immovable = true;
    // ground.body.allowGravity = false;    
    // ground.body.bounce = false; 

    // block.body.allowGravity = false;    
    // block.body.bounce.y = false;     

    // game.physics.p2.updateBoundsCollisionGroup();  


    // for (var i = 0; i < 4; i++)
    // {
    //     var block = blocks.create(game.world.randomX, game.world.randomY, 'column');

    //     block.body.setCollisionGroup(blocks_collision_group);

    //     //  blocks will collide against themselves and the player
    //     //  If you don't set this they'll not collide with anything.
    //     //  The first parameter is either an array or a single collision group.
    //     block.body.collides([blocks_collision_group]);
    // }    



    // var image = game.add.sprite(100, 0, 'column');


    // block.body.bounce = 0;

   


}

function update() {
    game.physics.arcade.collide(block, block2);
}
