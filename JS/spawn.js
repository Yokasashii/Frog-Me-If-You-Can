function playerSpawn(player){
    if (player == null){
        player = new Player("louis",{x : hasardEnnemis(canvas.width), y : hasardEnnemis(canvas.height)}, 5,"../img/player.png")
    } 

    let theX = 0
    let theY = 0
    while (currentMap[canvasToMatrixX(theY, canvas)][canvasToMatrixY(theX, canvas)] != " "){
        theX = hasardEnnemis(canvas.width)
        theY = hasardEnnemis(canvas.height)
    }
    
    player = new Player("louis",{x : theX, y : theY}, 5,"../img/player.png")
    return player
}

function ObjSpawn(obj){
    if (obj == null) {
        obj = new Obj(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height),55,55,10)
    }

    while (currentMap[canvasToMatrixX(obj.getPositionY(), canvas)][canvasToMatrixY(obj.getPositionX(), canvas)] != " "){
        obj = new Obj(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height),55,55,10)
    }
    return obj
}

function exitSpawn(exit){
    if (exit == null) {
        exit = new Exit(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), false)
    }

    while (currentMap[canvasToMatrixX(exit.getPositionY(), canvas)][canvasToMatrixY(exit.getPositionX(), canvas)] != " "){
        exit = new Exit(hasardEnnemis(canvas.width),hasardEnnemis(canvas.height), false)
    }
    return exit
}

function ennemySpawn(ennemi1,ennemi2,ennemi3,ennemi4,nb){
    nb = hasardEnnemis(5)
    if (nb == 0){
        ennemi1 = ennemySpawnDetails(ennemi1, 1.5,55,55,10,20,false,"runner",1500)

    } else if (nb == 1 || nb == 2){
        ennemi1 = ennemySpawnDetails(ennemi1, 1.5,55,55,10,20,false,"runner",1500)
        ennemi2 = ennemySpawnDetails(ennemi2, 0.8,55,55,20,35,false,"normal",1500)
        
    } else if (nb == 3){
        ennemi1 = ennemySpawnDetails(ennemi1, 1.5,55,55,15,20,false,"runner",1500)
        ennemi2 = ennemySpawnDetails(ennemi2, 0.8,55,55,20,35,false,"normal",1500)
        ennemi3 = ennemySpawnDetails(ennemi3, 0.4,75,75,35,10,false,"fat",3000)
    } else if (nb == 4){
        ennemi1 = ennemySpawnDetails(ennemi1, 1.5,55,55,15,10,false,"runner",1500)
        ennemi2 = ennemySpawnDetails(ennemi2, 0.8,55,55,20,35,false,"normal",1500)
        ennemi3 = ennemySpawnDetails(ennemi3, 0.4,100,100,35,75,false,"fat",3000)
        ennemi4 = ennemySpawnDetails(ennemi4, 0.6,55,55,20,35,false,"stopper",2000)
        
    }

    return { ennemi1, ennemi2, ennemi3, ennemi4, nb }
}

function ennemySpawnDetails(ennemy, velocity, width, height, attack, hp, statusLife, special, enemyCooldown){
    let x = 0    
    let y = 0
    while (currentMap[canvasToMatrixX(y, canvas)][canvasToMatrixY(x, canvas)] != " "){
        x =hasardEnnemis(canvas.width)
        y =hasardEnnemis(canvas.height)
            
    }
    ennemy = new Ennemis(x,y,velocity,width,height,attack,hp,statusLife,special,enemyCooldown)
    return ennemy
}