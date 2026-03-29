const canvastitle = document.getElementById("title")
const cT = canvastitle.getContext('2d')

function titleSize(){
    canvastitle.width = window.innerWidth*9.91/10;
    canvastitle.height = window.innerHeight*0.5/10
}

titleSize()

cT.fillRect(0,0, canvastitle.width, canvastitle.height)

cT.font = "30px Arial";

cT.fillStyle = "white";

cT.fillText(" Frog me if you can !", canvastitle.width*4/10, canvastitle.height*2/3 );
