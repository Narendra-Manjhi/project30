const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint; 
var engine, world;


var stand1, stand2;
var ground1, ground2,ground3,polygon,slingShot;
var polygon_img;

function preload(){
    polygon_img=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200, 500);
    

    engine = Engine.create();
    world = engine.world;

    
    
    ground = new Ground();

    stand1 = new Stand(580, 300, 270, 10);
    stand2 = new Stand(1000, 200, 220, 10);
   
    //level one
    block1 = new Block(490,275,30,40);
    block2 = new Block(520,275,30,40);
    block3 = new Block(550,275,30,40);
    block4 = new Block(580,275,30,40);
    block5 = new Block(610,275,30,40);
    block6 = new Block(640,275,30,40);
    block7 = new Block(670,275,30,40);
    block8 = new Block(940,175,30,40);
    block9 = new Block(970,175,30,40);
    block10 = new Block(1000,175,30,40);
    block11 = new Block(1030,175,30,40);
    block12 = new Block(1060,175,30,40);
    
    //level two
    block13 = new Block(520,235,30,40);
    block14 = new Block(550,235,30,40);
    block15 = new Block(580,235,30,40);
    block16 = new Block(610,235,30,40);
    block17 = new Block(640,235,30,40);
    block18 = new Block(1000,95,30,40);

    //level three
    block19 = new Block(550,195,30,40);
    block20 = new Block(580,195,30,40);
    block21 = new Block(610,195,30,40);
    block22 = new Block(970,135,30,40);
    block23 = new Block(1000,135,30,40);
    block24 = new Block(1030,135,30,40);
    //level four
    block25 = new Block(580,155,30,40);

    //polygon holder with slings
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
   
    slingShot = new SlingShot(this.polygon,{x:100,y:200});
    

   
    
    Engine.run(engine);


}
function draw(){
    rectMode(CENTER);
    Engine.update(engine);
    background(rgb(60,46,46));

    

    //ground.display();
    strokeWeight(2);
    stroke(15);
   
    stand1.display();
    stand2.display();

    stroke(15);
    fill(rgb(103,209,234))
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

    stroke(15);
    fill(rgb(255,190,196))
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    stroke(15)
    fill(rgb(0,228,208))
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    stroke(15)
    fill(rgb(128,125,120))
    block25.display();

    imageMode(CENTER)
    image(polygon_img ,polygon.position.x, polygon.position.y,40,40);

    fill(rgb(255,255,222));
    textSize(25);
    text("Drag the polygon to destroy the blocks",200,30);
        

    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
}