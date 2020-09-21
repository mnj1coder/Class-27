class Slingshot{
    constructor(A,B) {
        var options = {
            bodyA:A,
            bodyB:B,
            length: 7,
            stiffness: 0.5
        }
        this.Sling=Matter.Constraint.create(options); 
        World.add(world,this.Sling); 
}
display(){
    var pointA = this.Sling.bodyA.position;
    var pointB = this.Sling.bodyB.position

  line(pointA.x,pointA.y,pointB.x,pointB.y);  
}
}