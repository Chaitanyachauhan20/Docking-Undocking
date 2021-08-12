var backimg;
var iss, spacecraft1, spacecraft2, spacecraft3, spacecraft4;
var hasDocked = false;
var issImage, spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img;
var gameState = PLAY;
var PLAY = 0;
var END = 1;
var dockEasyImg, dockEasy;

function preload(){

  backimg = loadImage("spacebg.jpg");
  issImage = loadImage("iss.png");
  spacecraft1Img = loadImage("spacecraft1.png")
  spacecraft2Img = loadImage("spacecraft2.png")
  spacecraft3Img = loadImage("spacecraft3.png")
  spacecraft4Img = loadImage("spacecraft4.png")
  dockEasyImg = loadImage("easy.png");
}




function setup() {
  createCanvas(800,400);
  
  iss = createSprite(330,130);
  iss.addImage(issImage);
  iss.scale = 0.612;

  spacecraft1 = createSprite(285,240);
  spacecraft1.addImage(spacecraft1Img);
  spacecraft1.scale = 0.2;

  dockEasy = createSprite(600,100);
  dockEasy.addImage(dockEasyImg);
  dockEasy.scale = 0.3;
}
// 290,215
function draw() {
  background(backimg);  

  console.log(spacecraft1.y);

 if(!hasDocked){

if(keyDown("right")){
  spacecraft1.addImage(spacecraft4Img);
  spacecraft1.x = spacecraft1.x + 2;
}

if(keyDown("left")){
  spacecraft1.addImage(spacecraft3Img);
  spacecraft1.x = spacecraft1.x - 2;
}

if(keyDown("down")){
  spacecraft1.addImage(spacecraft2Img);
 // spacecraft1.y = spacecraft1.y + 5;
}

if(keyDown("up")){
  spacecraft1.y = spacecraft1.y - 2;
}

if(mousePressedOver(dockEasy)){
  spacecraft1.x = 290;
  spacecraft1.y = 215;
}
} 
  
if(spacecraft1.x <= (iss.x-10) && spacecraft1.y <= (iss.y+90)){

hasDocked = true;
textSize(40);
stroke("white");
text("DOCKING SUCCESSFULL",200,300);



  }
  drawSprites();
}

//if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){ hasDocked = true; textSize(25); fill("white") text("Docking Successful!", 200, 300); }













