const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Particle = [];
var plinko = [];
var divisions= [];
var divisionHeight = 300;

function setup() {
    createCanvas(480,800);

    engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
    base = new Base(width/2,height,width,20);

    for (var k = 0; k <=width; k = k + 80) {
        divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
    }
    for (var j = 40; j <= width; j = j + 50){
        plinko.push( new Plinko(j,50));
    }
    for(var j = 15; j <= width; j = j+ 50){
        plinko.push(new Plinko(j,150));        
    }
    for (var j = 40; j <= width; j = j + 50){
        plinko.push( new Plinko(j,250));
    }
    for(var j = 15; j <= width; j = j+ 50){
        plinko.push(new Plinko(j,350));        
    }     
  }
  
  function draw() {
    background(0);  
    Engine.update(engine);
      
  
  if(frameCount%40 === 0){
    Particle.push(new Particle1( random( width/2-30,width/2+30), 10, 10));
  }
   for (var i = 0; i < plinko.length; i++) {
    plinko[i].display();
  }
   for (var s = 0; s < Particle.length; s++) {
    Particle[s].display();
  }
   for (var k = 0; k < divisions.length; k++){
       divisions[k].display();
  }

    drawSprites();
  }