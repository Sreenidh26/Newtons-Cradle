
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world,engine;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roof,roof1,rope,rope1;

var adjust = 250;

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.

	roof = new Roof(530+adjust,100,100,40);
	roof1 = new Roof(470+adjust,100,100,40);
	roof2 = new Roof(420+adjust,100,400,40);
	roof3 = new Roof(630+adjust,100,100,40);
	roof4 = new Roof(580+adjust,100,100,40);

	bobObject1 = new Bob(530+adjust,500)
	bobObject2 = new Bob(470+adjust,500)
	bobObject3 = new Bob(420+adjust,500)
	bobObject4 = new Bob(630+adjust,500)
	bobObject5 = new Bob(580+adjust,500)
  

	rope= new Rope(bobObject1.body,roof.body,-50*2,0)
  rope1= new Rope(bobObject2.body,roof1.body,-50*2,0)
  rope2= new Rope(bobObject3.body,roof2.body,-50*2,0)
  rope3= new Rope(bobObject4.body,roof3.body,-50*2,0)
  rope4= new Rope(bobObject5.body,roof4.body,-50*2,0)
	
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  roof.display();
  roof2.display();
  roof3.display();
  roof1.display();
  roof4.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  

  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  //drawSprites();
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-500,y:500});
  }
}
