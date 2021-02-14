class Basketball{
  constructor(x, y, radius) {
      var options = {
          restitution:0.8,
          friction:1.0,
          density:1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var radius = this.radius
      //var angle = this.body.angle;
      push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      ellipseMode(CENTER);
      fill("orange");
      ellipse(pos.x, pos.y, radius*2);
      pop();
    }
}