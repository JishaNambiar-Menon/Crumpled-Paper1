
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var d1, d2, d3;
var engine, world;
var ground;
var paper;
function preload()
{
	dustbinImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1600, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	d1 = new Dustin(1300, 665, 170, 20);
	d2 = new Dustin(1205, 615, 20, 120);
	d3 = new Dustin(1395, 615, 20, 120);

	ground = new Ground(800, 690, 1600, 30);

	paper = new Paper(50, 680, 20);
	//Body.setScale = (paper.body, 20, 20)
	//Matter.Body.scale(body, scaleX, scaleY
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1600,
			height: 700,
			wireframes: false
		}
	})
	Render.run(render);
}


function draw() {
 
  background('skyblue');
  text(mouseX+","+mouseY, mouseX, mouseY);
  Engine.update(engine);
  
  //d1.display();
  //d2.display();
  //d3.display();	

  ground.display();

  paper.display();

  imageMode(CENTER);
  image(dustbinImg,1300,600,250,150);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body, paper.body.position,{x:105, y:-85})
	}
}

