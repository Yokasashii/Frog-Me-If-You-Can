const canvas = document.getElementById("canvas")
const c = canvas.getContext('2d')

let player, obj, exit, ennemi1, ennemi2, ennemi3, ennemi4, nb;


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
    exit = new Exit(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), false)
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
    nb = hasardEnnemis(5)
    if (nb == 0){
        ennemi1 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 1.5,55,55,10,20,false ,"runner")
    } else if (nb == 1 || nb == 2){
        ennemi1 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 1.5,55,55,10,20,false,"runner")
        ennemi2 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.8,55,55,20,35, "normal")
    } else if (nb == 3){
        ennemi1 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 1.5,55,55,15,20,false,"runner")
        ennemi2 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.8,55,55,20,35,false, "normal")
        ennemi3 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.4,75,75,35,10,false, "fat")
    } else if (nb == 4){
        ennemi1 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 1.5,55,55,15,10,false,"runner")
        ennemi2 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.8,55,55,20,35,false, "normal")
        ennemi3 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.4,100,100,35,75,false,"fat")
        ennemi4 = new Ennemis(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), 0.6,55,55,20,35,false, "stopper")
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
    } 
    
}

function actualScore(){

    if(ennemi1.getStatusLife()){
        player.setScore(player.getScore()+150)
        ennemi1.setStatusLife(false)
    }

    if (ennemi2 != null){
        if(ennemi2.getStatusLife()){
            player.setScore(player.getScore()+100)
            ennemi2.setStatusLife(false)
        }
    }
    
    if (ennemi3 != null){
        if(ennemi3.getStatusLife()){
            player.setScore(player.getScore()+300)
            ennemi3.setStatusLife(false)
        }
    }

    if (ennemi4 != null){
        if(ennemi4.getStatusLife()){
            player.setScore(player.getScore()+100)
            ennemi4.setStatusLife(false)
        }
    }

    if(exit.getStatusExit()){
        player.setScore(player.getScore()+100)
        exit.setStatusExit(false)
    }
}


mapSize()
start()
requestAnimationFrame(draw)
