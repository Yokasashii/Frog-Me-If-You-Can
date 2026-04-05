const canvasDie = document.getElementById("canvasMenu");
const cDie = canvasDie.getContext("2d");

// menu size configuration
function menuSize() {
  canvasDie.width = window.innerWidth - 20;
  canvasDie.height = window.innerHeight - 20;
}

function drawMenu() {
  menuSize();

  cDie.fillStyle = "rgba(0, 0, 0, 0.8)";
  cDie.fillRect(0, 0, canvasDie.width, canvasDie.height);
}

drawMenu();

function drawbutton(bouton) {
  cDie.fillStyle = 'grey';
  cDie.fillRect(bouton.x, bouton.y, bouton.width, bouton.height);

  cDie.fillStyle = "white";
  cDie.font = "20px Arial";
  cDie.textAlign = "center";
  cDie.textBaseline = "middle";
  cDie.fillText(
    bouton.message,
    bouton.x + bouton.width / 2,
    bouton.y + bouton.height / 2,
  );
}

function isClicking(bouton, x, y) {
  return (
    x >= bouton.x &&
    x <= bouton.x + bouton.width &&
    y >= bouton.y &&
    y <= bouton.y + bouton.height
  );
}

canvasDie.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  if (isClicking(boutonPlay, x, y)) {
    window.location.href = "game.html";
  }

  if (isClicking(boutonRank, x, y)) {
    window.location.href = "rank.html";
  }

  if (isClicking(boutonQuit, x, y)) {
    window.location.href = "about:blank";
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
  message: "Quit",
};


drawTheTitle()
drawbutton(boutonPlay);
drawbutton(boutonRank);
drawbutton(boutonQuit);
