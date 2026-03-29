const ExitImg = new Image();

class Exit{

    constructor(){
        this.x = 600
        this.y = 600
        this.img = "img/sorti.png"
        this.width = 55
        this.height = 55
    }

    // getter

    getPositionX(){return this.x}
    getPositionY(){return this.y}
    getImg(){return this.img}
    getWidth(){return this.width}
    getHeight(){return this.height}

    // setter

    setPositionX(elt){this.x = elt}
    setPositionY(elt){this.y = elt}
    setImg(elt){this.img = elt}
    setWidth(elt){this.width = elt}
    setHeight(elt){this.height = elt}

    drawExit(){
        ExitImg.src = this.getImg()
        if (ExitImg.complete) {
                c.drawImage(ExitImg, this.getPositionX(), this.getPositionY(), this.getWidth(), this.getHeight())
            }
    }

    newMap(){
        if (
            keys.get('KeyE') &&
            player.getPositionX() < this.getPositionX() + this.width &&
            player.getPositionX() + 55 > this.getPositionX() &&
            player.getPositionY() < this.getPositionY() + this.height &&
            player.getPositionY() + 55 > this.getPositionY()
        ) {
            console.log("reset")
            start()
        }
    }

}

