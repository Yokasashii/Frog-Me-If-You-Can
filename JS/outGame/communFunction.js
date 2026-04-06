function universalClicking(bouton, x, y){
    return (
        x >= bouton.x &&
        x <= bouton.x + bouton.width &&
        y >= bouton.y &&
        y <= bouton.y + bouton.height
    );
}

function universalDrawButton(theC,button){
    theC.fillStyle = 'grey';
    theC.fillRect(button.x, button.y, button.width, button.height);

    theC.fillStyle = "white";
    theC.font = "20px Arial";
    theC.textAlign = "center";
    theC.textBaseline = "middle";
    theC.fillText(
        button.message,
        button.x + button.width / 2,
        button.y + button.height / 2,
  );
}

function universalCanvasSize(theCanvas,nb=1,nb2=1){
    theCanvas.width = window.innerWidth*nb ;
    theCanvas.height = window.innerHeight*nb2
}

function universalDrawInterface(theCanvas,theC) {
    universalCanvasSize(theCanvas);

    theC.fillStyle = "rgba(0, 0, 0, 0.8)";
    theC.fillRect(0, 0, theCanvas.width, theCanvas.height);
}

function universalRandom(max){
    return Math.floor(Math.random() * max)
}