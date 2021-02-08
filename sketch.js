var tom,jerry;
var tomImg,jerryImg;
var tom2Img,tom4Img;
var jerry3Img,jerry4Img;
var gardern;
var gardernImg;
function preload() {
    //load the images here
    tomImg=loadImage("cat1.png");
    jerryImg=loadImage("mouse1.png");   
    gardernImg=loadImage("garden.png");
    tom2Img=loadAnimation("cat2.png");
    tom4Img=loadAnimation("cat4.png");
    jerry3Img=loadAnimation("mouse3.png");
    jerry4Img=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    gardern=createSprite(width/2,height/2);
    gardern.addImage("garden",gardernImg);
  gardern.scale=0.9;
    
    tom=createSprite(800,600,20,20);
    tom.addImage("cat1",tomImg);
  tom.scale=0.09;
    
    jerry=createSprite(200,600,20,20);
    jerry.addImage("mouse1",jerryImg);
  jerry.scale=0.09;

   
    //create tom and jerry sprites here

}

function draw() {

    background(255);
   
    //Write condition here to evalute if tom and jerry collide
   
    over();
keyPressed();
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("cat2",tom2Img);
    tom.changeAnimation("cat2");

    jerry.addAnimation("mouse3",jerry3Img);
    jerry.changeAnimation("mouse3");
  }
  //For moving and changing animation write code here


}

function over(){
  if(tom.x-jerry.x < (tom.width-jerry.width)/2){
    tom.addAnimation("cat4",tom4Img);
    tom.changeAnimation("cat4");
    tom.velocityX=0;
    

    jerry.addAnimation("mouse4",jerry4Img);
    jerry.changeAnimation("mouse4");
  }
}