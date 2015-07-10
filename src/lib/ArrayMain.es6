export default class ArrayMain extends Array {
    constructor() {
        super();
    }

    get first()                { return this[0]; }
    get last()                 { return this.slice(-1)[0]; }
    get isEmpty()              { return this.length === 0; }

    add(block) {
        this.push(block);

        return this.last;
    }

    randomPick() {
        return this[Math.floor(Math.random() * this.length)];
    }
}
