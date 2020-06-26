//Matrices
let characterMatrixGen = new Matrix(4, 3, 16, 220, 270);
let dropyMatrixGen = new Matrix(7, 4, 28, 105, 104);
let airDropyMatrixGen = new Matrix(6, 3, 16, 200, 150);
let trollMatrixGen = new Matrix(6, 5, 28, 480, 480);
let wolfMatrixGen = new Matrix(6, 5, 28, 220, 220);

//Matrices.create();
let characterMatrix = characterMatrixGen.create();
let dropyMatrix = dropyMatrixGen.create();
let airDropyMatrix = airDropyMatrixGen.create();
let trollMatrix = trollMatrixGen.create();
let wolfMatrix = wolfMatrixGen.create();

function setup() {

  //Scenario
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImg, 3);
  bushes = new Scenario(bushesImg, 2);

  // Character
  character = new Character(characterMatrix, characterImg, 0, 15, 110, 135, 220, 270);

  // Enemies
  // constructor(matrix, image, x, yAdded, width, height, spriteWidth, spriteHeight, speed, delay)
  const dropy = new Enemy(dropyMatrix, dropyImg, width, 20, 75, 75, 104, 100, 10, 100);
  const airDropy = new Enemy(airDropyMatrix, airDropyImg, width - 52, 200, 100, 75, 200, 150, 7, 100);
  const troll = new Enemy(trollMatrix, trollImg, width, 5, 200, 200, 400, 400, 7, 100);
  const wolf = new Enemy(wolfMatrix, wolfImg, width, 5, 110, 110, 220, 220, 9, 100);

  enemies.push(dropy);
  enemies.push(airDropy);
  enemies.push(troll);
  enemies.push(wolf);

  // Score
  score = new Score();

  // Soundtrack  
  soundtrack.setVolume(0.2)
  // soundtrack.loop();

  // FrameRate
  frameRate(40);

}

function draw() {

  scenario.show();
  scenario.move();

  character.show();
  character.toggleGravity();


  const enemy = enemies[currentEnemy];
  const visibleEnemy = enemy.x < -enemy.width;

  enemy.show();
  enemy.move();

  if (visibleEnemy) {
    currentEnemy++;
    if (currentEnemy > (enemies.length - 1)) {
      currentEnemy = 0;
    }
    enemy.speed = parseInt(random(7,30));
  }

  if (character.collideOn(enemy)) {
    image(gameOverImg, (width / 2) - 200, height / 2);
    // noLoop();
  }

  bushes.show();
  bushes.move();

  score.write();
  score.addPoint();

}

function keyPressed() {
  if (key === 'ArrowUp') {
    character.jump();
    jumpSound.setVolume(0.015);
    jumpSound.play();
  }
}