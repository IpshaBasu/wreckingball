const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var ball;
var rope;
function setup(){
    createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, 400, 800, 20);
    box1 = new Box(500, 100, 60, 60);
   box2 = new Box(500, 100, 60, 60);
   box3 = new Box(500, 100, 60, 60);
   box4 = new Box(500, 100, 60, 60);
   box5 = new Box(500, 100, 60, 60);
   box6 = new Box(500, 100, 60, 60);
   box7 = new Box(400, 100, 60, 60);
   box8 = new Box(400, 100, 60, 60);
   box9 = new Box(400, 100, 60, 60);
   box10 = new Box(400, 100, 60, 60);
   box11 = new Box(400, 100, 60, 60);
   box12 = new Box(400, 100, 60, 60);
   box13 = new Box(300, 100, 60, 60);
   box14 = new Box(300, 100, 60, 60);
   box15 = new Box(300, 100, 60, 60);
   box16 = new Box(300, 100, 60, 60);
   box17 = new Box(300, 100, 60, 60);
   box18 = new Box(300, 100, 60, 60);
   box19 = new Box(300, 100, 60, 60);
   box20 = new Box(300, 100, 60, 60);
   ball = new Ball(100, 70, 50, 50);
   rope = new Rope(ball.body, {x:500, y:50});
}
function draw(){
    background("blue");
    Engine.update(engine);
    ground.display();
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
    ball.display();
    rope.display();
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}
