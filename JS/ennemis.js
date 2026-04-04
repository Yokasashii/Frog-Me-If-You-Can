const ennemisImg = new Image();
let enemyLastUsed = 0;
const enemyCooldown = 1500; 


class Ennemis{

    constructor(x,y,velocity,width,height,attack){
        this.name = 'zombie collègue';
        this.img = "../img/ennmis.png"
        this.x = x;
        this.y = y; 
        this.width = width
        this.height = height
        this.velocity = velocity
        this.hp= 30
        this.attack = attack
    }

    // getter

    getName(){return this.name}
    getImg(){return this.img}
    getPositionX(){return this.x}
    getPositionY(){return this.y}
    getWidth(){return this.width}
    getHeight(){return this.height}
    getVelocity(){return this.velocity}
    getStat(){return this.stats}
    getLoot(){return this.loot}
    getTurn(){return this.turn}
    getLife(){return this.hp}
    getAttack(){return this.attack}

    // setter

    setName(elt){this.name = elt}
    setImg(elt){this.img = elt}
    setPositionX(elt){this.x = elt}
    setPositionY(elt){this.y = elt}
    setWidth(elt){this.width = elt}
    setHeight(elt){this.height = elt}
    setVelocity(elt){this.velocity = elt}
    setStat(elt){this.stats = elt}
    setLoot(elt){this.loot = elt}
    setTurn(elt){this.turn = elt}
    setLife(elt){this.hp = elt}
    setAttack(elt){this.attack = elt}

    move(){

        const movement = this.getVelocity()
        
        ennemisImg.src = this.getImg()

        if (player.getPositionY()< this.getPositionY()){
            if (this.getPositionY()>0) {
                this.setPositionY(this.getPositionY()-movement)
            }
        }

        if (player.getPositionY()> this.getPositionY()){
            if (this.getPositionY()+55<canvas.height){
                this.setPositionY(this.getPositionY()+movement)
            }
        }

        if (player.getPositionX()< this.getPositionX()){
            if (this.getPositionX()>0){
                this.setPositionX(this.getPositionX()-movement)
            }
        }

        if (player.getPositionX()> this.getPositionX()){
            if (this.getPositionX()+55<canvas.width){
                this.setPositionX(this.getPositionX()+movement)
            }
        }
    }

    fight(){
        if (
            player.getPositionX() < this.getPositionX() + this.width &&
            player.getPositionX() + 55 > this.getPositionX() &&
            player.getPositionY() < this.getPositionY() + this.height &&
            player.getPositionY() + 55 > this.getPositionY()
        ) {

            let now = Date.now()

            if (now - enemyLastUsed < enemyCooldown) {
                console.log("Encore en cooldown !");
            } else {
                player.setLife(player.getLife()-this.getAttack())
                    
                enemyLastUsed = now
            }
            
        }
    }

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
        }
        
    }
}