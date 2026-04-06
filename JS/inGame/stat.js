const canvas1 = document.getElementById("canvas1")
const c1 = canvas1.getContext('2d')

const Background1Img = new Image()
const Background2Img = new Image()
const Background3Img = new Image()
const Background4Img = new Image()
const Background5Img = new Image()
const Background6Img = new Image()
const Background7Img = new Image()
const Background8Img = new Image()
const Background9Img = new Image()
const Background10Img = new Image()

Background1Img.src = "../Assets/Background/Stats/Sprite - StateSheet1.png"
Background2Img.src = "../Assets/Background/Stats/Sprite - StateSheet2.png"
Background3Img.src = "../Assets/Background/Stats/Sprite - StateSheet3.png"
Background4Img.src = "../Assets/Background/Stats/Sprite - StateSheet4.png"
Background5Img.src = "../Assets/Background/Stats/Sprite - StateSheet5.png"
Background6Img.src = "../Assets/Background/Stats/Sprite - StateSheet6.png"
Background7Img.src = "../Assets/Background/Stats/Sprite - StateSheet7.png"
Background8Img.src = "../Assets/Background/Stats/Sprite - StateSheet8.png"
Background9Img.src = "../Assets/Background/Stats/Sprite - StateSheet9.png"
Background10Img.src = "../Assets/Background/Stats/Sprite - StateSheetX.png"

const backgroundByLevel = {
    1: Background1Img,
    2: Background2Img,
    3: Background3Img,
    4: Background4Img,
    5: Background5Img,
    6: Background6Img,
    7: Background7Img,
    8: Background8Img,
    9: Background9Img,
    10: Background10Img
}

function getBackgroundForLevel(level) {
    return backgroundByLevel[level] || Background10Img
}

//stat era configuration

    function statSize(){
        canvas1.width = window.innerWidth*1.89/10
        canvas1.height = window.innerHeight*7.5/10;
    }

function drawStats(){

    statSize()
    const currentLevel = player ? player.getLevel() : 1
    const actualBackground = getBackgroundForLevel(currentLevel)

    if (actualBackground.complete && actualBackground.naturalWidth > 0) {
        const scale = Math.max(canvas1.width / actualBackground.width, canvas1.height / actualBackground.height)
        const drawWidth = actualBackground.width * scale
        const drawHeight = actualBackground.height * scale
        const offsetX = (canvas1.width - drawWidth) / 2
        const offsetY = (canvas1.height - drawHeight) / 2
        c1.drawImage(actualBackground, offsetX, offsetY, drawWidth, drawHeight)
    }
 
    c1.fillStyle = "white"

    // basic stat : Health Point, Move Point, Extrat lifes and level
    const baseX = canvas1.width * 0.22
    const baseX2 = canvas1.width * 0.18
    const baseY = canvas1.height * 0.31
    const lineSpacing = canvas1.height * 0.08

    c1.font = Math.floor(canvas1.width * 0.05) + "px Arial"
    c1.fillText(`${player.getStat().hp} / ${player.getStat().maxHp}`, baseX, baseY)
    c1.fillText(`${player.getStat().mp} / ${player.getStat().mpMax}`, baseX, baseY + lineSpacing)
    c1.fillText(`${player.getStat().el} / ${player.getStat().elMax}`, baseX, baseY + lineSpacing * 1.78)

    // inventory: café, chocolat, vitamine
    const inventoryY = canvas1.height * 0.71
    const inventoryXOffset = canvas1.width * 0.25

    c1.fillText(`${player.getInventoryCafe()} / ${player.getInventoryCafeMax()}`, baseX2, inventoryY)
    c1.fillText(`${player.getInventoryChocolat()} / ${player.getInventoryChocolatMax()}`, baseX2 + inventoryXOffset, inventoryY)
    c1.fillText(`${player.getInventoryVitamine()} / ${player.getInventoryVitamineMax()}`, baseX2 + inventoryXOffset * 2.05, inventoryY)

    // score
    c1.font = Math.floor(canvas1.width * 0.25) + "px Arial"
    c1.fillText(`${player.score}`, canvas1.width * 0.25, canvas1.height * 0.95)
}