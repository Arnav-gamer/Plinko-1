const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var engine,world;

function setup() {
  engine = Engine.create();
  world = engine.world;

   createCanvas(480,600);
  
  for(var x = 20; x < 450;x = x +40){
    plinkos.push(new Plinko(x,100,10));
  
  }

  for(var x = 40; x < 480; x = x +40){
    plinkos.push(new Plinko(x,200,10));
  
  }
  for(var x = 20;x<450;x = x +40){
    plinkos.push(new Plinko(x,300,10));
  
  }
  for(var x = 40; x < 480; x = x +40){
    plinkos.push(new Plinko(x,400,10));
  
  }
  ground = new Ground(240,580,480,15);

  for(var x = 10 ; x < 470;x = x + 90){
    divisions.push(new Ground(x,525,10,150));
    
  }
  var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } }); Engine.run(engine); Render.run(render);

}

function draw() {
  background(0);  
  Engine.update(engine);
 
  drawSprites();
  
  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }
  for(var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }
  ground.display();
  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(110,200),50,10))
  }
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
}

/*for (var k = 0; k <=width; k = k +80){
  divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
}

for (var j = 40; j <=width; j=j+50)
{
  plinkos.push(new Plinko(j,75));
} 

for(var j = 15; j <=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,175));
}

for (var j = 0; j < particles.length; j++){
  particles[j].display();
}

for (var k = 0; k < divisions.length; k++){
  divisions[k].display();
}*/