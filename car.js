class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.controls = new this.controls();
    }


    draw(context){
        context.beginPath();
        context.rect(
            this.x-this.width / 2,
            this.y-this.width / 2,
            this.width,
            this.height
        );
        ctx.fill();
    }

     
}