class Player{

    position = {
        x:40,
        y:40
    }
    speed = 0

    constructor(width, height, color, ctx){
        this.width = width
        this.height = height
        this.color = color
        this.ctx = ctx
    }
    draw(ctx){
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width ,this.height)
    }
    move(){
        this.position.y += this.speed
    }
}

export default Player