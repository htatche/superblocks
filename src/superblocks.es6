/*global document Phaser*/

// import Grid from './lib/Grid.es6';
import Canvas from './lib/Canvas.es6';
// var canvas = new Canvas(5, 5);

// import Array2D from './lib/Array2D.es6';

// var array2D = new Array2D(5, 5);

2 + 2;
2 + 2;
console.log('allright');

// var HEIGHT = 350,
//     WIDTH = 300;

// var group, game;

// function rotate() {
//   game.add.tween(group).to(
//     { angle: group.angle += 90 },
//     10,
//     Phaser.Easing.Linear.None,
//     true
//   );
// }

// function down() {
//   var tween = game.add.tween(group);

//   tween.to(
//     {y: group.y + 35},
//     1,
//     Phaser.Easing.Linear.None,
//     true
//   );

// }

// function create() {
//     // elm = document.getElementById('position');
//     var graphics = game.add.graphics();
//     this.cursors = game.input.keyboard.createCursorKeys();

//     group = game.add.group();

//     group.x = 35 + 35 / 2 + 35;
//     group.y = 35 + 35 / 2 + 35;

//     group.pivot.x = 35;
//     group.pivot.y = 35;

//     var sprite = group.create(0, 35, 'orange');
//     sprite.anchor.setTo(0.5, 0.5);

//     var sprite2 = group.create(35, 35, 'orange');
//     sprite2.anchor.setTo(0.5, 0.5);

//     var sprite3 = group.create(70, 35, 'orange');
//     sprite3.anchor.setTo(0.5, 0.5);

//     var sprite4 = group.create(35, 0, 'orange');
//     sprite4.anchor.setTo(0.5, 0.5);

//     // group.x = 35 + 35*0.5 + 70; //(35 + 35 * anchor + group pivot)
//     // group.y = 35 + 35*0.5;

//     // group.pivot.x = 35;
//     // group.pivot.y = 0;

//     // var sprite = group.create(0, 0, 'orange');
//     // sprite.anchor.setTo(0.5,0.5);

//     // var sprite2 = group.create(35, 0, 'orange');
//     // sprite2.anchor.setTo(0.5,0.5);

//     // var sprite2 = group.create(70, 0, 'orange');
//     // sprite2.anchor.setTo(0.5,0.5);

//     // var sprite2 = group.create(105, 0, 'orange');
//     // sprite2.anchor.setTo(0.5,0.5);

//     graphics.lineStyle(1, 0x00ff00, 1);
//     graphics.moveTo(0, 35);
//     graphics.lineTo(300, 35);

//     graphics.lineStyle(1, 0x00ff00, 1);
//     graphics.moveTo(0, 70);
//     graphics.lineTo(300, 70);

//     graphics.lineStyle(1, 0x00ff00, 1);
//     graphics.moveTo(35, 0);
//     graphics.lineTo(35, 300);

//     graphics.lineStyle(1, 0x00ff00, 1);
//     graphics.moveTo(70, 0);
//     graphics.lineTo(70, 300);
// }

// function update() {
//     var direction = null;

//     if (this.cursors.up.justDown) {
//         direction = 'up';
//     } else if (this.cursors.down.justDown) {
//         direction = 'down';
//     } else if (this.cursors.left.justDown) {
//         direction = 'left';
//     } else if (this.cursors.right.justDown) {
//         direction = 'right';
//     }

//   if (direction === 'up') {
//     rotate();
//   }

//   if (direction === 'down') {
//     down();
//   }

//   // elm.innerHTML = 'Position is ' + group.x + ',' + group.y;

// }

// function preload() {
//   game.load.image('orange', 'images/block_orange.png');
//   game.load.image('green', 'images/block_green.png');
//   game.load.image('yellow', 'images/block_yellow.png');
//   game.load.image('pink', 'images/block_pink.png');
// }

// function render() {
// }

// game = new Phaser.Game(
//     WIDTH,
//     HEIGHT,
//     Phaser.AUTO,
//     'tetris',
//     { preload: preload, create: create, update: update, render: render }
// );
