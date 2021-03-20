function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 200, 50, 50);
  movingrect = createSprite(300,100,100,40);
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  drawSprites();
  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
     fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 &&
     movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
     fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2)
  {
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";      
  }
 else{
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";     
 }
}