class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.controls = new Controls();
  }

  update() {
    if (this.controls.forward) {
      this.y -= 2;
    }
    if (this.controls.reverse) {
      this.y += 2;
    }
    if (this.controls.left) {
      this.x -= 2;
    }
    if (this.controls.right) {
      this.x += 2;
    }
  }

  draw(context) {
    context.beginPath();
    context.rect(
      this.x - this.width / 2,
      this.y - this.width / 2,
      this.width,
      this.height
    );
    ctx.fill();
  }
}
