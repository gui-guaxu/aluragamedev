class Animation {
  constructor(matrix, image, x, yAdded,width, height, spriteWidth, spriteHeight) {
    this.matrix = matrix;
    this.image = image;
    this.width = width;
    this.height = height;
    this.x = x;
    this.yAdded = yAdded; 
    this.y = canvas.height - this.height - this.yAdded;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;

    this.frame = 0;
  }

  show() {
    image(this.image, this.x, this.y, this.width, this.height, this.matrix[this.frame][0], this.matrix[this.frame][1], this.spriteWidth, this.spriteHeight);

    this.animate();
  }

  animate() {
    this.frame++;

    if (this.frame == this.matrix.length - 1) {
      this.frame = 0;
    }
  }
}