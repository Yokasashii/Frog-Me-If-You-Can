const canvas2 = document.getElementById("canvas2")
const c2 = canvas2.getContext('2d')

function actionSize(){
    canvas2.width =  window.innerWidth*9.91/10;
    canvas2.height =  window.innerHeight*1.7/10;
}

actionSize()


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


const bouton = {
    x: 25,
    y: 60,
    width: 250,
    height:100,
    message: "espace attaque"
}

const bouton1 = {
    x: 285,
    y: 60,
    width: 250,
    height:100,
    message: "1 Consomable"
}

const bouton2 = {
    x: 545,
    y: 60,
    width: 250,
    height:100,
    message: "2 Amélioraton"
}

const bouton3 = {
    x: 805,
    y: 60,
    width: 250,
    height:100,
    message: "3 Équipement"
}

const bouton4 = {
    x: 1065,
    y: 60,
    width: 250,
    height:100,
    message: "4 Abandonner"
}

drawbutton(bouton)
drawbutton(bouton1)
drawbutton(bouton2)
drawbutton(bouton3)
drawbutton(bouton4)

document.addEventListener('click', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
});