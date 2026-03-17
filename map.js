

function createMap(){

}

function deplacement(joueur){


}

function changeMap(){

}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function findObject(joueur, listThing){
    let nbthing = getRandomInt(10)
    console.log("vous avez trouver : ", listThing[nbthing] )
    
    if (joueur[inventory][listThing[nbthing]] < 10){
        joueur[inventory][listThing[nbthing]] += 1
    } else {
        console.log("vous portez deja assez de cette item")
    }
}