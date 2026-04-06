const canvasSaveMenu = document.getElementById("canvasSaveMenu");
const cSaveMenu = canvasSaveMenu.getContext("2d");

// menu size configuration
function menuSize() {
  canvasSaveMenu.width = window.innerWidth - 20;
  canvasSaveMenu.height = window.innerHeight - 20;
}

function drawMenu() {
  menuSize();

  cSaveMenu.fillStyle = "rgba(0, 0, 0, 0.8)";
  cSaveMenu.fillRect(0, 0, canvasSaveMenu.width, canvasSaveMenu.height);
}

drawMenu();

function drawbutton(bouton) {
  cSaveMenu.fillStyle = "grey";
  cSaveMenu.fillRect(bouton.x, bouton.y, bouton.width, bouton.height);

  cSaveMenu.fillStyle = "white";
  cSaveMenu.font = "20px Arial";
  cSaveMenu.textAlign = "center";
  cSaveMenu.textBaseline = "middle";
  cSaveMenu.fillText(
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

canvasSaveMenu.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  if (isClicking(boutonSave1, x, y)) {
    localStorage.setItem("frog.activeSlot", "1")
    window.location.href = "game.html";
  }

  if (isClicking(boutonSave2, x, y)) {
    localStorage.setItem("frog.activeSlot", "2")
    window.location.href = "game.html";
  }

  if (isClicking(boutonSave3, x, y)) {
    localStorage.setItem("frog.activeSlot", "3")
    window.location.href = "game.html";
  }

});

function drawTheTitle(){

  cSaveMenu.fillRect(0,0, canvasSaveMenu.width, canvasSaveMenu.height)

  cSaveMenu.font = "100px Arial";

  cSaveMenu.fillStyle = "white";

  cSaveMenu.fillText(" Frog me if you can !", canvasSaveMenu.width*3/10, canvasSaveMenu.height*0.5/3 );

}


//button configuration

const boutonWidth = canvasSaveMenu.width / 3;
const boutonHeight = 100;
const boutonX = canvasSaveMenu.width / 2 - boutonWidth / 2;

const boutonSave1 = {
  x: boutonX,
  y: canvasSaveMenu.height / 2 - 140,
  width: boutonWidth,
  height: boutonHeight,
  message: "Save 1",
};

const boutonSave2 = {
  x: boutonX,
  y: canvasSaveMenu.height / 2 - 30,
  width: boutonWidth,
  height: boutonHeight,
  message: "Save 2",
};

const boutonSave3 = {
  x: boutonX,
  y: canvasSaveMenu.height / 2 + 80,
  width: boutonWidth,
  height: boutonHeight,
  message: "Save 3",
};


drawTheTitle()
drawbutton(boutonSave1);
drawbutton(boutonSave2);
drawbutton(boutonSave3);
