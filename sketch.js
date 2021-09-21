var gameState = "start";
var goal,homescreenBoy,goalkeeper
var gameOverImg, goalImg, goalkeeperImg, homescreenImg;
var runningVid;
var cloudsGroup, cloudImage;
var start,start1;

var score;
var gameOverImg,restartImg;


function preload(){

  //runningVid = createVideo("running player.mp4");
  
  cloudImage = loadImage("cloud.png");
  
  goalkeeperImg = loadImage("goalkeeper.png");
  goalImg = loadImage("goal.jpg");

  homescreenImg = loadImage("homescreen.png");
  
  restartImg = loadImage("restart.png");
  gameOverImg = loadImage("gameOver.png");

  start = loadImage("start.png");
 
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);

  goalkeeper = createSprite(displayWidth-250,250);
  goalkeeper.addImage(goalkeeperImg);

  goal = createSprite(displayWidth-200,200);
  goal.addImage(goalImg);

  start1 = createSprite(displayWidth/2-230, height-500,20,20);
  start1.addImage(start);
  start1.scale = 0.17;

  homescreenBoy = createSprite(displayWidth/2,displayHeight/2);
  homescreenBoy.addImage(homescreenImg)
 
  gameOver.scale = 0.5;
  restart.scale = 0.5;
  
  cloudsGroup = createGroup();
  
}

function draw() {
  
  background("#20ED54");
  
  
  if(gameState === "start"){

    background("#20ED54");

    gameOver.visible = false;
    restart.visible = false;
    goal.visible = false;
    goalkeeper.visible = false;
    
    
    //homescreenBoy = createSprite(displayWidth/2,displayHeight/2);
    //homescreenBoy.addImage(homescreenImg);
    homescreenBoy.visible = true;

    fill("black");
    textSize(25);
    text("PRESS THE START BUTTON TO PLAY THE GAME.",displayWidth/2-350,50);
    text("YOU CAN TAKE THE PENALTY BY PRESSING THE 'SPACE BAR KEY'.",displayWidth/2-400,100);
    text("PRESS THE 'UP ARROW KEY' TO TAKE THE PENALTY RUN-UP.",displayWidth/2-400,150);

    if(mousePressedOver(start1)){

      gameState = "play";
      start1.destroy();

      homescreenBoy.visible = false;
    
      
    }

  
  


  }
   /*else if (gameState === END) {
      gameOver.visible = true;
      restart.visible = true;
     

  
    cloudsGroup.setLifetimeEach(-1);
     cloudsGroup.setVelocityXEach(0);    
   }*/
  
 

  
  if(mousePressedOver(restart)) {
      reset();
    }


  drawSprites();
}

function reset(){
  gameState = "start";
  restart.visible = false;
  gameOver.visible = false;
 
  cloudsGroup.destroyEach();
  score = 0;
}





function spawnClouds() {

  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
  
    cloud.lifetime = 200;

    cloudsGroup.add(cloud);
  }
}

