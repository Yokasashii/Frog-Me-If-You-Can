//global variable of canva Menu
const canvasMenu = document.getElementById("canvasMenu");
const cMenu = canvasMenu.getContext("2d");

universalDrawInterface(canvasMenu, cMenu)

//clik for the button
canvasMenu.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  if (universalClicking(boutonPlay, x, y)) {
    window.location.href = "HTML/save.html";
  }

  if (universalClicking(boutonRank, x, y)) {
    window.location.href = "HTML/rank.html";
  }

  if (universalClicking(boutonQuit, x, y)) {
    window.location.href = "about:blank";
  }
  
});

//draw the title of the game
function drawTheTitle(){

  cMenu.fillRect(0,0, canvasMenu.width, canvasMenu.height)

  cMenu.font = "100px Arial";

  cMenu.fillStyle = "white";

  cMenu.fillText(" Frog me if you can !", canvasMenu.width*3/10, canvasMenu.height*0.5/3 );

  cMenu.font = "30px Arial";
  cMenu.fillText("a game by : Vincent Guerrini and Maxime Poujol", canvasMenu.width*3.6/10, canvasMenu.height*2.5/3 );

}


//button configuration

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

//executution of all menu function
drawTheTitle()
universalDrawButton(cMenu, boutonPlay);
universalDrawButton(cMenu, boutonRank);
universalDrawButton(cMenu, boutonQuit);
