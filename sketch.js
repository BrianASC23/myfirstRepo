let XPosBall = 250;
let YPosBall = 250;
let xSpeed;
let ySpeed;
let xDirection = 1;
let yDirection = 1;

let state = "1";

let score = 0
let brickArray = []
let randNum;


function setup() {
   createCanvas(500, 500);
   background(0);
   xSpeed = random(-5, 5);
   ySpeed = random(-5, 5);
   rectMode(CENTER);
}

// Game State Changes to STATE 2 if User clicks on the "START" Square in STATE 1
function mouseClicked(){
  if(mouseX > 150 && mouseX < 350 && mouseY < 350 && mouseY > 50){
    state = "2";
  } 
}


function draw() {
  //State --> START
  if(state == "1"){
    background(0);
    rect(250, 250, 100, 100);
    textSize(30);
    text("START", 200, 260);

    

  }

  else if (state == "2"){
    background(0);


    fill(0, 255, 0);
    ellipse(XPosBall, YPosBall, 25, 25);

    textSize(15);
    text("Score: " + score, 50, 50);

    //Movement of the Ball
    XPosBall += xSpeed * xDirection;
    YPosBall += ySpeed * yDirection;
   
    //If ball touches the border, bounces back.
    if(XPosBall > 487.5 || XPosBall < 12.5){
      xDirection *= -1;
    
    }
    if(YPosBall < 12.5){
      yDirection *= -1;
    }

    //Paddle
    fill(0, 0, 255);
    rect(mouseX, 475, 50, 5);

   
    //If Ball touches Paddle, bounces back, changes yDirection, speeds up, and score increases.
    if(YPosBall > 462.5 && XPosBall > mouseX - 25 && XPosBall < mouseX + 25){
     yDirection *= -1;
     ySpeed -= yDirection;
     xSpeed -= xDirection;
     score++;
    }

    //If Ball goes past the paddle and to the void, spawn back.
    if(YPosBall > 512.5) {
     XPosBall = 250;
     YPosBall = 250;
     score -= 1;
    }
    
    //If Score < 0 then change game state to STATE 3
    if(score < 0){
      state = "3";
    }

    //If Score = 10 then change game state to STATE 4
    if(score == 10){
      state = "4";
    }

    }

  // GAME STATE 3 --> LOSE
  else if(state == "3"){
      background(0);
      fill(255, 255, 255);
      rect(250, 250, 200, 100);
      fill(255, 0, 0);
      textSize(30);
      text("YOU LOSE!", 167.5, 260);
   
   }

  // GAME STATE 4 --> WIN
  else if(state == "4"){
      background(0);
      fill(255, 255, 255);
      rect(250, 250, 200, 100);
      fill(255, 0, 0);
      textSize(30);
      text("YOU WIN!!!", 167.5, 260);
  }

}