class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
    
      this.ground = Bodies.rectangle(450,490,1550,20,options);
      
      World.add(world, this.ground);
    }
    display()
    {
        strokeWeight(2);
        rectMode(CENTER)
        fill("red");
        rect(this.ground.position.x, this.ground.position.y,1550,20);
        
    }
  };