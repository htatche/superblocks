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

    find(idx) {
        return this.indexOf(idx);
    }

    randomPick() {
        return this[Math.floor(Math.random() * this.length)];
    }

    contains(elm) {
        return this.indexOf(elm) !== -1;
    }

    mapTo(x) {
        var array = new ArrayMain();

        this.forEach((elm) => {
            array.add(elm[x]);
        });

        return array;
    }

    /**
     * Array comparison (http://stackoverflow.com/a/14853974/2048774)
     * @param  {[type]} array [description]
     * @return {[type]}       [description]
     */
    equals(array) {
        // if the other array is a falsy value, return
        if (!array) {
            return false;
        }

        // compare lengths - can save a lot of time
        if (this.length !== array.length) {
            return false;
        }

        for (var i = 0, l = this.length; i < l; i++) {
            // Check if we have nested arrays
            if (this[i] instanceof Array && array[i] instanceof Array) {
                // recurse into the nested arrays
                if (!this[i].equals(array[i])) {
                    return false;
                }
            }
            else if (this[i] !== array[i]) {
                // Warning - two different object instances
                // will never be equal: {x:20} != {x:20}
                return false;
            }
        }
        return true;
    }
}
