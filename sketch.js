// creating some variables
var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  // creating bullet
  bullet = createSprite(50,200,50,20);
  bullet.shapeColor = "#FFFFFF"

  // creating wall 
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  wall.velocityX = speed;
  }

  function draw() {
    background(255,255,255);  

    bullet.collide(wall);

    // checking bullet's damage

    if(hasCollided(bullet,wall)){
      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

      if(damage > 10){
        wall.shapeColor = color(225,0,0);
      }

      if(damage < 10){
        wall.shapeColor = color(0,225,0);
      }
    }    

    drawSprites();
  }

  // creating function hasCollided
  function hasCollided(obj1,obj2){
  bulletRightEdge = obj1.x + obj1.width;
  wallLeftEdge = obj2.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
    return false;
  }