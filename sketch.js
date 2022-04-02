var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  orangeLeafimg=loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);

rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprites = Math.round(random(1,2));

  if(frameCount% 80 ==0){
    if(select_sprites==1){
      createApples()
    }
    else{
      createleaves()
    }
  }
  
  
  drawSprites();
}
function createApples(){
  apple= createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg)
  apple.velocityY=2
  apple.scale=.1
  apple.lifetime=120
}
function createleaves(){
  leaf= createSprite(random(50,350),40,10,10);
  leaf.addImage(orangeLeafimg)
  leaf.velocityY=2
  leaf.scale=.1
  leaf.lifetime=120
}

