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
 
    c1.font = "30px Arial";

    c1.fillStyle = "white";


    // basic stat : Health Point, Move Point, Extrat lifes and level

    c1.font = "20px Arial";
    c1.fillText(`${player.getStat().hp} / ${player.getStat().maxHp}`, 120, 240);
    c1.fillText(`${player.getStat().mp} / ${player.getStat().mpMax}`, 120, 310);
    c1.fillText(`${player.getStat().el} / ${player.getStat().elMax}`, 120, 370);

    c1.font = "30px Arial";

    
    //all object, café is for MP, chocolate for HP and Vitamine for the next level.

    c1.font = "20px Arial";
    c1.fillText(`${player.getInventoryCafe()} / ${player.getInventoryCafeMax()}`, 105, 620);
    c1.fillText(`${player.getInventoryChocolat()} / ${player.getInventoryChocolatMax()}`, 240, 620);
    c1.fillText(`${player.getInventoryVitamine()} / ${player.getInventoryVitamineMax()}`, 380, 620);

    c1.font = "30px Arial";

    c1.font = "100px Arial";
    c1.fillText(`${player.score}`, 160, 775);
}