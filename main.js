import Ball from "./Classes/ball.class"
import Player from "./Classes/player.class"

const canva = document.querySelector("#canvas")
const ctx = canva.getContext('2d')

console.log(ctx)


canva.width = 1024
canva.height = 576
ctx.fillStyle = 'black'
ctx.fillRect(0,0, canvas.width, canvas.height)

const ball = new Ball('rgb(255,255,255)', 15, ctx)
const player = new Player(50, 150, 'rgb(255, 255, 255)', ctx)
const bot = new Player(50, 150, 'rgb(255, 0, 0)', ctx)

bot.position.x = 934
bot.position.y = 288 -bot.height/2
restart()

function animate(){
  requestAnimationFrame(animate)
  refresh()
  ballColider()
  ball.move()
  ball.draw(ctx)

  playerCollider()
  playerMove()
  player.move()
  player.draw(ctx) 

  botCollider()
  bot.draw(ctx)
  botMoveTest()
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
    ball.velocity.x += ball.velocity.x /5
    restart()
  }else if(ball.position.y < canva.height -canva.height || ball.position.y + ball.radius> canva.height){
    ball.velocity.y = ball.velocity.y *-1
    ball.color = `rgb(${Math.floor(Math.random() *255)}, ${Math.floor(Math.random() *255)}, ${Math.floor(Math.random() *255)})`
    ball.velocity.y += ball.velocity.y /5
    
  }
}

function restart(){
  ball.position.x = canva.width/2 + ball.radius/2
  ball.position.y = canva.height/2 - ball.radius/2

  let directions = [1,-1,2,-2,3,-3,4,-4,5,-5]

  ball.velocity.y = directions[Math.floor(Math.random() * directions.length)]
  ball.velocity.x = directions[Math.floor(Math.random() * directions.length)]
  
}

function playerMove(){
  if(player.position.y < canva.height - canva.height){
    player.speed = 0
    player.position.y -= -1
  }else if(player.position.y + player.height > canva.height){
    player.speed = 0
    player.position.y -= 1
  }
  window.addEventListener('keydown',(event)=>{
    if(event.key === 'w'){
      player.speed = -4
    }else if(event.key ==='s'){
      player.speed = 4
    }
  })
  window.addEventListener('keyup', (event) =>{
    if(event.key==='w'){
      player.speed = 0
    }else if(event.key =='s'){
      player.speed  = 0
    }
  })
}

function playerCollider(){
  if(ball.position.x < player.position.x + player.width && ball.position.x > player.position.x){
    ball.velocity.x = ball.velocity.x *-1
  }
}
function botCollider(){

  if(bot.position.x + bot.width >= ball.position.x 
    && bot.position.x <= ball.position.x + ball.radius
    && bot.position.y + bot.height >= ball.position.y 
    && bot.position.y<= ball.position.y + ball.radius){
    ball.velocity.x = ball.velocity.x *-1
  }
}

function botMoveTest(){
  bot.position.y = ball.position.y -bot.height/2
}

