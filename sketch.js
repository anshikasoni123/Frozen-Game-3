
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundIMG;
var bg = "day.jpg";

function preload()
{
	getBackgroundIMG();
}

function setup() {
	createCanvas(1360, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    base = new Base(680, 620, 1360, 20);
	base2 = new Base(670, 495, 360, 10);
	base3 = new Base(1100, 275, 280, 10);
	
	box = new Box(630, 465, 40, 50);
	box1 = new Box(590, 465, 40, 50);
	box2 = new Box(670, 465, 40, 50);
	box3 = new Box(550, 465, 40, 50);
	box4 = new Box(710, 465, 40, 50);
	box5 = new Box(750, 465, 40, 50);
	box6 = new Box(790, 465, 40, 50);

	box7 = new Box2(750, 415, 40, 50);
	box8 = new Box2(590, 415, 40, 50);
	box9 = new Box2(630, 415, 40, 50);
	box10 = new Box2(670, 415, 40, 50);
	box11 = new Box2(710, 415, 40, 50);

	box12 = new Box3(710, 365, 40, 50);
	box13 = new Box3(630, 365, 40, 50);
	box14 = new Box3(670, 365, 40, 50);

	box15 = new Box4(670, 315, 40, 50);

	box16 = new Box(1100, 245, 40, 50);
	box17 = new Box(1140, 245, 40, 50);
	box18 = new Box(1180, 245, 40, 50);
	box19 = new Box(1060, 245, 40, 50);
	box20 = new Box(1020, 245, 40, 50);

	box21 = new Box3(1060, 195, 40, 50);
	box22 = new Box3(1100, 195, 40, 50);
	box23 = new Box3(1140, 195, 40, 50);

	box24 = new Box2(1100, 145, 40, 50);

	star = new Star(200, 300, 30);

	Slingshot = new SlingShot(star.body, {x:250, y:350})
	
	Engine.run(engine);

	
  
}


function draw() 
{
	Engine.update(engine)

	if(backgroundIMG)
 {
	background(backgroundIMG)

	
	fill("red");
	text("PRESS SPACE TO RESTART", 1100, 550)
 }

	base.display();
    base2.display();
	base3.display();

	box.display();
	box1.display();
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

	star.display();

	Slingshot.display();
  
  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(star.body, {x:mouseX, y:mouseY})
}

function mouseReleased()
{
	Slingshot.fly();
}

function keyPressed()
{
	if(keyCode===32)
	{
		Slingshot.attach(star.body)
	}
}

async function getBackgroundIMG()
{
	var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

	var responseJSON = await response.json();

	var datetime = responseJSON.datetime;
	var hour = datetime.slice(11, 13);

	if(hour >= 6 && hour <= 18)
	{
      bg = "day.jpg";
	}

	else
	{
		bg = "night.jpg"
	}

	backgroundIMG = loadImage(bg);
}