const playerImg = new Image();

class Player{

    // constructor

    constructor(name,position,velocity,img) {
        this.name = name
        this.position = position
        this.velocity = velocity
        this.img = img
        this.stat = {
            hp: 100, maxHp: 100, mp : 50, el : 0, mpMax : 50, elMax : 5,
            attack: 15,
            defense: 5,
            speed: 5,
            level: 1,
            xp: 0,
            xpToNext : 100
            },
        this.inventory = {
            "chocolat" : 0,
            "café" : 0,
            "vitamine": 0,
            "chocolatMax" : 10,
            "caféMax" : 10,
            "vitamineMAx": 10
        },
        this.equipment = {
            weapon: null, 
            armor: null,
            accessory: null
        },
        this.gold = 0,
        this.turn = null
        this.score = 0
    }

    //getter

    getName(){return this.name}
    getPositionX(){return this.position.x}
    getPositionY(){return this.position.y}
    getVelocity(){return this.velocity}
    getImg(){return this.img}
    getStat(){return this.stat}
    getLife(){return this.stat.hp}
    getInventoryCafe(){return this.inventory.café}
    getInventoryChocolat(){return this.inventory.chocolat}
    getInventoryVitamine(){return this.inventory.vitamine}
    getInventoryCafeMax(){return this.inventory.caféMax}
    getInventoryChocolatMax(){return this.inventory.chocolatMax}
    getInventoryVitamineMax(){return this.inventory.vitamineMAx}
    getEquipement(){return this.equipment}
    getGold(){return this.gold}
    getTurn(){return this.turn}
    getScore(){return this.score}

    //setter

    setName(elt){this.name = elt}
    setPositionX(elt){this.position.x = elt}
    setPositionY(elt){this.position.y = elt}
    setVelocity(elt){this.velocity = elt}
    setImg(elt){this.img = elt}
    setStat(elt){this.stat = elt}
    setLife(elt){this.stat.hp = elt}
    setInventoryCafe(elt){this.inventory.café = elt}
    setInventoryChocolat(elt){this.inventory.chocolat = elt}
    setInventoryVitamine(elt){this.inventory.vitamine = elt}
    setEquipement(elt){this.equipment = elt}
    setGold(elt){this.gold = elt}
    setTurn(elt){this.turn = elt}
    setScore(elt){this.score = elt}


    move(){

        const movement = this.getVelocity()
        
        playerImg.src = this.getImg()

        if (keys.get('KeyW')){
            if (this.getPositionY()>0) {
                this.setPositionY(this.getPositionY()-movement)
            }
        }

        if (keys.get('KeyS')){
            if (this.getPositionY()+55<canvas.height){
                this.setPositionY(this.getPositionY()+movement)
            }
        }

        if (keys.get('KeyA')){
            if (this.getPositionX()>0){
                this.setPositionX(this.getPositionX()-movement)
            }
        }

        if (keys.get('KeyD')){
            if (this.getPositionX()+55<canvas.width){
                this.setPositionX(this.getPositionX()+movement)
            }
        }

        if (playerImg.complete) {
            c.drawImage(playerImg, this.getPositionX(), this.getPositionY(), 55, 55)
        }
    }

    draw(){
        if (playerImg.complete) {
            c.drawImage(playerImg, this.getPositionX(), this.getPositionY(), 55, 55)
        }
    }
};