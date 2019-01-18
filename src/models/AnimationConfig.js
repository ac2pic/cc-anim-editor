class AnimationConfig {
    constructor() {
        this.name = "";
        this.time = 0.01;
        this.repeat = false;
        this.frames = [];
        this.flipX = [];
        this.tileOffsets = [];
        this.sheet = "";
        this.dirs = 8;
        this.offset = {
            x : 0,
            y : 0,
            z : 0
        };
    }
};