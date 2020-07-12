const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var engine,world;
let division=[];
let plinko1=[];
let plinko2=[];
var particle=[];
let ground,ball;
function preload(){
 
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  for(let i=0;i<5;i++){
   let x=30+170*i;
   division[i]=new Ground(x,350,10,90);
 }
 
 ground=new Ground(400,397,width,5);
 for (let i=0;i<5;i++){
  let x=30+170*i;
  plinko1[i]=new Plinko(x,100,20,20);
 }
 for (let i=0;i<5;i++){
  let x=30+170*i;
  plinko2[i]=new Plinko(x,230,20,20);
 }
  Engine.run(engine);
}
function mousePressed(){
  if(mouseY<=90){
  ball=new Plink(mouseX,mouseY,25,25);
  particle.push(ball);
  }
}


function draw() {
 
  background(0);  
  for(let i=0;i<division.length;i++){
    division[i].display();
  }
  ground.display();
  for(let i=0;i<5;i++){
     plinko1[i].display();
  }
  for(let i=0;i<5;i++){
    plinko2[i].display();
 }
 for (let i=0;i<particle.length;i++){
   particle[i].display();
 }
  
}
