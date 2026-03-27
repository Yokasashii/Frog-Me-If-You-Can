const canvas2 = document.getElementById("canvas2")
const c2 = canvas2.getContext('2d')


canvas2.width = 1500
canvas2.height = 200

c2.fillRect(0,0, canvas2.width, canvas2.height)

c2.font = "30px Arial";

c2.fillStyle = "white";

c2.fillText("Action :", 60, 50);