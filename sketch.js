const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var divisions = [];
var plinkos = [];
var particles = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,750,900,20);

  for(var k = 0; k <= width; k = k+ 80){
    divisions.push(new Division(k, 600, 10, divisionHeight));
   }

   for(var j = 40; j <= width; j = j+50){
    plinkos.push(new Plinko(j, 75, 10));
   }

   for(var j = 40; j <= width; j = j+50){
    plinkos.push(new Plinko(j, 75, 10));
   }

   for(var j = 15; j <= width; j = j+50){
    plinkos.push(new Plinko(j, 175, 10));
   }

   for(var j = 40; j <= width; j = j+50){
    plinkos.push(new Plinko(j, 275, 10));
   }

   for(var j = 15; j <= width; j = j+50){
    plinkos.push(new Plinko(j, 375, 10));
   }

  
}

function draw() {
  background(0);  
  Engine.update(engine);

  
  ground.display();



   for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
   }

   if(frameCount%20===0){
    particles.push(new Particle(220,0,10,10));
  }
  
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
   }

   for(var i = 0; i < particles.length; i++){
    particles[i].display();
   }
}