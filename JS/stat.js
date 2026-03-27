const canvas1 = document.getElementById("canvas1")
const c1 = canvas1.getContext('2d')

canvas1.width = 290
canvas1.height = 650

c1.fillRect(0,0, canvas1.width, canvas1.height)

c1.font = "30px Arial";

c1.fillStyle = "white";

c1.fillText("Stat :", 110, 40);

c1.font = "20px Arial";
c1.fillText("PV :", 10, 80);
c1.fillText("MP :", 10, 120);
c1.fillText("EL :", 10, 160);

c1.font = "30px Arial";
c1.fillText("Inventory :", 70, 220);

c1.font = "20px Arial";
c1.fillText("Café :", 10, 260);
c1.fillText("Chocolat :", 10, 290);
c1.fillText("Vitamine :", 10, 320);