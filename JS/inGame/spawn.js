// player spawn in free aera
function playerSpawn(player){
    let theX = 0
    let theY = 0
    while (currentMap[canvasToMatrixX(theY, canvas)][canvasToMatrixY(theX, canvas)] != " "){
        theX = universalRandom(canvas.width)
        theY = universalRandom(canvas.height)
    }
    
    if (player == null){
        player = new Player("louis",{x : theX, y : theY}, 5,"../Assets/Character/Sprite - PlayerL.png")
    } else {
        player.setPositionX(theX)
        player.setPositionY(theY)
    }

    return player
}

// object spawn in free aera
function ObjSpawn(obj){
    if (obj == null || obj.width === 0 || obj.height === 0) {
        obj = new Obj(universalRandom(canvas.width), universalRandom(canvas.height), 55, 55)
    }

    while (currentMap[canvasToMatrixX(obj.getPositionY(), canvas)][canvasToMatrixY(obj.getPositionX(), canvas)] != " "){
        obj = new Obj(universalRandom(canvas.width), universalRandom(canvas.height), 55, 55)
    }
    return obj
}

// exit spawn in free aera
function exitSpawn(exit){
    exit = new Exit(universalRandom(canvas.width),universalRandom(canvas.height), false)

    while (currentMap[canvasToMatrixX(exit.getPositionY(), canvas)][canvasToMatrixY(exit.getPositionX(), canvas)] != " "){
        exit = new Exit(universalRandom(canvas.width),universalRandom(canvas.height), false)
    }
    return exit
}

// general spawn of the ennemy
function ennemySpawn(ennemi1,ennemi2,ennemi3,ennemi4,nb){
    nb = universalRandom(5)
    if (nb == 0){
        ennemi1 = ennemySpawnDetails(ennemi1, 1.5,55,55,10,20,false,"runner",1500, "../Assets/Character/Sprite - Didier.png")

    } else if (nb == 1 || nb == 2){
        ennemi1 = ennemySpawnDetails(ennemi1, 1.5,55,55,10,20,false,"runner",1500, "../Assets/Character/Sprite - Didier.png")
        ennemi2 = ennemySpawnDetails(ennemi2, 0.8,55,55,20,35,false,"normal",1500, "../Assets/Character/Sprite - Sylvie.png")
        
    } else if (nb == 3){
        ennemi1 = ennemySpawnDetails(ennemi1, 1.5,55,55,15,20,false,"runner",1500, "../Assets/Character/Sprite - Didier.png")
        ennemi2 = ennemySpawnDetails(ennemi2, 0.8,55,55,20,35,false,"normal",1500, "../Assets/Character/Sprite - Sylvie.png")
        ennemi3 = ennemySpawnDetails(ennemi3, 0.4,75,75,35,10,false,"fat",3000, "../Assets/Character/Sprite - Patron.png")
    } else if (nb == 4){
        ennemi1 = ennemySpawnDetails(ennemi1, 1.5,55,55,15,10,false,"runner",1500, "../Assets/Character/Sprite - Didier.png")
        ennemi2 = ennemySpawnDetails(ennemi2, 0.8,55,55,20,35,false,"normal",1500, "../Assets/Character/Sprite - Sylvie.png")
        ennemi3 = ennemySpawnDetails(ennemi3, 0.4,100,100,35,75,false,"fat",3000, "../Assets/Character/Sprite - Patron.png")
        ennemi4 = ennemySpawnDetails(ennemi4, 0.6,55,55,20,35,false,"stopper",2000, "../Assets/Character/Sprite - Didier.png")
        
    }

    return { ennemi1, ennemi2, ennemi3, ennemi4, nb }
}


function ennemySpawnDetails(ennemy, velocity, width, height, attack, hp, statusLife, special, enemyCooldown,img){
    let x = 0    
    let y = 0
    if (special == "stopper"){
        x = exit.getPositionX()
        y = exit.getPositionY()
    } else {
        while (currentMap[canvasToMatrixX(y, canvas)][canvasToMatrixY(x, canvas)] != " "){
            x =universalRandom(canvas.width)
            y =universalRandom(canvas.height)
                
        }
    }
    
    ennemy = new Ennemis(x,y,velocity,width,height,attack,hp,statusLife,special,enemyCooldown,img)
    return ennemy
}