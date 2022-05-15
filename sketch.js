const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world

var ground;

var backgroundImg;

var tower,towerImg;

var cannonball;


var cannon

var angle;

var ballmat = [];

var navios = [];

var boatanim = [];

var boatdata 

var boatsprite

var  brokenboatanim = [];
var brokenboatdata
var brokenboatsprite

function preload() {
  backgroundImg = loadImage("assets/background.gif");
  towerImg = loadImage("assets/tower.png");
  boatdata = loadJSON('assets/boat/boat.json');
  boatsprite = loadImage('assets/boat/boat.png');
  brokenboatdata = loadJSON('assets/boat/broken_boat.json');
  brokenboatsprite = loadImage('assets/boat/broken_boat.png');
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0,height-1,width*2,1,options);
  World.add(world,ground);

  tower = Bodies.rectangle(160,350,160,310,options);
  World.add(world,tower);


 angleMode(DEGREES);
 angle = 20
 cannon = new Cannon(180,110,130,100,angle);

 var boatframes = boatdata.frames
 
 for(var i = 0;i<boatframes.length;i++){
    var pos = boatframes[i].position
    var img = boatsprite.get(pos.x,pos.y,pos.w,pos.h);
    boatanim.push(img);

 }
 var brokenboatframes = brokenboatdata.frames
 for(var i = 0;i<brokenboatframes.length;i++){
  var pos = brokenboatframes[i].position
  var img = brokenboatsprite.get(pos.x,pos.y,pos.w,pos.h);
  brokenboatanim.push(img);

}


}




function draw() {
  background(190);

  
  

  rect(ground.position.x,ground.position.y,width*2,1);

  image(backgroundImg,0,0,1200,600);

  push()
  imageMode(CENTER);
  image(towerImg,tower.position.x,tower.position.y,160,310);
  pop()
 
  cannon.display();
  showboat(); 
 for(var i = 0;i<ballmat.length;i++){
   showcannonball(ballmat[i],i);
   colissionboat(i)
  }
 
  Engine.update(engine);
}
function keyPressed(){
if(keyCode===DOWN_ARROW){
  var cannonball = new Ballcannon(cannon.x,cannon.y);
  cannonball.trajetory = [];
  ballmat.push(cannonball);
  
}


}
function keyReleased(){
  if(keyCode===DOWN_ARROW){
    ballmat[ballmat.length-1].shoot();
    

  }
}

function showcannonball(ball,index){
if(ball){
  ball.display();
  if(ball.body.position.x>=width||ball.body.position.y>=height-50){
    ball.remove(index)
  }
}

}
function showboat(){
 if(navios.length>0){
   if(navios.length<4&&navios[navios.length-1].body.position.x<width-300){
     var position = [-40,-70,-80,-60]
     var positions = random(position)
     var navio = new Navio(width,height-100,170,170,positions,boatanim)
     navios.push(navio);
     

    
    }
    for(var i = 0;i<navios.length;i++){
          Matter.Body.setVelocity(navios[i].body,{x:-0.9,y:0})
          navios[i].display();
          navios[i].animate();
        }       
                 
 }else{
 var navio = new Navio(width,height-60,170,170,-60,boatanim);
 navios.push(navio);
 


 }



}
function colissionboat(index){
 for(var i = 0;i<navios.length;i++){
    if(ballmat[index]!==undefined&&navios[i]!==undefined){
       var colision = Matter.SAT.collides(ballmat[index].body,navios[i].body)
     if(colision.collided){
       navios[i].remove(i)

       World.remove(world,ballmat[index].body)
       delete ballmat[index]
     }  
    }
 }

}