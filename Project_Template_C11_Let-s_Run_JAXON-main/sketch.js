var path;
var pathimage;
var runner;
var runnerimage;
var leftwall;
var rightwall;

function preload(){
  pathimage=loadImage("path.png")
  runnerimage=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage("ground",pathimage);
  path.velocityY=4;
  path.scale=1.2;

  runner=createSprite(90,360)
  runner.addAnimation("moving",runnerimage)
  runner.scale=0.1

  leftwall=createSprite(33,193,20,450)
  leftwall.visible=false

  rightwall=createSprite(369,193,20,450)
  rightwall.visible=false

}

function draw() {
  background(0);
  
  runner.x=mouseX

  if(path.y>400){
    path.y=height/2;
  }

  runner.collide(leftwall);
  runner.collide(rightwall);

  drawSprites();
  
  textSize(15);
  fill('pink');
  text(mouseX+","+mouseY,mouseX,mouseY);
}
