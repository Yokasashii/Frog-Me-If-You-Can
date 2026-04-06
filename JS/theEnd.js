const canvasEnd = document.getElementById("canvasEnd");
const cEnd = canvasEnd.getContext("2d");

// menu size configuration
function endSize() {
  canvasEnd.width = window.innerWidth - 20;
  canvasEnd.height = window.innerHeight - 20;
}

function drawEnd() {
  endSize();

  cEnd.fillStyle = "rgba(0, 0, 0, 0.8)";
  cEnd.fillRect(0, 0, canvasEnd.width, canvasEnd.height);
}

drawEnd();

function getSavedScore() {
  const activeSlot = localStorage.getItem("frog.activeSlot") || "1"
  const saveKey = `frog.slot.${activeSlot}`
  const rawSave = localStorage.getItem(saveKey)
  if (!rawSave) {
    return 0
  }

  try {
    const parsed = JSON.parse(rawSave)
    return parsed?.player?.score ?? 0
  } catch {
    return 0
  }
}

function resetCurrentGameToDefault() {
  const activeSlot = localStorage.getItem("frog.activeSlot") || "1"
  const saveKey = `frog.slot.${activeSlot}`
  const defaultSave = {
    version: 1,
    updatedAt: Date.now(),
    player: {
      hp: 100,
      maxHp: 100,
      mp: 50,
      mpMax: 50,
      level: 1,
      score: 0
    },
    world: {
      currentMapIndex: 0
    }
  }

  localStorage.setItem(saveKey, JSON.stringify(defaultSave))
}

function isClicking(bouton, x, y) {
  return (
    x >= bouton.x &&
    x <= bouton.x + bouton.width &&
    y >= bouton.y &&
    y <= bouton.y + bouton.height
  );
}

//clik for the button

canvasEnd.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  if (isClicking(boutonGoMenu, x, y)) {
    resetCurrentGameToDefault()
    window.location.href = "../index.html";
  }
  
});

//main title and defeat message
function drawTheTitleEnd(){

    cEnd.fillStyle = "black";
    cEnd.fillRect(0,0, canvasEnd.width, canvasEnd.height)
    cEnd.font = "100px Arial";
    cEnd.fillStyle = "";
    cEnd.fillStyle = "white";
    cEnd.fillText(" Frog me if you can !", canvasEnd.width*3/10, canvasEnd.height*0.5/3 );
    cEnd.font = "50px Arial";
    cEnd.fillText(" YOU WIN, Congratualtion you leave the bulding", canvasEnd.width*2.75/10, canvasEnd.height*1/3 );
    cEnd.font = "30px Arial";
    cEnd.font = Math.floor(canvasEnd.width * 0.1) + "px Arial"
    cEnd.fillText(`${getSavedScore()}`, canvasEnd.width * 0.35, canvasEnd.height * 0.60)
    cEnd.font = "30px Arial";
    cEnd.fillText("a game by : Vincent Guerrini and Maxime Poujol", canvasEnd.width*3.6/10, canvasEnd.height*2.5/3 );
}

//configuration button
const boutonWidth = canvasEnd.width / 3;
const boutonHeight = 100;
const boutonX = canvasEnd.width / 2 - boutonWidth / 2;

const boutonGoMenu = {
  x: boutonX,
  y: canvasEnd.height / 1.45,
  width: boutonWidth,
  height: boutonHeight,
  message: "Return to menu",
};

function drawbutton(bouton) {
  cEnd.fillStyle = 'grey';
  cEnd.fillRect(bouton.x, bouton.y, bouton.width, bouton.height);

  cEnd.fillStyle = "white";
  cEnd.font = "20px Arial";
  cEnd.textAlign = "center";
  cEnd.textBaseline = "middle";
  cEnd.fillText(
    bouton.message,
    bouton.x + bouton.width / 2,
    bouton.y + bouton.height / 2,
  );
}

drawTheTitleEnd()
drawbutton(boutonGoMenu);
