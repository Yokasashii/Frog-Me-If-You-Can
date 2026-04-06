//global variable of the player
const playerImg = new Image();
const attackZoneImgN = new Image();
const attackZoneImgS = new Image();
const attackZoneImgW = new Image();
const attackZoneImgE = new Image();
let lastUsed = 0;
const cooldown = 500; 

class Player{

    // constructor of player

    constructor(name,position,velocity,img) {
        this.name = name
        this.position = position
        this.velocity = velocity
        this.img = img
        this.spriteLeftPath = "../Assets/Character/Sprite - PlayerL.png"
        this.spriteRightPath = "../Assets/Character/Sprite - PlayerR.png"
        this.stat = {
            hp: 100, maxHp: 100, mp : 50, el : 0, mpMax : 50, elMax : 5,
            attack: 15,
            level: 1,}
        this.inventory = {
            "chocolat" : 0,
            "café" : 0,
            "vitamine": 0,
            "chocolatMax" : 10,
            "caféMax" : 10,
            "vitamineMax": 10
        }
        this.equipment = {
            weapon: null, 
            armor: null,
            accessory: null
        }
        this.gold = 0
        this.score = 0
        this.attackImg = "../Assets/Sprite - AttackEffect.png"
        this.heAttack = false
        this.north = false
        this.south = false
        this.west = false
        this.est = false
    }

    //getter

    getName(){return this.name}
    getPositionX(){return this.position.x}
    getPositionY(){return this.position.y}
    getVelocity(){return this.velocity}
    getImg(){return this.img}
    getStat(){return this.stat}
    getLife(){return this.stat.hp}
    getMaxLife(){return this.stat.maxHp}
    getMp(){return this.stat.mp}
    getEl(){return this.stat.el}
    getMaxMp(){return this.stat.mpMax}
    getMaxEl(){return this.stat.elMax}
    getAttack(){return this.stat.attack}
    getLevel(){return this.stat.level}
    getInventoryCafe(){return this.inventory.café}
    getInventoryChocolat(){return this.inventory.chocolat}
    getInventoryVitamine(){return this.inventory.vitamine}
    getInventoryCafeMax(){return this.inventory.caféMax}
    getInventoryChocolatMax(){return this.inventory.chocolatMax}
    getInventoryVitamineMax(){return this.inventory.vitamineMax}
    getEquipement(){return this.equipment}
    getGold(){return this.gold}
    getScore(){return this.score}
    getAttackImg(){return this.attackImg}
    getheAttack(){return this.heAttack}
    getNorth(){return this.north}
    getSouth(){return this.south}
    getWest(){return this.west}
    getEst(){return this.est}

    //setter

    setName(elt){this.name = elt}
    setPositionX(elt){this.position.x = elt}
    setPositionY(elt){this.position.y = elt}
    setVelocity(elt){this.velocity = elt}
    setImg(elt){this.img = elt}
    setStat(elt){this.stat = elt}
    setLife(elt){this.stat.hp = elt}
    setMaxLife(elt){this.stat.maxHp = elt}
    setMp(elt){this.stat.mp = elt}
    setEl(elt){this.stat.el = elt}
    setMaxMp(elt){this.stat.mpMax = elt}
    setMaxEl(elt){this.stat.elMax = elt}
    setAttack(elt){this.stat.attack = elt}
    setLevel(elt){this.stat.level = elt}
    setInventoryCafe(elt){this.inventory.café = elt}
    setInventoryChocolat(elt){this.inventory.chocolat = elt}
    setInventoryVitamine(elt){this.inventory.vitamine = elt}
    setInventoryCafeMax(elt){this.inventory.caféMax = elt}
    setInventoryChocolatMax(elt){this.inventory.chocolatMax = elt}
    setInventoryVitamineMax(elt){this.inventory.vitamineMax = elt}
    setEquipement(elt){this.equipment = elt}
    setGold(elt){this.gold = elt}
    setScore(elt){this.score = elt}
    setAttackImg(elt){this.attackImg = elt}
    setheAttack(elt){this.heAttack = elt}
    setNorth(elt){this.north = elt}
    setSouth(elt){this.south = elt}
    setWest(elt){this.west = elt}
    setEst(elt){this.est = elt}


    move(){

        const movement = this.getVelocity()
        
        playerImg.src = this.getImg()
        attackZoneImgN.src = this.getAttackImg()
        attackZoneImgS.src = this.getAttackImg()
        attackZoneImgW.src = this.getAttackImg()
        attackZoneImgE.src = this.getAttackImg()

        // basic move

        if (keys.get('KeyW')){
            if (currentMap[canvasToMatrixX(this.getPositionY() - movement, canvas)][canvasToMatrixY(this.getPositionX(), canvas)] == " ") {
                this.setPositionY(this.getPositionY()-movement)
            }
            this.setNorth(true)
            this.setSouth(false)
        }

        if (keys.get('KeyS')){
            if (currentMap[canvasToMatrixX(this.getPositionY()+55 + movement, canvas)][canvasToMatrixY(this.getPositionX(), canvas)] == " "){
                this.setPositionY(this.getPositionY()+movement)
            }
            this.setNorth(false)
            this.setSouth(true)
        }

        if (keys.get('KeyA')){
            if (currentMap[canvasToMatrixX(this.getPositionY(), canvas)][canvasToMatrixY(this.getPositionX() - movement, canvas)] == " "){
                this.setPositionX(this.getPositionX()-movement)
            }
            this.setImg(this.spriteLeftPath)
            this.setWest(true)
            this.setEst(false)
        }

        if (keys.get('KeyD')){
            if (currentMap[canvasToMatrixX(this.getPositionY(), canvas)][canvasToMatrixY(this.getPositionX()+55 + movement, canvas)] == " "){
                this.setPositionX(this.getPositionX()+movement)
            }
            this.setImg(this.spriteRightPath)
            this.setWest(false)
            this.setEst(true)
        }
        if (keys.get('KeyW') && keys.get("ShiftLeft") && this.getMp()>0){
            if (currentMap[canvasToMatrixX(this.getPositionY() - movement - 10, canvas)][canvasToMatrixY(this.getPositionX(), canvas)] == " ") {
                this.setPositionY(this.getPositionY()-movement-10)
                this.setMp(this.getMp()-1)
            }
        }

        if (keys.get('KeyS') && keys.get("ShiftLeft") && this.getMp()>0){
            if (currentMap[canvasToMatrixX(this.getPositionY()+55 + movement + 10, canvas)][canvasToMatrixY(this.getPositionX(), canvas)] == " "){
                this.setPositionY(this.getPositionY()+movement+10)
                this.setMp(this.getMp()-1)
            }
        }

        if (keys.get('KeyA') && keys.get("ShiftLeft") && this.getMp()>0){
            if (currentMap[canvasToMatrixX(this.getPositionY(), canvas)][canvasToMatrixY(this.getPositionX() - movement - 10, canvas)] == " "){
                this.setPositionX(this.getPositionX()-movement-10)
                this.setMp(this.getMp()-1)
            }
        }

        if (keys.get('KeyD') && keys.get("ShiftLeft") && this.getMp()>0){
            if (currentMap[canvasToMatrixX(this.getPositionY(), canvas)][canvasToMatrixY(this.getPositionX()+55 + movement + 10, canvas)] == " "){
                this.setPositionX(this.getPositionX()+movement+10)
                this.setMp(this.getMp()-1)
            }
        }

        //player action
        if (keys.get('Space')){
            this.setheAttack(true)
            
        } else {
            this.setheAttack(false)
        }

        if (keys.get('Digit1')){
            if (this.getInventoryChocolat()>0 && this.getLife() < this.getMaxLife()){
                this.setLife(this.getLife()+10)
                this.setInventoryChocolat(this.getInventoryChocolat()-1)
            }
        }


        if (keys.get('Digit2')){
            if (this.getInventoryCafe()>0 && this.getMp() < this.getMaxMp()){
                this.setMp(this.getMp()+10)
                if (this.getMp()>this.getMaxMp()){
                    this.setMp(this.getMaxMp())
                }
                this.setInventoryCafe(this.getInventoryCafe()-1)
            }
        }

        if (keys.get('Digit3')){
            if (this.getLevel()<10){
                if (this.getInventoryVitamine() >= this.getInventoryVitamineMax()){
                this.setMaxLife(this.getMaxLife()+10)
                this.setLife(this.getMaxLife())
                this.setMaxMp(this.getMaxMp()+10)
                this.setMp(this.getMaxMp())
                this.setMaxEl(this.getMaxEl()+1)
                this.setAttack(this.getAttack()+2)
                this.setLevel(this.getLevel()+1)
                this.setInventoryCafeMax(this.getInventoryCafeMax()+1)
                this.setInventoryChocolatMax(this.getInventoryChocolatMax()+1)
                this.setInventoryVitamine(this.getInventoryVitamine()-10)
                }
            }
            
        }

        if (keys.get('Digit4')){
            saveCurrentGame()
            window.location.href = "../index.html";
        }
        

    }

    // draw the player
    draw(){
        if (this.getNorth()){
            if (attackZoneImgN.complete) {
                c.drawImage(attackZoneImgN, this.getPositionX()-27.5, this.getPositionY()-60, 110, 110)
            }
        }
        
        if (this.getSouth()){
            if (attackZoneImgS.complete) {
                c.drawImage(attackZoneImgS, this.getPositionX()-27.5, this.getPositionY()+7.5, 110, 110)
            }
        }

        if (this.getWest()){
            if (attackZoneImgW.complete) {
                c.drawImage(attackZoneImgW, this.getPositionX()-60, this.getPositionY()-27.5, 110, 110)
            }
        }

        if (this.getEst()){
            if (attackZoneImgE.complete) {
                c.drawImage(attackZoneImgE, this.getPositionX()+7.5, this.getPositionY()-27.5, 110, 110)
            }
        }
        
        if (playerImg.complete) {
            c.drawImage(playerImg, this.getPositionX(), this.getPositionY(), 55, 55)
        }
    }

    //check if the player is dead or not
    die(){
        if (this.getLife() <= 0){
            this.setVelocity(0)
            this.setLife(0)
            this.setImg("../Assets/Sprite - RIP.png")
            if (typeof resetCurrentGameToDefault === "function") {
                resetCurrentGameToDefault()
            }
            window.location.href = "die.html";
        }
    }

    //check if the ennemy is in the zone when the player attack, if yes the ennemy is heart by the player
    hitTheGoodGuy(enemy,attackPositionX,attackPositionY,height,width){
        if (!enemy){
            return
        }

        if (
            attackPositionX < enemy.getPositionX() + 55 &&
            attackPositionX + width > enemy.getPositionX() &&
            attackPositionY < enemy.getPositionY() + 55 &&
            attackPositionY + height > enemy.getPositionY()
        ) {

            let now = Date.now()

            if (now - lastUsed < cooldown) {
                console.log("Encore en cooldown !");
            } else {
                enemy.setLife(enemy.getLife() - this.getAttack())
                if (this.getNorth() && enemy.getPositionY() -100 >0){
                    enemy.setPositionY(enemy.getPositionY()-100)
                } else {
                    enemy.setPositionY(enemy.getPositionY()+100)
                }

                if (this.getSouth() && enemy.getPositionY() +100 <canvas.height){
                    enemy.setPositionY(enemy.getPositionY()+100)
                } else {
                    enemy.setPositionY(enemy.getPositionY()-100)
                }

                if (this.getEst() && enemy.getPositionY() +100 <canvas.width){
                    enemy.setPositionX(enemy.getPositionX()+100)
                }

                if (this.getWest() && enemy.getPositionY() - 100 <0){
                    enemy.setPositionX(enemy.getPositionX()-100)
                }
                lastUsed = now
            }
            
        }
    }

    //check if one the ennemy is in the attack zone
    generaltest(bonusX,bonusY){
        this.hitTheGoodGuy(ennemi1, this.getPositionX()+(bonusX), this.getPositionY()+(bonusY), 110, 110)
        this.hitTheGoodGuy(ennemi2, this.getPositionX()+(bonusX), this.getPositionY()+(bonusY), 110, 110)
        this.hitTheGoodGuy(ennemi3, this.getPositionX()+(bonusX), this.getPositionY()+(bonusY), 110, 110)
        this.hitTheGoodGuy(ennemi4, this.getPositionX()+(bonusX), this.getPositionY()+(bonusY), 110, 110)        
    }

    //attack depending on the direction of the player
    attackMoment(){

        if (this.getheAttack()){
            if (this.getNorth()){
                this.generaltest(-27.5,-60)
            }

            if (this.getSouth()){
                this.generaltest(-27.5,+7.5)
            }

            if (this.getWest()){
                this.generaltest(-60,-27.5)
            }

            if (this.getEst()){
                this.generaltest(7.5,-27.5)
            }
        }
    }
};