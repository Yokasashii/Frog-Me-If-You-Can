const ennemisImg = new Image();


class Ennemis{

    //constructor of an ennemy
    constructor( x, y, velocity, width, height, attack, hp, statusLife, special,enemyCooldown, img){
        this.name = 'zombie collègue';
        this.img = img
        this.x = x;
        this.y = y; 
        this.width = width
        this.height = height
        this.velocity = velocity
        this.hp= hp
        this.attack = attack
        this.statusLife = statusLife
        this.special = special
        this.enemyCooldown= enemyCooldown
        this.enemyLastUsed = 0;
    }

    // getter

    getName(){return this.name}
    getImg(){return this.img}
    getPositionX(){return this.x}
    getPositionY(){return this.y}
    getWidth(){return this.width}
    getHeight(){return this.height}
    getVelocity(){return this.velocity}
    getLife(){return this.hp}
    getAttack(){return this.attack}
    getStatusLife(){return this.statusLife}
    getSpecial(){return this.special}
    getCooldown(){return this.enemyCooldown}
    getenemyLastUsed(){return this.enemyLastUsed}

    // setter

    setName(elt){this.name = elt}
    setImg(elt){this.img = elt}
    setPositionX(elt){this.x = elt}
    setPositionY(elt){this.y = elt}
    setWidth(elt){this.width = elt}
    setHeight(elt){this.height = elt}
    setVelocity(elt){this.velocity = elt}
    setLife(elt){this.hp = elt}
    setAttack(elt){this.attack = elt}
    setStatusLife(elt){this.statusLife = elt}
    setSpecial(elt){this.special = elt}
    setenemyLastUsed(elt){this.enemyLastUsed = elt}

    // move if the ennemy is inside and if he don't detect collision
    move(){

        const movement = this.getVelocity()
        const canMoveTo = (pixelY, pixelX) => {
            const row = canvasToMatrixX(pixelY, canvas)
            const col = canvasToMatrixY(pixelX, canvas)
            if (!currentMap || row < 0 || col < 0 || row >= currentMap.length || col >= currentMap[row].length) {
                return false
            }
            return currentMap[row][col] == " "
        }
        
        ennemisImg.src = this.getImg()

        if (player.getPositionY()< this.getPositionY()){
            if (this.getSpecial()=="stopper"){
                if (canMoveTo(this.getPositionY() - movement, this.getPositionX()) && this.getPositionY() >= exit.getPositionY()-200)  {
                    this.setPositionY(this.getPositionY()-movement)
                }
            } else {
                if (canMoveTo(this.getPositionY() - movement, this.getPositionX())) {
                    this.setPositionY(this.getPositionY()-movement)
                }
            }
            
        }

        if (player.getPositionY()> this.getPositionY()){
            if (this.getSpecial()=="stopper"){
                if (canMoveTo(this.getPositionY()+ 55 + movement, this.getPositionX()) && this.getPositionY() <= exit.getPositionY()+200){
                    this.setPositionY(this.getPositionY()+movement)
                }
            } else {
                if (canMoveTo(this.getPositionY()+ 55 + movement, this.getPositionX())){
                    this.setPositionY(this.getPositionY()+movement)
                }
            }
        }

        if (player.getPositionX()< this.getPositionX()){
            if (this.getSpecial()=="stopper"){
                if (canMoveTo(this.getPositionY(), this.getPositionX()- movement) && this.getPositionX() >= exit.getPositionX()-200){
                    this.setPositionX(this.getPositionX()-movement)
                }
            } else {
                if (canMoveTo(this.getPositionY(), this.getPositionX()- movement)){
                    this.setPositionX(this.getPositionX()-movement)
                }
            }
        }

        if (player.getPositionX()> this.getPositionX()){
            if (this.getSpecial()=="stopper"){
                if (canMoveTo(this.getPositionY(), this.getPositionX()+ 55 + movement) && this.getPositionX() <= exit.getPositionX()+200){
                    this.setPositionX(this.getPositionX()+movement)
                }
            } else {
                if (canMoveTo(this.getPositionY(), this.getPositionX()+ 55 + movement)){
                    this.setPositionX(this.getPositionX()+movement)
                }
            }
        }
    }

    // heart the player if the ennemy is in front of him
    fight(){
        if (
            player.getPositionX() < this.getPositionX() + this.width &&
            player.getPositionX() + 55 > this.getPositionX() &&
            player.getPositionY() < this.getPositionY() + this.height &&
            player.getPositionY() + 55 > this.getPositionY()
        ) {

            let now = Date.now()

            if (now - this.getenemyLastUsed() > this.getCooldown()) {
                player.setLife(player.getLife()-this.getAttack())
                this.setenemyLastUsed(now)
            }
            
        }
    }

    // draw the ennemys if they alive
    drawEnnemis(){
        if (this.getLife()>0){
            ennemisImg.src = this.getImg()
            if (ennemisImg.complete) {
                c.drawImage(ennemisImg, this.getPositionX(), this.getPositionY(), 55, 55)
            }
        } else {
            this.setHeight(0)
            this.setWidth(0)
            this.setVelocity(0)
            this.setAttack(0)
            this.setStatusLife(true)
        }
        
    }
}