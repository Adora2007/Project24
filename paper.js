class Paper {
    constructor(x, y, width, radius) {
      var options = {
          isStatic:false,
        'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
     
      this.radius = radius;
      Matter.Bodies.circle(this.body);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.radius);
      pop();
    }
  };