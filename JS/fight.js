function theFight(joueur, ennemis){
    actualSaveEvironement()
    mapSize()
    drawStats()
    let finish;
    let ennemigroup = createGroup(ennemis)
    ennemigroup.drawEnnemis()

    if (joueur.getPriority() == true){
        joueur.setTurn(1);
        ennemigroup.setTurn(0);
    } else {
        joueur.setTurn(0);
        ennemigroup.setTurn(1);
    }

    while(joueur.getLife() > 0 || ennemigroup.getLife() > 0){
        console.log("début du tour")
        if (joueur.getTurn() == 1){
            const playerAction = playerTurn(joueur, ennemigroup)
            if (playerAction === "fuite") {
                console.log("vous quittez le combat")
                return true
            }
            drawStats()
            joueur.setTurn(0);
            ennemigroup.setTurn(1);
        } else {
            parade(ennemigroup,joueur)
            drawStats()
            joueur.setTurn(1);
            ennemigroup.setTurn(0);
        }
        console.log("fin du tour")
    }

    finish = victoire(joueur,ennemigroup)

    return finish
}



function victoire(joueur,ennemis) {
    if (ennemis.getLife() <= 0) {
        joueur.levelUp()
        ennemi1.setStatusLife(true)
        if (ennemi2 !=null){
            ennemi2.setStatusLife(true)
        }
        if (ennemi3 !=null){
            ennemi3.setStatusLife(true)
        }
        if (ennemi4 !=null){
            ennemi4.setStatusLife(true)
        }
        return restoreActualEnvironement()
    } else if (joueur.getLife() <= 0){
        return joueur.die()
    }

}


function playerTurn(joueur,ennemis){
    if (keys.get('Digit1')){
        ennemis.setLife(ennemis.getLife() - joueur.getAttack())
        return "attaque"
    }

    if (keys.get('Digit2')){
        if (joueur.getInventoryChocolat() > 0 && joueur.getLife() < joueur.getMaxLife()){
            joueur.setLife(joueur.getLife() + 10)
            if (joueur.getLife() > joueur.getMaxLife()) {
                joueur.setLife(joueur.getMaxLife())
            }
            joueur.setInventoryChocolat(joueur.getInventoryChocolat() - 1)
            return "soin"
        }
        return "soin-impossible"
    }

    if (keys.get('Digit3')){
        const fuiteReussie = Math.random() < 0.5
        if (fuiteReussie) {
            return "fuite"
        }
        joueur.setLife(joueur.getLife()-10)
        return "fuite-echouee"
    }

    return "aucune-action"

}

function parade(){
    let succes = false

    if (succes == true){
        return "esquive"
    } else {
        return ennemiTurn(joueur)
    }
}

function ennemiTurn(joueur){
    joueur.setLife(joueur.getLife()-10)
}

function actualSaveEvironement(){

}

function restoreActualEnvironement(xExit,yExit,xObj,yObj,currentMap){
    player.move()
    player.attackMoment()
    player.die()

    requestAnimationFrame(draw)
    c.fillStyle = 'grey'
    c.fillRect(0,0, canvas.width, canvas.height)
    onTheMap(currentMap)
    player.draw()
    exit.drawExit(xExit,yExit)
    exit.newMap()
    obj.drawObj(xObj,yObj)
    obj.take()
    drawStats()
}

function createGroup(ennemis){
    const list = Array.isArray(ennemis) ? ennemis.filter((e) => e != null) : [ennemis]

    let life = 0
    let attack = 0

    if (list.length > 0){
        for (let i = 0; i < list.length; i++){
            life += list[i].getLife()
            attack += list[i].getAttack()
        }
        attack = attack / list.length
    }

    let group = new Ennemis(canvas.width/2, canvas.height/2, 0, 200, 200, attack, life, false, "group", 0)
    return group
}