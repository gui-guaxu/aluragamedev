class Enemy extends Animation {
  constructor(matrix, image, x, yAdded, width, height, spriteWidth, spriteHeight, speed, delay) {
    super(matrix, image, x, yAdded, width, height, spriteWidth, spriteHeight)
    
    this.speed = speed;
    this.delay = delay;
    this.x = canvas.width + this.delay;
  }
  
  move(){
    this.x = this.x - this.speed;
    
    if (this.x < -this.width - this.delay) {
      this.x = width;
    }
  }
}