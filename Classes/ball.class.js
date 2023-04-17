class Ball{

    position={
        x: 500,
        y: 500
    }
    velocity = {
        x:-1,
        y:-1
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