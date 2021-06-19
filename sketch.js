var astronaut,bath,brush,
    drink,eat,gym,bg,move,
    sleep;
    
function preload() {
  bg = loadImage("images/iss.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  brush = loadAnimation("images/brush.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  move = loadAnimation("images/move1.png","images/move.png");
  sleep = loadAnimation("images/sleep.png");
}

function setup() {
  createCanvas(800,400);

  astronaut = createSprite(400,200);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

  edges = createEdgeSprites();
}

function draw() {
  background(bg);

  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0; 
  }

  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("m")) {
    astronaut.velocityX = 2;
    astronaut.velocityY = -3
  }

  astronaut.bounceOff(edges);

 drawSprites();
}