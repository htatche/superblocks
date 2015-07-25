export default class Level {
    constructor(nLevel = 1, speedOptions) {
        this.defaultSpeed = speedOptions.defaultSpeed;
        this.speedFactor  = speedOptions.speedFactor;

        this.nLevel       = nLevel;
        this.lastScore    = 0;
    }

    speed() {
        return this.defaultSpeed - (this.nLevel * this.speedFactor);
    }

    music() {
        /* Music for current level */
    }

    background() {
        /* Background for current level */
    }

    up(lastScore) {
        this.lastScore = lastScore;

        return ++this.nLevel;
    }

    to(n) {
        this.nLevel = n;

        return this.nLevel;
    }
}
