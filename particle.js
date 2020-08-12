class Particle{
    constructor(x,y,radius){
    
    this.body = Bodies.circle(x,y,radius);
    this.radius=radius;
    this.color=color(random(0,255),random(0,255));
    World.add(world,this.body);
}
display(){
    ellipseMode(CENTER);
    ellipse(this.body.position.x,this.body.position.y,20);

}
}