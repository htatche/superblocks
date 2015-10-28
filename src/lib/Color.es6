export default class Color {
    constructor(name) {
        this.name = name;
    }

    static loadTextures(game) {
        game.load.image('orange', 'images/block_orange.png');
        game.load.image('green', 'images/block_green.png');
        game.load.image('yellow', 'images/block_yellow.png');
        game.load.image('pink', 'images/block_pink.png');
        game.load.image('blue', 'images/block_blue.png');
        game.load.image('skyblue', 'images/block_skyblue.png');
        game.load.image('red', 'images/block_red.png');
    }

}
