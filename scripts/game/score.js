class Score {
  constructor() {
    this.score = 0;
  }
  
  write() {
    textAlign(RIGHT);
    textSize (50);
    fill('#fff');
    text(parseInt(this.score), width - 30, 50);
  }
  
  addPoint() {
    this.score = this.score + 0.2;
  }
}