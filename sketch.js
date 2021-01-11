const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
  var ground1,ground2
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25
var circles=[];
var polygon , polyIm
var chain
var count= 0
var turn= 0
var gameState= "PLAY"
 //var responseJSON
//var response
//var datetime
//var hour
var bg
//getBackgroundImg();
function preload(){
 // getBackgroundImg();
polyIm= loadImage("pics/polygon.png")
}

function setup() {


 var canvas = createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;
    ground1= new Ground(420,505,255,20)
    ground2= new Ground(600,220,200,20)
  // getBackgroundImg();
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  polygon= new Poly(200,200,60,60);
  //World.add(world,polygon);
  box1= new Box(329,502,30,40);
  box2= new Box(360,503,30,40);
  box3= new Box(390,503,30,40);
  box4= new Box(420,503,30,40);
  box5= new Box(450,503,30,40);
  box6= new Box(480,503,30,40);
  box7= new Box(512,502,30,40);

  box8= new Box(360,463,30,40);
  box9= new Box(390,463,30,40);
  box10= new Box(420,463,30,40);
  box11= new Box(450,463,30,40);
  box12= new Box(480,463,30,40);

  box13= new Box(390,424,30,40);
  box14= new Box(420,424,30,40);
  box15= new Box(450,424,30,40);
 
  box16= new Box(420,384,30,40)
///chain= new SlingShot(polygon.body,{x:200,y:200});


box18= new Box(570,200,30,40);
box19= new Box(540,200,30,40);
box17= new Box(600,200,30,40)
box20= new Box(630,200,30,40);
box21= new Box(660,200,30,40);

box22= new Box(570,160,30,40);
box23= new Box(600,160,30,40);
box24= new Box(630,160,30,40);
box25= new Box(600,120,30,40);
chain= new Sling(polygon.body,{x:100,y:400});


  


background("black")



  stroke(255)}
 // a=height;
  //circles.push(width/2);
 // getBackgroundImg();

function draw() {
 

  setbackground();  
  //getBackgroundImg();
  textSize(20)
  fill("black")
  text("SCORE: "+count,200,30)

  Engine.update(engine);
  
 // image(polyIm,polygon.position.x,polygon.position.y,40,40);
  //polygon.position.x= mouseX;
  //polygon.position.y= mouseY;


  





 // a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  

 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
fill("black")
textSize(24)
 text("Press SPACE to get more chances",180,600)
 ground1.display();
 box1.display();
box1.score();

 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();
 box21.display();
 box22.display();
 box23.display();
 box24.display();
 box25.display();
 ground2.display();

 chain.display();
polygon.display();

box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();
box17.score();
box18.score();
box19.score();
box20.score();
box21.score();
box22.score();
box23.score();
box24.score();
box25.score();

//getBackgroundImg();



 drawSprites();


}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    chain.fly();
  }

  function keyPressed(){
    if(keyCode===32 ){
   Matter.Body.setPosition(polygon.body,{x:180,y:200})
   
chain.attach(polygon.body);
//turn= turn + 1 


    }
  
}
async function setbackground(){
 var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
 var responseJSON = await response.json();

 var datetime = responseJSON.datetime;
 var hour = datetime.slice(11,13);
//hour = 0500
  
  if(hour>=0600 && hour<=1900){
      background("blue");

  }
  else{
    background("orange")
    text("hello",200,200)

  }

 
}


