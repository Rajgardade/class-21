var fixed,moving; 
var car1 , car2
var bus1,bus2;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(200,200,60,100);
  moving = createSprite(700,200,100,60);
  fixed.shapeColor = "green";
  moving.shapeColor = "green";

  car1 = createSprite(100,100,50,50);
  car2 = createSprite(500,100,50,50);

  car1.shapeColor = "yellow";
  car2.shapeColor = "orange";

  car1.velocityX = 3;
  car2.velocityX = -3;

  bus1 = createSprite(150,150,20,20);
  bus2 = createSprite(150,350,20,20);
  bus1.velocityY = 3;
  bus2.velocityY = -3; 
  bus1.shapeColor= "cyan";
  bus2.shapeColor = "grey";
}



function draw() {
  background(0);  

  moving.x = World.mouseX;
  moving.y = World.mouseY;

  if(istouch(fixed,moving))
  {
    
    fixed.shapeColor = "red";
    moving.shapeColor = "red";
  }
  else{
  fixed.shapeColor = "green";
  moving.shapeColor = "green";

  }
  bounce(car1,car2);
  bounce(bus1,bus2);
  drawSprites();
}
