const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1200;
canvas.height = 575;

c.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
  constructor(position) {
    this.position = position;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, 50, 50);
  }
}

const player = new Sprite({
  x: 0,
  y: 0,
});

player.draw();
console.log(player);
