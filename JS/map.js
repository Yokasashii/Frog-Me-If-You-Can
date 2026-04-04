const canvas = document.getElementById("canvas")
const c = canvas.getContext('2d')

let player, obj, exit, ennemi1, ennemi2, ennemi3, ennemi4, ennemi5, nb;


// start parameter of a stage
function start(){
    if (player == null){
        player = new Player("louis",{x : hasardEnnemis(canvas.width), y : hasardEnnemis(canvas.height)}, 5,"../img/player.png")
    } else {
        player.setPositionX(hasardEnnemis(canvas.width))
        player.setPositionY(hasardEnnemis(canvas.height))
    }
    // ramdom parameter of the findobject localisation
    obj = new Obj(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height),55,55,10)

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

    // ramdom parameter of the exit localisation
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
    // ramdom number of ennemys
    nb = hasardEnnemis(3)
    if (nb == 0){
        ennemi1 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 1,55,55,10)
    } else if (nb == 1 || nb == 2){
        ennemi1 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 1,55,55,10)
        ennemi2 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.8,55,55,10)
    } else if (nb == 3){
        ennemi1 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 1,55,55,10)
        ennemi2 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.8,55,55,10)
        ennemi3 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.6,55,55,10)
    }
}

//map configuaration
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


//draw the game and update the map

function draw(){
    
    player.move()
    player.attackMoment()
    player.die()

    requestAnimationFrame(draw)
    c.fillStyle = 'grey'
    c.fillRect(0,0, canvas.width, canvas.height)
    player.draw()
    ennemiC()
    exit.drawExit()
    exit.newMap()
    obj.drawObj()
    obj.take()
    drawStats()
}


//ennemy generation
function ennemiC(){
    if (nb == 0 ||nb == 1){
        ennemi1.drawEnnemis()
        ennemi1.move()
        ennemi1.fight()

    } else if (nb == 2){
        ennemi1.drawEnnemis()
        ennemi1.move()
        ennemi1.fight()

        ennemi2.drawEnnemis()
        ennemi2.move()
        ennemi2.fight()

    } else if (nb == 3){
        ennemi1.drawEnnemis()
        ennemi1.move()
        ennemi1.fight()

        ennemi2.drawEnnemis()
        ennemi2.move()
        ennemi2.fight()

        ennemi3.drawEnnemis()
        ennemi3.move()
        ennemi3.fight()

    }
    
}

mapSize()
start()
requestAnimationFrame(draw)
