let playerX;
let playerY;
let playerSpeed = 3;

let ghosts = [];

let spiritX = 0;
let spiritY = 0;
let spiritVisible = false;

let gameWon = false;

function setup() {
  createCanvas(600, 450);

  createPlayer();
  // Create three ghosts with different sizes and speeds
  ghosts = [
    {
      x: 100,
      y: 100,
      size: 35,
      speedX: random(-2, 2),
      speedY: random(-2, 2),
      color: [180, 100, 255]
    },
    {
      x: 300,
      y: 200,
      size: 55,
      speedX: random (-2, 2),
      speedY: random (-2, 2),
      color: [100, 220, 255]
    },
    {
      x: 450,
      y: 120,
      size: 40,
      speedX: random(-2, 2),
      speedY: random(-2, 2),
      color: [100, 255, 170]
    },
    ];
}
// Create the player
function createPlayer() {
  playerX = 70;
  playerY = 220; 
}
// Move the investigators with the keyboard
function movePlayer() {
  if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){
    playerX -= playerSpeed;
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    playerX += playerSpeed;
  }
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    playerY -= playerSpeed;
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    playerY += playerSpeed;
  }
  playerX = constrain(playerX, 35, width - 35);
  playerY = constrain(playerY, 40, height - 40);
}

// Drawn one investigator
function drawInvestigator(x, y, shirtColor) {
  fill(230, 190, 150);
  ellipse(x, y - 15, 18, 18);
fill(shirtColor);
  rect(x - 10, y - 5, 20, 28);
  fill(40);
  rect(x + 2, y + 22, 7, 14);
}
// Draw all three investigators
function drawPlayer() {
  drawInvestigator(
  playerX - 27,
  playerY + 25,
  [180, 50, 150]
);
drawInvestigator(
  playerX,
  playerY,
  [50, 100, 100]
  );
  
drawInvestigator(
  playerX +27,
  playerY + 25,
  [50, 100, 100]
);
}
// Move each ghost seperatley 
function moveObstacles(){
  
for (let i = 0; i < ghosts.length; i++) {
  ghosts[i].x += ghosts[i].speedX;
  ghosts[i].y += ghosts[i].speedY;
  
  
  if (ghosts[i].x > width + ghosts[i].size) {
  ghosts[i].x = -ghosts[i].size;
    }
  if (ghosts[i].x < -ghosts[i].size) {
    ghosts[i].x = width + ghosts[i].size;
    }
  
  if (ghosts[i].y > height + ghosts[i].size) {
    ghosts[i].y = -ghosts[i].size;
      }
   if (ghosts[i].y < -ghosts[i].size) {
    ghosts[i].y = height + ghosts[i].size;
     }
     }
}
// Draw the ghosts
function drawObstacles(){
  for (let i = 0; i < ghosts.length; i++) {
    fill(ghosts[i].color[0], ghosts[i].color[1], ghosts[i].color[2]);
    noStroke();
    ellipse(
      ghosts[i].x,
      ghosts[i].y,
      ghosts[i].size,
      ghosts[i].size * 1.3
      );
fill(255);
    ellipse(
      ghosts[i].x - 7,
      ghosts[i].y -5,
      6,
      8
    );
    ellipse(
      ghosts[i].x + 7,
      ghosts[i].y - 5,
      6,
      8
       );
  }
}
// Draw a spirit orb when the mouse is pressed
function mousePressed(){
  spiritX = mouseX;
  spiritY = mouseY;
  spiritVisible = true;
}
//Display the spirit orb
function drawSpiritOrb(){
  if (spiritVisible) {
    fill(100, 220, 255, 150);
    noStroke();
    ellipse(spiritX, spiritY,
           35, 35);
    fill(255);
    ellipse(spiritX, spiritY,
           12, 12);
  }
}
// Draw the game border
function drawBorder() {
  noFill();
  stroke(255);
  strokeWeight(4);
  rect(10, 10, width - 20, 
      height - 20);
}

// Draw the exit
function drawExit(){
  fill(30, 180, 70);
  noStroke();
  rect(width - 75, height / 2 -
      35, 50, 70);
  fill(255);
  textSize(14);
  textAlign(CENTER);
  text("EXIT", width - 50,
      height / 2 + 5);
}
// Check whether the investigators reached the exit

function checkWin() {
  if (
    playerX > width - 95 &&
    playerY > height / 2 - 45
    &&
    playerY < height / 2 + 45
  ){
    gameWon = true;
}
}
// Display the winning message
function showWinMessage() {
  if (gameWon) {
    fill(255, 230, 50);
    textSize(36);
    textAlign(CENTER);
    text("YOU WIN!", width / 2, 55);
  }
}
// Main game loop
function draw() {
  background(20, 15, 40);
  movePlayer();
  moveObstacles();
  drawBorder();
  drawExit();
  drawObstacles();
  drawPlayer();
  drawSpiritOrb();
  checkWin();
  showWinMessage();
}
  







  