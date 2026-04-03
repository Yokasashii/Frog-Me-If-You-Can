const canvasMenu = document.getElementById("canvasMenu");
const cMenu = canvasMenu.getContext("2d");

function menuSize() {
  canvasMenu.width = window.innerWidth - 20;
  canvasMenu.height = window.innerHeight - 20;
}

function drawMenu() {
  menuSize();

  cMenu.fillStyle = "rgba(0, 0, 0, 0.8)";
  cMenu.fillRect(0, 0, canvasMenu.width, canvasMenu.height);
}

drawMenu();

function drawbutton(bouton) {
  cMenu.fillStyle = "grey";
  cMenu.fillRect(bouton.x, bouton.y, bouton.width, bouton.height);

  cMenu.fillStyle = "white";
  cMenu.font = "20px Arial";
  cMenu.textAlign = "center";
  cMenu.textBaseline = "middle";
  cMenu.fillText(
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

canvasMenu.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  if (isClicking(boutonPlay, x, y)) {
    window.location.href = "HTML/game.html";
  }

  if (isClicking(boutonRank, x, y)) {
    console.log("Rank");
  }

  if (isClicking(boutonQuit, x, y)) {
    console.log("Quit");
  }
  
});

const boutonWidth = canvasMenu.width / 3;
const boutonHeight = 100;
const boutonX = canvasMenu.width / 2 - boutonWidth / 2;

const boutonPlay = {
  x: boutonX,
  y: canvasMenu.height / 2 - 140,
  width: boutonWidth,
  height: boutonHeight,
  message: "Play",
};

const boutonRank = {
  x: boutonX,
  y: canvasMenu.height / 2 - 30,
  width: boutonWidth,
  height: boutonHeight,
  message: "Rank",
};

const boutonQuit = {
  x: boutonX,
  y: canvasMenu.height / 2 + 80,
  width: boutonWidth,
  height: boutonHeight,
  message: "Quit",
};

drawbutton(boutonPlay);
drawbutton(boutonRank);
drawbutton(boutonQuit);
