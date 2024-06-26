class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speed = 0;
    this.acceleration = 0.2;
    this.maxspeed = 3;
    this.friction = 0.05;
    this.angle = 0;

    this.controls = new Controls();
  }

  //REMINDER: animation is in main.js
  update() { 
    this.#move();
  }

  #move(){
    if (this.controls.forward) {
      this.speed += this.acceleration;
    }
    if (this.controls.reverse) {
      this.speed -= this.acceleration;
    }
    if(this.speed > this.maxspeed) {
      this.speed = this.maxspeed;
    }
    if(this.speed <- this.maxspeed / 2 ) {
      this.speed =- this.maxspeed / 2;
    }

    if(this.speed > 0){
      this.speed -= this.friction;
    }
    if(this.speed < 0){  //NOTE: means the car is in reverse 
      this.speed += this.friction; //NOTE: will make y value positive making the car stop
    }
    if(Math.abs(this.speed) < this.friction){
      this.speed = 0;
    }

    if(this.speed != 0) {
      const flip = this.speed > 0?1:-1; 
      if(this.controls.left){
        this.angle += 0.03 * flip;
      }
      if(this.controls.right){
        this.angle -= 0.03 * flip;
      }
    }

    this.x-= Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;
    // this.y -= this.speed;
  }

  draw(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(-this.angle);
    context.beginPath();
    context.rect(
      - this.width / 2,
      - this.width / 2,
      this.width,
      this.height
    );
    context.fill();
    context.restore();
  }
}
