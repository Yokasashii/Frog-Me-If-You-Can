const ennemisImg = new Image();
let lastUsed = 0;
const cooldown = 1500; 

class Ennemis{

    

    constructor(x,y,velocity){
        this.name = 'zombie collègue';
        this.img = "../img/ennmis.png"
        this.x = x;
        this.y = y; 
        this.width = 55
        this.height = 55
        this.velocity = velocity
        this.stats = {
            hp: 100, maxHp: 100,
            attack: 15,
            type_Attack: "arme contandante",
            defense: 5,
            speed: 1,
            faiblesse: "arme contandante"
        };
        this.loot = {
            xpDrop: 15,
            goldDrop: 10
        };
        this.turn = null;
    }

    // getter

    getName(){return this.name}
    getImg(){return this.img}
    getPositionX(){return this.x}
    getPositionY(){return this.y}
    getVelocity(){return this.velocity}
    getStat(){return this.stats}
    getLoot(){return this.loot}
    getTurn(){return this.turn}
    getLife(){return this.stats.hp}

    // setter

    setName(elt){this.name = elt}
    setImg(elt){this.img = elt}
    setPositionX(elt){this.x = elt}
    setPositionY(elt){this.y = elt}
    setVelocity(elt){this.velocity = elt}
    setStat(elt){this.stats = elt}
    setLoot(elt){this.loot = elt}
    setTurn(elt){this.turn = elt}
    setLife(elt){this.stats.hp = elt}

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

        if (ennemisImg.complete) {
            c.drawImage(ennemisImg, this.getPositionX(), this.getPositionY(), 55, 55)
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

            if (now - lastUsed < cooldown) {
                console.log("Encore en cooldown !");
            } else {
                player.setLife(player.getLife()-10)
                lastUsed = now
            }
            
        }
    }

    drawEnnemis(){
        ennemisImg.src = this.getImg()
        if (ennemisImg.complete) {
            c.drawImage(ennemisImg, this.getPositionX(), this.getPositionY(), 55, 55)
        }
    }
}