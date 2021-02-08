var PLAY = 1;
var END = 0;
var gameState = 1;
var Colin, ColinAnimation, ColinTransfurred, ColinTransfurredImg;
var Latex, LatexAnimation;
var LatexGroup;
var Music
function preload(){
ColinAnimation = loadAnimation ("Colin1.png", "Colin2.png" , "Colin3.png", "Colin2.png");
LatexAnimation = loadAnimation ("LatexImg1.png", "LatexImg2.png", "LatexImg3.png");
ColinTransfurredImg = loadImage("Transfurred.png");
Music = loadSound ("ChangedOST-The-White-Knight.mp3");
}

function setup() {
  Music.play();
 createCanvas(1200,1200);
  ColinTransfurred = createSprite(200,200,10,10);
  ColinTransfurred.addImage("ColinTransfurred" , ColinTransfurredImg);
  Colin = createSprite(200,200,10,10);
  Colin.addAnimation("Colin", ColinAnimation)
}

function draw() {
 background(0);
 if(gameState === PLAY){
   Colin.x = World.mouseX
   ColinTransfurred.x = Colin.x
  ColinTransfurred.visible = false;
if (LatexGroup.isTouching(Colin)){
   gameState = END;
   }

   
   MakeLatex();
   
 }

 


if(gameState === END){
  Colin.visible = false;

  ColinTransfurred.visible = true;

}






LatexGroup = new Group();
 drawSprites();
}

function MakeLatex (){
  if(frameCount%60 === 0){
  Latex = createSprite(200,1200,50,50);
  Latex.addAnimation("Latex", LatexAnimation);
  Latex.x = Math.round(random(100,1200));
Latex.velocityY = -5;
Latex.lifetime = 800;
LatexGroup.add(Latex);
 }
}