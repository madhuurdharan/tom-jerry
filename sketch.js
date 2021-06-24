var jerry,jerryImg1,jerryImg2;
var tom ,tomImg1,tomImg2;

function preload() {
    //load the images here
    bac=loadImage("images/garden.png");
    jerryImg1=loadImage("images/mouse1.png");
    jerryImg2=loadImage("images/mouse2.png","images/mouse3.png");
    tomImg1=loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry=createSprite(600,700);
    jerry.addImage(jerryImg1);
    tom=createSprite(800,300);
    tom.addImage(tomImg1);

}

function draw() {

    background(bac);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom .width - jerry .width/2) )
    {
    tom.addAnimation("tomRunning",catImg2);
    tom.changeAnimation("tomRunning");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
    jerry.addAnimation("mouseTeasing",jerryImg2);
   jerry.changeAnimation("mouseTeasing");
   jerry.frameDelay = 25;
  }

   if(keyCode === LEFT_ARROW){
     jerry.addAnimation("mouseTeasing",jerryImg2);
    jerry.changeAnimation("mouseTeasing");
    jerry.frameDelay = 25;
   }

}
