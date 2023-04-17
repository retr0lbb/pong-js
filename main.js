import Ball from "./Classes/ball.class"

const canva = document.querySelector("#canvas")
const ctx = canva.getContext('2d')

console.log(ctx)


canva.width = 1024
canva.height = 576
ctx.fillStyle = 'black'
ctx.fillRect(0,0, canvas.width, canvas.height)

const ball = new Ball('rgb(255,255,255)', 15, ctx)


ball.velocity.x =2
ball.velocity.y =1
function animate(){
  requestAnimationFrame(animate)
  refresh()
  ballColider()
  ball.move()
  ball.draw(ctx)
}
animate()


function refresh(){
ctx.fillStyle = 'black'
ctx.fillRect(0,0, canva.width, canva.height)
}

function ballColider(){
  if(ball.position.x + ball.radius >canva.width || ball.position.x < canva.width - canva.width ){
    ball.velocity.x = ball.velocity.x *-1
    ball.color = `rgb(${Math.floor(Math.random() *255)}, ${Math.floor(Math.random() *255)}, ${Math.floor(Math.random() *255)})`

  }else if(ball.position.y < canva.height -canva.height || ball.position.y + ball.radius> canva.height){
    ball.velocity.y = ball.velocity.y *-1
    ball.color = `rgb(${Math.floor(Math.random() *255)}, ${Math.floor(Math.random() *255)}, ${Math.floor(Math.random() *255)})`

  }
}

function randomNumber(){
  
}