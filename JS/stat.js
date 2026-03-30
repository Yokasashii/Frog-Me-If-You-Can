const canvas1 = document.getElementById("canvas1")
const c1 = canvas1.getContext('2d')

    function statSize(){
        canvas1.width = window.innerWidth*1.8/10
        canvas1.height = window.innerHeight*7.5/10;
    }

function drawStats(){

    statSize()

    c1.fillRect(0,0, canvas1.width, canvas1.height)
 
    c1.font = "30px Arial";

    c1.fillStyle = "white";

    c1.fillText("Stat :", 110, 40);

    c1.font = "20px Arial";
    c1.fillText(`PV :         ${player.getStat().hp} / ${player.getStat().maxHp}`, 10, 80);
    c1.fillText(`MP :         ${player.getStat().mp} / ${player.getStat().mpMax}`, 10, 120);
    c1.fillText(`EL :          ${player.getStat().el} / ${player.getStat().elMax}`, 10, 160);

    c1.font = "30px Arial";
    c1.fillText("Inventory :", 70, 220);

    
    c1.font = "20px Arial";
    c1.fillText(`Café :          ${player.getInventoryCafe()} / ${player.getInventoryCafeMax()}`, 10, 260);
    c1.fillText(`Chocolat :    ${player.getInventoryChocolat()} / ${player.getInventoryChocolatMax()}`, 10, 290);
    c1.fillText(`Vitamine :     ${player.getInventoryVitamine()} / ${player.getInventoryVitamineMax()}`, 10, 320);

    c1.font = "30px Arial";
    c1.fillText("SCORE :", 70, 380);

    c1.font = "100px Arial";
    c1.fillText(`${player.score}`, 33, 500);
}