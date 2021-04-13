class Rope{
constructor(bodyA,pointB)
{
var options={
    bodyA:bodyA,
    pointB:pointB,
    length:5,
    stiffness:0.1  
}
this.pointB = pointB
this.rope = Constraint.create(options)
World.add(world,this.rope)
}
fly() {
    this.rope.pointB = null;
}
attach(bodyA) {
    this.rope.pointB = {x: 200, y: 300};
}


display(){
   if(this.rope.pointB != null){
    var bodyA = this.rope.bodyA.position
            var pointB = this.pointB
           fill("blue")
            strokeWeight(3)
            line(bodyA.x,bodyA.y,pointB.x,pointB.y);
   }
}
}