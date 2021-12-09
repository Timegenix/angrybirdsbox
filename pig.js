class Pig
{

constructor(x,y)
{
var options=
{
 isStatic:false,
 restitution:0.6,
 density:1,
 friction:0.5
}
this.body=Bodies.rectangle(x,y,70,70,options)
this.width=70
this.height=70
World.add(myworld,this.body)
}
display()
{
var pos =  this.body.position  
rectMode(CENTER)
fill("yellow")
strokeWeight(3)
stroke("white")
rect(pos.x,pos.y,this.width,this.height)
}



}






























































































