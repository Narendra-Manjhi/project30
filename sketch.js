const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


var block1, block2, block3, block4, block5, block6, block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17;
var ground1, ground2,ground3,polygon,slingShot;
var polygon_img;

function preload(){
    polygon_img=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1600, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;
    
    ground1 = new Ground(width/2,600,width,20);

    ground2 = new Ground(width/4,height/2,width/6,10);
    block1 = new Block1(310,235,30,40);
    block2 = new Block1(340,235,30,40);
    block3 = new Block1(370,235,30,40);
    block4 = new Block1(400,235,30,40);
    block5 = new Block1(430,235,30,40);
    block6 = new Block1(460,235,30,40);
    block7 = new Block1(490,235,30,40);
    block8 = new Block2(340,190,30,40);
    block9 = new Block2(370,190,30,40);
    block10 = new Block2(400,190,30,40);
    block11 = new Block2(430,190,30,40);
    block12 = new Block2(460,190,30,40);
    block13 = new Block3(370,150,30,40);
    block14 = new Block3(400,150,30,40);
    block15 = new Block3(430,150,30,40);
    block16 = new Block4(400,110,30,40);
    
    ground3 = new Ground(width/2,height/3,width/7,10);
    block17 = new Block1(740,105,30,40);
    block18 = new Block1(770,105,30,40);
    block19 = new Block1(800,105,30,40);
    block20 = new Block1(830,105,30,40);
    block21 = new Block1(860,105,30,40);
    block22 = new Block3(770,65,30,40);
    block23 = new Block3(800,65,30,40);
    block24 = new Block3(830,65,30,40);
    block25 = new Block2(800,35,30,40);
   
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

    
    ground1.display();
    ground2.display();   
    ground3.display();      
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
   
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    polygon.display();
    
    
    imageMode(CENTER)
    image(polygon_img ,polygon.position.x, polygon.position.y,40,40);  
    
    slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}