export default class ArrayBlocks extends Array {
    constructor() {
        super();
    }

    add(block) {
        this.push(block);

        return this.last();
    }

    last() {
        return this.slice(-1)[0];
    }
}
