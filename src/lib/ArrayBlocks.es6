export default class ArrayBlocks extends Array {
    constructor() {
        super();
    }

    add(block) {
        return this.push(block);
    }

    last() {
        return this.slice(-1)[0];
    }

    findByColor() {

    }

    findByTexture() {

    }
}
