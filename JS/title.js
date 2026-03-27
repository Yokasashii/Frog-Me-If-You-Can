const canvastitle = document.getElementById("title")
const cT = canvastitle.getContext('2d')

canvastitle.width = 1500
canvastitle.height = 100

cT.fillRect(0,0, canvastitle.width, canvastitle.height)

cT.font = "30px Arial";

cT.fillStyle = "white";

cT.fillText(" Frog me if you can !", 575, 60);
