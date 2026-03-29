const canvas = document.getElementById("canvas")
const c = canvas.getContext('2d')




const player = new Player("louis",{x : 100, y : 100}, 10,"img/player.png")
const obj = new Obj()
const ennemi1 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 1)
const ennemi2 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.8)
const ennemi3 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.6)


let lastTime = 0

function mapSize(){
    canvas.width = window.innerWidth*8/10
    canvas.height = window.innerHeight*7.5/10;
}

function hasardEnnemis(max){
        return Math.floor(Math.random() * max);
    }

function draw(){
    
    player.move()

    requestAnimationFrame(draw)
    c.fillStyle = 'grey'
    c.fillRect(0,0, canvas.width, canvas.height)
    player.draw()
    ennemiC()
    obj.drawObj()
    obj.take()
    drawStats()
    
}

function ennemiC(){
    ennemi1.drawEnnemis()
    ennemi1.fight()
    ennemi1.move()

    ennemi2.drawEnnemis()
    ennemi2.fight()
    ennemi2.move()

    ennemi3.drawEnnemis()
    ennemi3.fight()
    ennemi3.move()
}

mapSize()

requestAnimationFrame(draw)
