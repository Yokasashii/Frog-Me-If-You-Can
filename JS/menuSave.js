const canvasSaveMenu = document.getElementById("canvasSaveMenu");
const cSaveMenu = canvasSaveMenu.getContext("2d");

universalDrawInterface(canvasSaveMenu, cSaveMenu)

canvasSaveMenu.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  if (universalClicking(boutonSave1, x, y)) {
    localStorage.setItem("frog.activeSlot", "1")
    window.location.href = "game.html";
  }

  if (universalClicking(boutonSave2, x, y)) {
    localStorage.setItem("frog.activeSlot", "2")
    window.location.href = "game.html";
  }

  if (universalClicking(boutonSave3, x, y)) {
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
universalDrawButton(cSaveMenu, boutonSave1);
universalDrawButton(cSaveMenu, boutonSave2);
universalDrawButton(cSaveMenu, boutonSave3);
