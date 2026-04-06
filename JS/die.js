const canvasDie = document.getElementById("canvasMenu");
const cDie = canvasDie.getContext("2d");

universalDrawInterface(canvasDie, cDie)

canvasDie.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  if (universalClicking(boutonPlay, x, y)) {
    window.location.href = "game.html";
  }

  if (universalClicking(boutonRank, x, y)) {
    window.location.href = "rank.html";
  }

  if (universalClicking(boutonQuit, x, y)) {
    window.location.href = "../index.html";
  }
  
});

//main title and defeat message
function drawTheTitle(){

    cDie.fillStyle = "black";
    cDie.fillRect(0,0, canvasDie.width, canvasDie.height)
    cDie.font = "100px Arial";
    cDie.fillStyle = "";
    cDie.fillStyle = "white";
    cDie.fillText(" Frog me if you can !", canvasDie.width*3/10, canvasDie.height*0.5/3 );
    cDie.font = "50px Arial";
    cDie.fillText(" YOU DIED, do you want to retry ?", canvasDie.width*3.25/10, canvasDie.height*1/3 );
    cDie.font = "30px Arial";
    cDie.fillText("a game by : Vincent Guerrini and Maxime Poujol", canvasDie.width*3.6/10, canvasDie.height*2.5/3 );
}

//configuration button

const boutonWidth = canvasDie.width / 3;
const boutonHeight = 100;
const boutonX = canvasDie.width / 2 - boutonWidth / 2;

const boutonPlay = {
  x: boutonX,
  y: canvasDie.height / 2 - 140,
  width: boutonWidth,
  height: boutonHeight,
  message: "Try again",
};

const boutonRank = {
  x: boutonX,
  y: canvasDie.height / 2 - 30,
  width: boutonWidth,
  height: boutonHeight,
  message: "Rank",
};

const boutonQuit = {
  x: boutonX,
  y: canvasDie.height / 2 + 80,
  width: boutonWidth,
  height: boutonHeight,
  message: "Return to menu",
};


drawTheTitle()
universalDrawButton(cDie, boutonPlay);
universalDrawButton(cDie, boutonRank);
universalDrawButton(cDie, boutonQuit);
