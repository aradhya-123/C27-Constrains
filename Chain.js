class Chain{
    constructor(body1,body2){
        var String1={
            bodyA:body1,
            bodyB:body2,
            length:100,
            stiffness:0.025
        }
        this.chain=Constraint.create(String1)
        World.add(world,this.chain)
    }
    display(){
        var Point1= this.chain.bodyA.position
        var Point2=this.chain.bodyB.position
        strokeWeight(4)
        line(Point1.x,Point1.y,Point2.x,Point2.y)
    }
}