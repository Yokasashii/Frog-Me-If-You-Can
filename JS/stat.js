const canvas1 = document.getElementById("canvas1")
const c1 = canvas1.getContext('2d')

const BackgroundImg = new Image()
BackgroundImg.src = "../Assets/Background/Sprite - StateSheet.png"

//stat era configuration

    function statSize(){
        canvas1.width = window.innerWidth*1.89/10
        canvas1.height = window.innerHeight*7.5/10;
    }

function drawStats(){

    statSize()

    if (BackgroundImg.complete && BackgroundImg.naturalWidth > 0) {
        const scale = Math.max(canvas1.width / BackgroundImg.width, canvas1.height / BackgroundImg.height)
        const drawWidth = BackgroundImg.width * scale
        const drawHeight = BackgroundImg.height * scale
        const offsetX = (canvas1.width - drawWidth) / 2
        const offsetY = (canvas1.height - drawHeight) / 2
        c1.drawImage(BackgroundImg, offsetX, offsetY, drawWidth, drawHeight)
    }
 
    c1.fillStyle = "white"

    // basic stat : Health Point, Move Point, Extrat lifes and level
    const baseX = canvas1.width * 0.16
    const baseY = canvas1.height * 0.32
    const lineSpacing = canvas1.height * 0.08

    c1.font = Math.floor(canvas1.width * 0.05) + "px Arial"
    c1.fillText(`${player.getStat().hp} / ${player.getStat().maxHp}`, baseX, baseY)
    c1.fillText(`${player.getStat().mp} / ${player.getStat().mpMax}`, baseX, baseY + lineSpacing)
    c1.fillText(`${player.getStat().el} / ${player.getStat().elMax}`, baseX, baseY + lineSpacing * 2)

    // inventory: café, chocolat, vitamine
    const inventoryY = canvas1.height * 0.78
    const inventoryXOffset = canvas1.width * 0.25

    c1.fillText(`${player.getInventoryCafe()} / ${player.getInventoryCafeMax()}`, baseX, inventoryY)
    c1.fillText(`${player.getInventoryChocolat()} / ${player.getInventoryChocolatMax()}`, baseX + inventoryXOffset, inventoryY)
    c1.fillText(`${player.getInventoryVitamine()} / ${player.getInventoryVitamineMax()}`, baseX + inventoryXOffset * 2, inventoryY)

    // score
    c1.font = Math.floor(canvas1.width * 0.25) + "px Arial"
    c1.fillText(`${player.score}`, canvas1.width * 0.25, canvas1.height * 0.95)
}