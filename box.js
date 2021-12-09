class Box 
{

constructor(x,y,)
{
 var options=
 {
  restitution:0.6,
  friction:0.9,
  density:1
 }


 this.body = Bodies.rectangle(x,y,100,100,options)
 this.width=100
 this.height=100
 World.add(myworld,this.body)



}

display()
{
 var pos = this.body.position
 rectMode(CENTER)
 fill("green")
 strokeWeight(3)
 stroke("white")
 rect(pos.x,pos.y,this.width,this.height)



}



















}

































































































