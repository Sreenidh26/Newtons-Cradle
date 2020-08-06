class Bob
{
    constructor(x,y,width,height)
    {
        var options =
        {
            'isStatic':false,
            'restitution':1.2,
            'friction':2.6,
            'density':1.5,
        }
        this.body=Bodies.rectangle(x,y,60,60,options,1);
        this.width=60;
        this.height=60;
        World.add(world,this.body);
        
    }
    
    display()
    {
        var pos = this.body.position
        var angle = this.body.angle
        //push();
        //translate(pos.x,pos.y);
        //rotate(angle);
        fill("magenta")
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.width,this.height);
        //pop();
    }
}