var fixedrecked,movingrecked;
function setup() {
  createCanvas(1200,800);
  fixedrecked=createSprite(400,600,50,80);
  fixedrecked.debug=true;
  fixedrecked.shapeColor="green";
  movingrecked=createSprite(400,200,80,30);
  movingrecked.debug=true;
  movingrecked.shapeColor="green";
  
}

function draw() {
  background(255,255,255); 
  movingrecked.x = World.mouseX; 
  movingrecked.y = World.mouseY; 

  if(movingrecked.x-fixedrecked.x< fixedrecked.width/2+movingrecked.width/2 &&
    fixedrecked.x-movingrecked.x <fixedrecked.width/2 +movingrecked.width/2 &&
   movingrecked.y-fixedrecked.y< fixedrecked.height/2 + movingrecked.height/2 &&
   fixedrecked.y-movingrecked.y<fixedrecked.height/2 + movingrecked.height/2 ){
     movingrecked.shapeColor="red";
     fixedrecked.shapeColor="yellow";
     
   }
   else{
     movingrecked.shapeColor="green";
     fixedrecked.shapeColor="green";   }
  drawSprites();
}