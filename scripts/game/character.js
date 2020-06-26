class Character extends Animation {
  constructor(matrix, image, x, yAdded, width, height, spriteWidth, spriteHeight) {
    super(matrix, image, x, yAdded, width, height, spriteWidth, spriteHeight)

    this.yAdded = yAdded
    this.yBase = canvas.height - this.height - this.yAdded;
    this.y = this.yBase;
    this.jumpSpeed = 0;
    this.gravity = 2;
    this.jumpHeight = -30
    this.jumps = 0;
  }

  jump() {
    if (this.jumps < 2) {

      this.jumpSpeed = this.jumpHeight;
      this.jumps++
    }
  }

  toggleGravity() {
    this.y = this.y + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravity;

    if (this.y >= this.yBase) {
      this.y = this.yBase;
      this.jumpSpeed = 0;
      this.jumps = 0;
    }
  }

  collideOn(enemy) {
    const precision = 0.7;

    noFill();
    circle((this.x + this.width)/2,
      (this.y + (this.height/2)),
      this.width)
    circle((enemy.x + (enemy.width/2)),
      (enemy.y + (enemy.height/2)),
      enemy.width * precision);
    
    const collision = collideCircleCircle(
      (this.x + this.width)/2,
      (this.y + (this.height/2)),
      this.width,
      (enemy.x + (enemy.width/2)),
      (enemy.y + (enemy.height/2)),
      enemy.width * precision
    )
    return collision;

  }
}