var testObject1,testObject2;




function setup() {
  createCanvas(800,400);
  testObject1=createSprite(400, 200, 50, 90);
  testObject2=createSprite(200,300,90,50);
  testObject2.shapeColor =" green";
  testObject1.shapeColor="yellow";
}

function draw() {
  background(255,255,255); 

  testObject1.y=mouseY;
  testObject1.x=mouseX;
if(isTouch(testObject1,testObject2)){
  testObject1.shapeColor="blue";
  testObject2.shapeColor="blue";
}
else{
  testObject2.shapeColor =" green";
  testObject1.shapeColor="yellow";
}
  console.log(testObject1.x-testObject2.x);
  
  drawSprites();
}
