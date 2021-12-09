class Log
{
 constructor(x,y,w,a)
 {
  var options=
  {
    'restitution':0.6,
          'friction':1.3,
          'density':1.0,   
   
  }   
  this.body= Bodies.rectangle(x,y,w,30,options) 
  this.width=w
  this.height=30
  Matter.Body.setAngle(this.body,a)
  World.add(myworld,this.body) 
  
 }

 
 
  display()
{

  var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      //strokeWeight(4);
      //stroke("pink");
      fill("pink");
      rect(0, 0, this.width, this.height);
      pop();

//  var pos = this.body.position
//  rectMode(CENTER) 
//  fill("pink")
//  strokeWeight(3)
//  stroke("white")
//  rect(pos.x,pos.y,this.width,this.height) 
}

}















































































