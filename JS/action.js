const canvas2 = document.getElementById("canvas2")
const c2 = canvas2.getContext('2d')

//configurattion 
universalCanvasSize(canvas2,9.91/10,1.7/10)


c2.fillRect(0,0, canvas2.width, canvas2.height)

c2.font = "30px Arial";

c2.fillStyle = "white";

c2.fillText("Touche :", 30, 50);

// all type of button
const action1 = {
    x: 25,
    y: 60,
    width: 250,
    height:100,
    message: "espace attaque"
}

const action2 = {
    x: 285,
    y: 60,
    width: 250,
    height:100,
    message: "1 Chocolat"
}

const action3 = {
    x: 545,
    y: 60,
    width: 250,
    height:100,
    message: "2 café"
}

const action4 = {
    x: 805,
    y: 60,
    width: 250,
    height:100,
    message: "3 Amélioraton"
}

const action5 = {
    x: 1065,
    y: 60,
    width: 250,
    height:100,
    message: "4 Abandonner"
}

// draw all button

universalDrawButton(c2, action1)
universalDrawButton(c2, action2)
universalDrawButton(c2, action3)
universalDrawButton(c2, action4)
universalDrawButton(c2, action5)