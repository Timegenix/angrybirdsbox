class Bird
{
 constructor(x,y,w,h)
 {
   
   var options=
   {
    restitution:0.6,
    density:1.3
   }
   this.body=Bodies.rectangle(x,y,w,h,options)
   this.width=w
   this.height=h
   World.add(myworld,this.body)
   

 }
  display()
  {
   var pos =  this.body.position  

   pos.x= mouseX
   pos.y= mouseY

   rectMode(CENTER)
   fill("darkred")
   rect(pos.x,pos.y,this.width,this.height)
  }





 }











































































































