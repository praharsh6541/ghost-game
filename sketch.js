var gamestate = "play";
var sound;
var ghost,ghost_Image;
var invisibleBlock,invisibleBlockGroup;
var doorsGroup;
var climber,climber_Image,climbersGroup;
var door,door_Image;
var tower,tower_Image;
function preload(){
tower_Image = loadImage("tower.png");
door_Image = loadImage("door.png");
climber_Image = loadImage("climber.png");
ghost_Image = loadImage("ghost-standing.png");
sound = loadSound("spooky.wav");
}
function setup(){
createCanvas(600,600);
  
tower = createSprite(300,300);
tower.addImage("tower",tower_Image);
tower.velocityY = 5;
 
doorsGroup = new Group();
climbersGroup = new Group(); 
invisibleBlockGroup = new Group();  
ghost = createSprite(300,300);
ghost.addImage("ghost",ghost_Image);  
ghost.scale = 0.4
  
}
function draw(){
background("blue");

if(gamestate==="play"){
sound.play();  
  
  
if(keyDown("space")){
ghost.velocityY = -6
}  
ghost.velocityY = ghost.velocityY+0.9
  
if(keyDown("right")){
ghost.x = ghost.x+ 4
}  
 
if(keyDown("left")){
ghost.x = ghost.x  -4                  
}    
  
if(tower.y >500){
  tower.y = 300
}
spawndoors();  
if(climbersGroup.isTouching(ghost)){
ghost.velocityY = 0
}
if(invisibleBlockGroup.isTouching(ghost)|| ghost.y> 600){
gamestate="end";
ghost.destroy();
}
drawSprites();
ghost.setCollider("rectangle",0,0,200,200);

}  
if(gamestate==="end"){
stroke("black")
textSize(50);
text("GAME OVER",190,300);
}  
  

 
  
  
  
  
  
  
}

function spawndoors(){
if(frameCount % 240===0 ){
door = createSprite(200,0);
door.addImage("door",door_Image); 
door.x = Math.round(random(100,400));  
door.velocityY = 5;
doorsGroup.add(door);
door.lifetime = 700;
  
climber = createSprite(200,50);
climber.addImage("climber",climber_Image); 
climber.x = door.x; 
climber.velocityY = 5;
climbersGroup.add(climber);
climber.lifetime = 700;

invisibleBlock = createSprite(200,60);
invisibleBlock.width = climber.width;
invisibleBlock.height = 5
invisibleBlockGroup.add(invisibleBlock);
invisibleBlock.x = door.x;
invisibleBlock.velocityY = 5;
invisibleBlock.visible =false

ghost.depth = door.depth;
ghost.depth = ghost.depth+1;


  
}
  
  
  
  
  
  
  
}

