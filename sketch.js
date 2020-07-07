const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6;
var ground ;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(40,0,50,300);
    box2 = new Box(360,250,50,300);
    box3 = new Box(100,250,50,150);
    box4 = new Box(300,250,50,150);
    box5 = new Box(160,250,50,190);
    box6 = new Box(230,250,50,190);
    
    ground = new Ground(200,380,400,15);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    ground.display();
    console.log(box1.body.position.x);
}
