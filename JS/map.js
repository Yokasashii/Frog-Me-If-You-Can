const canvas = document.getElementById("canvas")
const c = canvas.getContext('2d')

let player, obj, exit, ennemi1, ennemi2, ennemi3, ennemi4, ennemi5, nb;

function start(){
    if (player == null){
        player = new Player("louis",{x : hasardEnnemis(canvas.width), y : hasardEnnemis(canvas.height)}, 10,"img/player.png")
    } else {
        player.setPositionX(hasardEnnemis(canvas.width))
        player.setPositionY(hasardEnnemis(canvas.height))
    }
    obj = new Obj(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height),55,55)

    if (obj.getPositionX() < canvas.width/2){
        obj.setPositionX(obj.getPositionX() + 20)
    }else {
        obj.setPositionX(obj.getPositionX() - 20)
    }

    if (obj.getPositionY() < canvas.height/2){
        obj.setPositionY(obj.getPositionY() + 20)
    }else {
        obj.setPositionY(obj.getPositionY() - 20)
    }

    exit = new Exit(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height))
    if (exit.getPositionX() < canvas.width/2){
        exit.setPositionX(exit.getPositionX() + 20)
    }else {
        exit.setPositionX(exit.getPositionX() - 20)
    }

    if (exit.getPositionY() < canvas.height/2){
        exit.setPositionY(exit.getPositionY() + 20)
    }else {
        exit.setPositionY(exit.getPositionY() - 20)
    }
    nb = hasardEnnemis(6)
    if (nb == 0 ||nb == 1 || nb == 2 || nb == 3){
        ennemi1 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 1)
        ennemi2 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.8)
        ennemi3 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.6)
    } else if (nb == 4){
        ennemi1 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 1)
        ennemi2 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.8)
        ennemi3 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.6)
        ennemi4 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.4)
    } else if (nb == 5){
        ennemi1 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 1)
        ennemi2 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.8)
        ennemi3 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.6)
        ennemi4 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.4)
        ennemi5 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.2)
    }
}

function drawDefeat(){

}

function drawWin(){

}


function mapSize(){
    canvas.width = window.innerWidth*8/10
    canvas.height = window.innerHeight*7.5/10;
}

function hasardEnnemis(max){
        return Math.floor(Math.random() * max);
    }

function loose(){
    if (player.getLife() <= 0){
        drawDefeat()
    }
    
}

function win(stateGame){
    if (stateGame){
        drawWin()
    }
}

function draw(){
    
    player.move()

    requestAnimationFrame(draw)
    c.fillStyle = 'grey'
    c.fillRect(0,0, canvas.width, canvas.height)
    player.draw()
    loose()
    win(false)
    ennemiC()
    exit.drawExit()
    exit.newMap()
    obj.drawObj()
    obj.take()
    drawStats()
}



function ennemiC(){
    if (nb == 0 ||nb == 1 || nb == 2 || nb == 3){
        ennemi1.drawEnnemis()
        ennemi1.move()
        ennemi1.fight()

        ennemi2.drawEnnemis()
        ennemi2.move()
        ennemi2.fight()

        ennemi3.drawEnnemis()
        ennemi3.move()
        ennemi3.fight()
    } else if (nb == 4){
        ennemi1.drawEnnemis()
        ennemi1.move()
        ennemi1.fight()

        ennemi2.drawEnnemis()
        ennemi2.move()
        ennemi2.fight()

        ennemi3.drawEnnemis()
        ennemi3.move()
        ennemi3.fight()

        ennemi4.drawEnnemis()
        ennemi4.move()
        ennemi4.fight()
    } else if (nb == 5){
        ennemi1.drawEnnemis()
        ennemi1.move()
        ennemi1.fight()

        ennemi2.drawEnnemis()
        ennemi2.move()
        ennemi2.fight()

        ennemi3.drawEnnemis()
        ennemi3.move()
        ennemi3.fight()

        ennemi4.drawEnnemis()
        ennemi4.move()
        ennemi4.fight()

        ennemi5.drawEnnemis()
        ennemi5.move()
        ennemi5.fight()
    }
    
}

mapSize()
start()
requestAnimationFrame(draw)
