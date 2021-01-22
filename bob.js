class Bob{
    constructor(x,y,radius){
    var options = {
        isStatic:false,
        restitution: 1,
        friction:0,
        density:7.2, 
    }
    this.body = Bodies.circle (x,y,radius,options)
    //this.body = Bodies.circle (x,y,25,options)
    this. radius = radius
    

    World.add(world,this.body)
}

display(){
ellipseMode(RADIUS)
fill("magenta")
stroke("cyan")
strokeWeight(3)
ellipse(this.body.position.x,this.body.position.y,this.radius)
}
}