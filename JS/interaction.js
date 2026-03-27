const canvas2 = document.getElementById("canvas2")
const c2 = canvas2.getContext('2d')


canvas2.width = 1500
canvas2.height = 200

c2.fillRect(0,0, canvas2.width, canvas2.height)

c2.font = "30px Arial";

c2.fillStyle = "white";

c2.fillText("Action :", 30, 50);

function drawbutton(bouton){
    c2.fillStyle = 'grey'
    c2.fillRect(bouton.x,bouton.y,bouton.width,bouton.height)

    c2.fillStyle = "white";
    c2.font = "20px Arial";
    c2.textAlign = "center";
    c2.textBaseline = "middle";
    c2.fillText(
        bouton.message,
        bouton.x + bouton.width / 2,
        bouton.y + bouton.height / 2
    );
}

const bouton1 = {
    x: 175,
    y: 45,
    width: 250,
    height:100,
    message: "Consomable"
}

const bouton2 = {
    x: 500,
    y: 45,
    width: 250,
    height:100,
    message: "Amélioraton"
}

const bouton3 = {
    x: 850,
    y: 45,
    width: 250,
    height:100,
    message: "Équipement"
}

const bouton4 = {
    x: 1175,
    y: 45,
    width: 250,
    height:100,
    message: "Abandonner"
}

drawbutton(bouton1)
drawbutton(bouton2)
drawbutton(bouton3)
drawbutton(bouton4)

document.addEventListener('click', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
});