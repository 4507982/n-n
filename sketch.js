var boom;
var difficulty=100;
var gameState="play";
var loc;
var hero,heroimg;
 var redGroup,blueGroup,greenGroup,pinkGroup;
 var lazarGroup,lazar;
 var redimg,blueimg,greenimg,pinkimg;
 var score=0;
 var music;
var laser;
function preload(){

  bg = loadImage("bg1.jpg");
  heroImg = loadImage("ship1.png");
  redImg = loadImage("red.png");
  greenImg = loadImage("green.png");
  pinkImg = loadImage("pink.png");
  blueImg = loadImage("blue.png");
  music = loadSound("Misc.mp3");
  laser = loadSound("laser.wav");
  boom =loadImage("bigboomjr.png");
}


function setup(){
hero=createSprite(30,300,50,50);
hero.addImage(heroImg);
hero.scale = 0.2;

loc=createSprite(0,320,800,50);
loc.visible=false;


redGroup = new Group;
  blueGroup = new Group;
  greenGroup = new Group;
  pinkGroup = new Group;
  lazarGroup = new Group;
 music.play();
  music.loop();
}
function draw(){
background(bg);
if (gameState==="play"){


hero.x = World.mouseX
 
if  (keyWentDown ("space")){
  lazar();
} 
 





difficulty=100-(parseInt(score/100)*10);
//console.log(difficulty);
var select_mon = Math.round(random(1,4));
//  console.log(select_mon)
if (World.frameCount % difficulty === 0) {
  
  if (select_mon === 1) {

    redmonster();
  } else if (select_mon === 2) {
    greenmonster();
  } else if (select_mon === 3) {
    bluemonster();
  } else {
    pinkmonster();
  }
}
if(lazarGroup.isTouching(redGroup)){
  redGroup.destroyEach();
  lazarGroup.destroyEach();
  score= score+6 
  laser.play();
  
}
 if(lazarGroup.isTouching(greenGroup)){
 greenGroup.destroyEach();
 lazarGroup.destroyEach();
  score= score+5
  laser.play();
}
 if(lazarGroup.isTouching(blueGroup)){
  blueGroup.destroyEach();
  lazarGroup.destroyEach();
  score= score+3 
  laser.play();
}
 if(lazarGroup.isTouching(pinkGroup)){
  pinkGroup.destroyEach();
  lazarGroup.destroyEach();
  score= score+3 
  laser.play(); 
}
if (redGroup.isTouching(loc)){
 gameState="gameover";
}

if (greenGroup.isTouching(loc)){
  gameState="gameover";
 }

 if (blueGroup.isTouching(loc)){
  gameState="gameover";
 }

 if (pinkGroup.isTouching(loc)){
  gameState="gameover";
 }
 textSize(20);
 fill("red");
 text(score,10,30);
/*
lazar();
redmonster();
greenmonster();
bluemonster();
pinkmonster();
*/

}

if (gameState==="gameover"){
  textSize(50);
  fill("red");
  text("GAME OVER",10,200);
hero.visible=false;
}
drawSprites();
}
function lazar() {
  var lazar= createSprite(100, 100, 5, 15);
 lazar.x = hero.x;
 lazar.y=hero.y;
 lazar.velocityY = -4;
 lazar.lifetime = 100;
  lazar.shapeColor="red";
   lazarGroup.add(lazar);
   
}


function redmonster() {
  
  var red = createSprite(Math.round(random(20, 370)),0, 10, 10);
  red.addImage(redImg);
  red.velocityY = 3;
  red.lifetime = 100;
  red.scale = 0.2;
  redGroup.add(red)
  red.velocityY = red.velocityY+5;
}


function greenmonster() {
var green = createSprite(Math.round(random(20, 370)),0, 10, 10);
  green.addImage(greenImg);
  green.velocityY = 5;
  green.lifetime = 100;
  green.scale = 0.2;
  greenGroup.add(green)
  if(score === 100){
    green.velocityY = green.velocityY+12;
  }
}



function bluemonster() {
  var blue = createSprite(Math.round(random(20, 370)),0, 10, 10);
  blue.addImage(blueImg);
  blue.velocityY = 3;
  blue.lifetime = 100;
  blue.scale = 0.4;
  blueGroup.add(blue)
  blue.velocityY = blue.velocityY+3;
}



function pinkmonster() {
  var pink = createSprite(Math.round(random(20, 370)),0, 10, 10);
  pink.addImage(pinkImg);
  pink.velocityY = 3;
  pink.lifetime = 100;
 pink.scale = 0.3;
  pinkGroup.add(pink)
  pink.velocityY = pink.velocityY+3;
}

