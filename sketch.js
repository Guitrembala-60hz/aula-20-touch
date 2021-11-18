function setup() {
  createCanvas(1400,1400);
  retFixo = createSprite(200,200,50,80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(1200,200,80,30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;

  retFixo.velocityX = 4;
  retFixo.velocityY = 3;
  retMovendo.velocityX = -5;

  obj1 = createSprite(100,100,50,50);
  obj1.shapeColor = "green";
  obj2 = createSprite(200,100,50,50);
  obj2.shapeColor = "green";
  obj3 = createSprite(300,100,50,50);
  obj3.shapeColor = "green";
  obj4 = createSprite(400,100,50,50);
  obj4.shapeColor = "green";
  

}

function draw() {
  background(255,255,255); 
  
  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;

  bounceOff(retMovendo,retFixo);

  drawSprites();

  if(isTouching(retMovendo,obj2)) {
    retFixo.velocityX = 0;
    retFixo.velocityY = 0;
    obj1.shapeColor = "red";
    obj2.shapeColor = "purple";
    obj3.shapeColor = "pink";
    obj4.shapeColor = "black";
  }
  
}

