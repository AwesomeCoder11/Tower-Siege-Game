
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    ground1 = new Ground(350,height,400,20);
    
    block1 = new Box(270,195,30,40);
    block2 = new Box(300,195,30,40);
    block3 = new Box(330,195,30,40);
    block4 = new Box(360,195,30,40);
    block5 = new Box(390,195,30,40);
    block6 = new Box(420,195,30,40);
    block7 = new Box(450,195,30,40);
    block8= new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10= new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);
    block16 = new Box(390,155,30,40);

    polygon = Bodies.circle(50,200,20);
    world.add(world,polygon);

    slingShot = new SlingShot(this.polygon,{x:100,y:200});

    imageMode(CENTER)
    image(polygon_img,polygon.positionx,polygon.position.y,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground1.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

}



