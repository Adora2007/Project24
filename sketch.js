
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin, dustbin1, dustbin2, dustbin3;
var ground;
var paper1;
var ground1;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(600,height,1200,20);
	
	paper1 = new paper(200,300,30);

    dustbin1 = new Dustbin(700,320,300,PI/2);
    
	dustbin3 = new Dustbin(800,330,200,70);
   
    dustbin2 = new Dustbin(910,260, 300, PI/2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground1.display();
 paper1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85,y:-85});
	}
} 

