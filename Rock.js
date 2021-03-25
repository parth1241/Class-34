class Rock
{
    constructor(x,y,width,height){
        var options ={
            density:1.0,
            isStatic:false
        }
        this.image=loadImage("/images/rock1.png")
        this.body=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body);
    this.width=width;
    this.height=height;
    Matter.Body.setMass(this.body,this.body.mass*3);
    }
    display()
    {
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        
    }
    
}