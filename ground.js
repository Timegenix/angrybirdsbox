class Ground
{
  constructor(x,y,w,h)
  {
      var options2=
    {
     isStatic:true
    }
    this.ground=Bodies.rectangle(x,y,w,h,options2)
    this.width=w
    this.height=h
    World.add(myworld,this.ground)
    
  }
   display()
   {
    var pos =  this.ground.position  
    rectMode(CENTER)
    fill("darkred")
    rect(pos.x,pos.y,this.width,this.height)
   }



















}