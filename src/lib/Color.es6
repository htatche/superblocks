export default class Color {
    constructor(name) {
        this.name = name;
    }

    static loadTextures(game) {
        game.load.image('orange', '../images/block_orange.png');
        game.load.image('green', './images/block_green.png');
        game.load.image('yellow', '../../images/block_yellow.png');
        game.load.image('pink', '../../images/block_pink.png');
    }

}
