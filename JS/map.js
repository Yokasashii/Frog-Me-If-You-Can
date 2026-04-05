const canvas = document.getElementById("canvas")
const c = canvas.getContext('2d')

let player, obj, exit, ennemi1, ennemi2, ennemi3, ennemi4,nb,currentMap;
let currentMapIndex = 0;


//first start parameter of a stage
function start(){

    currentMapIndex = hasardEnnemis(Matricelist.length)
    currentMap = Matricelist[currentMapIndex]
    onTheMap(currentMap)

    if (player != null){
        actualScore()
    }
    player = playerSpawn(player)
    // ramdom parameter of the findobject localisation
    obj = ObjSpawn(obj)
    // ramdom parameter of the exit localisation
    exit = exitSpawn(exit)
    // ramdom number of ennemys
    const spawnedEnemies = ennemySpawn(ennemi1,ennemi2,ennemi3,ennemi4,nb)
    ennemi1 = spawnedEnemies.ennemi1
    ennemi2 = spawnedEnemies.ennemi2
    ennemi3 = spawnedEnemies.ennemi3
    ennemi4 = spawnedEnemies.ennemi4
    nb = spawnedEnemies.nb
    
}

//map configuaration
function mapSize(){
    canvas.width = window.innerWidth*8/10
    canvas.height = window.innerHeight*7.5/10;
}

function onTheMap(theCurrentMap){
    const theMap = theCurrentMap
    if (theMap==null) {
        return
    }

    const celluleW = canvas.width / 20
    const celluleH = canvas.height / 10

    for (let x = 0; x < theMap.length; x++){
        for (let y = 0; y < theMap[x].length; y++){
            const tile = theMap[x][y]
            if (tile !== " "){
                c.fillStyle = "black"
                c.fillRect(y * celluleW, x * celluleH, celluleW, celluleH)
            }
        }
    }
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
    onTheMap(currentMap)
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
