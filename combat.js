function combat(joueur, ennemis){

    let finish;

    if (joueur[stat][speed] >= ennemis[stat][speed]){
        joueur[turn] = 1;
        ennemis[turn] = 0;
    } else {
        joueur[turn] = 0;
        ennemis[turn] = 1;
    }

    while(joueur[stat][hp] >= 0 || ennemis[stat][hp] >= 0){
        console.log("début du tour")
        if (joueur[turn] == 1){
            playerTurn(joueur, ennemis)
            joueur[turn] = 0
            ennemis[turn] = 1
        } else {
            ennemiTurn(joueur, ennemis)
            joueur[turn] = 1
            ennemis[turn] = 0
        }
        console.log("fin du tour")
    }

    finish = victoire(joueur,ennemis)

    return finish
}



function victoire(joueur,ennemis) {
    if (ennemis[stat][hp] >= 0) {
        joueur[stat][xp] += ennemis[loot][xp]
        console.log("vous avez gagner ",ennemis[loot][xp]," xp!")
        if (joueur[stat][xp] >= joueur[stat][xpToNext]){
            joueur[stat][xp] +=1
            console.log("vous avez gagner un niveau!")
            console.log("Xp actuelle : ", joueur[stat][xp] )
        } else {
            console.log("xp actuelle : ", joueur[stat][xp] )
        }
        joueur[gold] += ennemis[loot][gold]
        console.log("vous avez gagner ",ennemis[loot][xp],"")
            
        joueur[stat][xp] += ennemis[loot][xp]
        
        console.log("vous pouvez continuer à avancer")
        return true
    } else if (joueur[stat][hp] >= 0){
        console.log("vous êtes inconcient, un castor vous a sauvé et ramené dans un étage plus tranquille")
        return false
    }

}


function playerTurn(joueur,ennemis){


}


function ennemiTurn(joueur,ennemis){


}