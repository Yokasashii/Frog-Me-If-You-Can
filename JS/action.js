const canvas2 = document.getElementById("canvas2")
const c2 = canvas2.getContext('2d')

//configurattion 
function actionSize(){
    canvas2.width =  window.innerWidth*9.91/10;
    canvas2.height =  window.innerHeight*1.7/10;
}

actionSize()


c2.fillRect(0,0, canvas2.width, canvas2.height)

c2.font = "30px Arial";

c2.fillStyle = "white";

c2.fillText("Touche :", 30, 50);

function drawbutton(TheButton){
    c2.fillStyle = 'grey'
    c2.fillRect(TheButton.x,TheButton.y,TheButton.width,TheButton.height)

    c2.fillStyle = "white";
    c2.font = "20px Arial";
    c2.textAlign = "center";
    c2.textBaseline = "middle";
    c2.fillText(
        TheButton.message,
        TheButton.x + TheButton.width / 2,
        TheButton.y + TheButton.height / 2
    );
}

// all type of button
const button = {
    x: 25,
    y: 60,
    width: 250,
    height:100,
    message: "espace attaque"
}

const button1 = {
    x: 285,
    y: 60,
    width: 250,
    height:100,
    message: "1 Chocolat"
}

const button2 = {
    x: 545,
    y: 60,
    width: 250,
    height:100,
    message: "2 café"
}

const button3 = {
    x: 805,
    y: 60,
    width: 250,
    height:100,
    message: "3 Amélioraton"
}

const button4 = {
    x: 1065,
    y: 60,
    width: 250,
    height:100,
    message: "4 Abandonner"
}

// draw all button

drawbutton(button)
drawbutton(button1)
drawbutton(button2)
drawbutton(button3)
drawbutton(button4)

document.addEventListener('click', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
});