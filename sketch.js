const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var playerP, playerC, playerPB, playerCB, playerPBI, playerCBI, playerBatI1, playerBatI2, CompBatI1, CompBatI2;

var ball, ballI;

function preload(){
  playerPBI=loadImage("IMG/Player.png");
  playerCBI=loadImage("IMG/Comp.png");
  playerBatI1=loadImage("IMG/BatPL.png");
  playerBatI2=loadImage("IMG/BatPR.png");
  CompBatI1=loadImage("IMG/BatCL.png");
  CompBatI2=loadImage("IMG/BatCR.png");
  ballI=loadImage("IMG/Ball.png");

}

function setup() {

  createCanvas(1400, 1200);
  engine = Engine.create();
  world = engine.world;

  //COMPUTER
  playerCl = createSprite(535, 114, 20, 20);
  playerCl.addImage(CompBatI1);
  playerCr = createSprite(764, 113, 20, 20);
  playerCr.addImage(CompBatI2);
  playerCl.scale = 0.3
  playerCr.scale = 0.3
  playerCB = createSprite(650, 70, 150, 20);
  playerCB.addImage(playerCBI);
  playerCB.scale = 0.33;

  //PLAYER
  playerPl = createSprite(535, 515, 20, 20);
  playerPl.addImage(playerBatI1);
  playerPr = createSprite(764, 518, 20, 20);
  playerPr.addImage(playerBatI2);
  playerPl.scale = 0.3
  playerPr.scale = 0.3
  playerPB = createSprite(650, 560, 20, 20);
  playerPB.addImage(playerPBI);
  playerPB.scale = 0.5;

  ball=createSprite(650, 300, 20, 20);
  ball.addImage(ballI);
  ball.scale = 0.3;

  
  line(0, 650, 1200,650);
  strokeWeight(10);
  
}

function draw() {
  background("Green");
  Engine.update(engine);
  
  ControlPL();
  
  drawSprites();
}
function ControlPL(){
  if (keyCode===LEFT_ARROW) {
    playerPB.velocityX = -10;
  }
  if (keyCode===RIGHT_ARROW) {
    playerPB.velocityX = 10;
  }
  if (keyCode===LEFT_ARROW) {
    playerPl.velocityX = -10;
    playerPr.velocityX = -10;
  }
  if (keyCode===RIGHT_ARROW) {
    playerPl.velocityX = 10;
    playerPr.velocityX = 10;
  }
}