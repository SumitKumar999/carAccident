var wall, Zenia, Tourus, Cyclap, wall2, wall3;

function setup() {
  createCanvas(800,400);
  wall = createSprite(750, 100, 30, 100);
  wall2 = createSprite(750, 220, 30, 100);
  wall3 = createSprite(750, 340, 30, 100);
  Zenia = createSprite(50,100,20,20);
  Tourus = createSprite(50, 220, 20, 20);
  Cyclap = createSprite(50,340,20,20);
  Zenia.shapeColor = "green"
  Tourus.shapeColor = "white"
  Cyclap.shapeColor = "skyblue"
}

function draw() {
  background("black"); 
  Zenia.velocityX = 60;
  Tourus.velocityX = 50;
  Cyclap.velocityX = 45;


  if(Zenia.x-wall.x < Zenia.width/2 + wall.width/2 && wall.x-Zenia.x < Zenia.width/2 + wall.width/2){
    Zenia.shapeColor = "red"
    Zenia.velocityX = 0;
  }

  if(Tourus.x-wall2.x < Tourus.width/2 + wall2.width/2 && wall2.x-Tourus.x < Tourus.width/2 + wall2.width/2){
    Tourus.shapeColor = "orange"
    Tourus.velocityX = 0;
  }

  if(Cyclap.x-wall3.x < Cyclap.width/2 + wall3.width/2 && wall3.x-Cyclap.x < Cyclap.width/2 + wall3.width/2){
    Cyclap.shapeColor = "brown"
    Cyclap.velocityX = 0;
  }

  drawSprites();
}