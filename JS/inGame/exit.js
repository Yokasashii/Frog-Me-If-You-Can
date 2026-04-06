const ExitImg = new Image();

class Exit{

    constructor(x,y,statusExit){
        this.x = x
        this.y = y
        this.img = "../Assets/Sprite Trou.png"
        this.width = 55
        this.height = 55
        this.statusExit = statusExit
    }

    // getter

    getPositionX(){return this.x}
    getPositionY(){return this.y}
    getImg(){return this.img}
    getWidth(){return this.width}
    getHeight(){return this.height}
    getStatusExit(){return this.statusExit}

    // setter

    setPositionX(elt){this.x = elt}
    setPositionY(elt){this.y = elt}
    setImg(elt){this.img = elt}
    setWidth(elt){this.width = elt}
    setHeight(elt){this.height = elt}
    setStatusExit(elt){this.statusExit = elt}

    // draw the exit
    drawExit(){
        ExitImg.src = this.getImg()
        if (ExitImg.complete) {
                c.drawImage(ExitImg, this.getPositionX(), this.getPositionY(), this.getWidth(), this.getHeight())
            }
    }

    // new stage
    newMap(){
        if (
            keys.get('KeyE') &&
            player.getPositionX() < this.getPositionX() + this.width &&
            player.getPositionX() + 55 > this.getPositionX() &&
            player.getPositionY() < this.getPositionY() + this.height &&
            player.getPositionY() + 55 > this.getPositionY()
        ) {
            this.setStatusExit(true)
            if (Date.now() - roomStartTime < 5000) {
                player.setEl(Math.min(player.getEl() + 1, player.getMaxEl()))
            }
            saveCurrentGame()
            start()
        }
    }

}

