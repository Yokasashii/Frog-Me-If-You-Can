const canvas = document.getElementById("canvas")
const c = canvas.getContext('2d')

canvas.width = 1200
canvas.height = 650

let playerX = 100
let playerY = 100
const playerImg = new Image();
playerImg.src = "img/player.png"


function move(){

    if (keys.get('KeyW')){
        playerY -= 10
    }

    if (keys.get('KeyS')){
        playerY += 10
    }

    if (keys.get('KeyA')){
        playerX -= 10
    }

    if (keys.get('KeyD')){
        playerX +=10
    }

    if (playerImg.complete) {
        c.drawImage(playerImg, playerX, playerY, 55, 55)
    }
}

function draw(){

    requestAnimationFrame(draw)
    c.fillStyle = 'grey'
    c.fillRect(0,0, canvas.width, canvas.height)

   move()
}

requestAnimationFrame(draw)
