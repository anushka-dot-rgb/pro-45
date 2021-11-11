var asteroid,earth,burningEarth,rocket;

function preload(){
  asteroidImage=loadImage("asteroid.png");
  earthImage=loadImage("earth.png");
  burningEarthImage=loadImage("burntEarth.png");
  rocketImage=loadImage("rocket.png");
  bg=loadImage("bg1.jpg");
  
}

function setup(){
createCanvas(600,600);
rocket=createSprite(255,330);
rocket.addImage(rocketImage);
rocket.scale=0.5;
earth=createSprite(250,490);
earth.addImage(earthImage);
earth.scale=0.5;

}

function draw(){
background(bg);





edges=createEdgeSprites();
rocket.collide(edges);
rocket.x=World.mouseX;
drawSprites();
}
