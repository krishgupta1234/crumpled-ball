class paper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }
   this.radius = radius
   this.body = Bodies.circle(250,540,20);
   this.width = 33;
   World.add(world,this.body);
   this.image=loadImage("paper.png")
    }
display()
{
var pos = this.body.position;
var angle = this.body.angle;
   fill("white")
   image(this.image,pos.x,pos.y,33,33);
   imageMode(CENTER)
   rotate(angle)
}

}

