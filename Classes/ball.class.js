class Ball{

    position={
        x: 0,
        y: 0
    }
    velocity = {
        x:0,
        y:0
    }
    constructor(color, radius, ctx){
        this.color = color
        this.radius = radius
        this.ctx = ctx
    }
    draw(c){
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.radius ,this.radius)
    }
    move(){
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

export default Ball