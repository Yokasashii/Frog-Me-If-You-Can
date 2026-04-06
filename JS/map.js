const canvas = document.getElementById("canvas")
const c = canvas.getContext('2d')

const wallHorizontalImg = new Image()
const wallVerticalImg = new Image()
const wallNEImg = new Image()
const wallNOImg = new Image()
const wallSEImg = new Image()
const wallSOImg = new Image()
const floorImg = new Image()
const wallNOEImg = new Image()
const wallSOEImg = new Image()
const wallNSOImg = new Image()
const wallNSEImg = new Image()
const wallDoubleImg = new Image()

//graphic element of a stage
wallHorizontalImg.src = "../Assets/Environement/Sprite - MurMid-Horizontal.png"
wallVerticalImg.src = "../Assets/Environement/Sprite - MurMid-Vertical.png"
wallNEImg.src = "../Assets/Environement/Sprite - MurMid-NordEst.png"
wallNOImg.src = "../Assets/Environement/Sprite - MurMid-NordOuest.png"
wallSEImg.src = "../Assets/Environement/Sprite - MurMid-SudEst-export.png"
wallSOImg.src = "../Assets/Environement/Sprite - MurMid-SudOuest.png"
floorImg.src = "../Assets/Environement/Sprite - Sol.png"
wallNOEImg.src = "../Assets/Environement/Sprite - MurMid-NordOuestEst.png"
wallSOEImg.src = "../Assets/Environement/Sprite - MurMid-SudOuestEst.png"
wallNSOImg.src = "../Assets/Environement/Sprite - MurMid-NordSudOuest.png"
wallNSEImg.src = "../Assets/Environement/Sprite - MurMid-NordSudEst.png"
wallDoubleImg.src = "../Assets/Environement/Sprite - MurMid-Double.png"

//global variable of game element
let player, obj, exit, ennemi1, ennemi2, ennemi3, ennemi4,nb,currentMap;
let currentMapIndex = 0;
let theEnd=0

const activeSlot = localStorage.getItem("frog.activeSlot") || "1";
const saveKey = `frog.slot.${activeSlot}`;
let rawSave = localStorage.getItem(saveKey);
let loadedSaveData = null;

function createDefaultSave() {
    return {
        version: 1,
        updatedAt: Date.now(),
        player: {
            hp: 100,
            maxHp: 100,
            mp: 50,
            mpMax: 50,
            level: 1,
            score: 0
        },
        world: {
            currentMapIndex: 0
        }
    }
}

if (rawSave == null) {
    const defaultSave = createDefaultSave()
    localStorage.setItem(saveKey, JSON.stringify(defaultSave))
    loadedSaveData = defaultSave
    console.log("save creee", saveKey)
} else {
    loadedSaveData = JSON.parse(rawSave)
    console.log("save deja existante", saveKey)
}

function saveCurrentGame(){
    if (!player) return
    
    const saveData = {
        version: 1,
        updatedAt: Date.now(),
        player: {
            hp: player.getLife(),
            maxHp: player.getMaxLife(),
            mp: player.getMp(),
            mpMax: player.getMaxMp(),
            level: player.getLevel(),
            score: player.getScore()
        },
        world: {
            currentMapIndex: currentMapIndex
        }
    }
    localStorage.setItem(saveKey, JSON.stringify(saveData))
    console.log("save mise a jour", saveKey)
}

function resetCurrentGameToDefault() {
    const defaultSave = createDefaultSave()
    localStorage.setItem(saveKey, JSON.stringify(defaultSave))
    loadedSaveData = defaultSave
    currentMapIndex = defaultSave.world.currentMapIndex
    console.log("save remise par defaut")
}

//start parameter of a new stage
function start(){
    if (theEnd == 10){
        window.location.href = "theEnd.html";
    } else {
        theEnd +=1
    }

    if (loadedSaveData && loadedSaveData.world && loadedSaveData.world.currentMapIndex >= 0) {
        currentMapIndex = loadedSaveData.world.currentMapIndex
    } else {
        currentMapIndex = hasardEnnemis(Matricelist.length)
    }
    currentMap = Matricelist[currentMapIndex]
    onTheMap(currentMap)

    if (player != null){
        actualScore()
    }
    player = playerSpawn(player)
    
    if (loadedSaveData && loadedSaveData.player) {
        player.setLife(loadedSaveData.player.hp)
        player.setMaxLife(loadedSaveData.player.maxHp)
        player.setMp(loadedSaveData.player.mp)
        player.setMaxMp(loadedSaveData.player.mpMax)
        player.setLevel(loadedSaveData.player.level)
        player.setScore(loadedSaveData.player.score)
        loadedSaveData = null
    }
    
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

// application of graphic element on the map with the matrixs
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
            if (tile === "-"){
                if (wallHorizontalImg.complete) {
                    c.drawImage(wallHorizontalImg, y * celluleW, x * celluleH, celluleW, celluleH)
                }
            } else if (tile === "|"){
                if (wallVerticalImg.complete) {
                    c.drawImage(wallVerticalImg, y * celluleW, x * celluleH, celluleW, celluleH)
                }
            } else if (tile == " "){
                if (floorImg.complete) {
                    c.drawImage(floorImg, y * celluleW, x * celluleH, celluleW, celluleH)
                }
            } else if (tile == "$"){
                if (wallNEImg.complete) {
                    c.drawImage(wallNEImg, y * celluleW, x * celluleH, celluleW, celluleH)
                }
            } else if (tile == "£"){
                if (wallSEImg.complete) {
                    c.drawImage(wallSEImg, y * celluleW, x * celluleH, celluleW, celluleH)
                }
            } else if (tile == "!"){
                if (wallNOImg.complete) {
                    c.drawImage(wallNOImg, y * celluleW, x * celluleH, celluleW, celluleH)
                }
            } else if (tile == "?"){
                if (wallSOImg.complete) {
                    c.drawImage(wallSOImg, y * celluleW, x * celluleH, celluleW, celluleH)
                }
            } else if (tile == "%"){
                if (wallNOEImg.complete) {
                    c.drawImage(wallNOEImg, y * celluleW, x * celluleH, celluleW, celluleH)
                }
            } else if (tile == "ù"){
                if (wallSOEImg.complete) {
                    c.drawImage(wallSOEImg, y * celluleW, x * celluleH, celluleW, celluleH)
                }
            } else if (tile == "µ"){
                if (wallNSOImg.complete) {
                    c.drawImage(wallNSOImg, y * celluleW, x * celluleH, celluleW, celluleH)
                }
            } else if (tile == "§"){
                if (wallNSEImg.complete) {
                    c.drawImage(wallNSEImg, y * celluleW, x * celluleH, celluleW, celluleH)
                }
            } else if (tile == "."){
                if (wallDoubleImg.complete) {
                    c.drawImage(wallDoubleImg, y * celluleW, x * celluleH, celluleW, celluleH)
                }
            }
        }
    }
}

//define the number of ennemys
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

const Slot = localStorage.getItem("frog.activeSlot")
console.log(Slot)