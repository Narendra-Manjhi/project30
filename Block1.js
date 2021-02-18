class Block1 {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var boxpos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(boxpos.x, boxpos.y);
    rotate(angle);
    rectMode(CENTER);
    //strokeWeight(4);
    fill(103,209,234);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
