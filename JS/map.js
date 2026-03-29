const canvas = document.getElementById("canvas")
const c = canvas.getContext('2d')


function mapSize(){
    canvas.width = window.innerWidth*8/10
    canvas.height = window.innerHeight*7.5/10;
}

mapSize()

const player = new Player("louis",{x : 100, y : 100}, 10,"img/player.png")
const obj = new Obj()

let lastTime = 0


function draw(){

    player.move()

    requestAnimationFrame(draw)
    c.fillStyle = 'grey'
    c.fillRect(0,0, canvas.width, canvas.height)
    player.draw()
    obj.drawObj()
    obj.take()
    drawStats()
    
}

requestAnimationFrame(draw)
