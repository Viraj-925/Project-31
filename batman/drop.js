class Drop{
    constructor(x,y){
        var option ={
            friction:0.001,
            restitution:0.1
        }
        this.rain=Bodies.circle(x,y,5,option)
        this.radius=5
        World.add(world,this.rain)
    }

    display(){
        fill("blue")
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius)
    }
}