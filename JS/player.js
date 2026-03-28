class player{

    // constructor

    constructor(position, velocity,) {
        this.position = position
        this.velocity = velocity
        this.stat = {
            hp: 100, maxHp: 100,
            attack: 15,
            defense: 5,
            speed: 5,
            level: 1,
            xp: 0,
            xpToNext : 100
            },
        this.inventory = {
            "soin" : 0,
            "café" : 0,
            "vitamine": 0
        },
        this.equipment = {
            weapon: null, 
            armor: null,
            accessory: null
        },
        this.gold = 0,
        this.turn = null
    }

    //getter

    getPosition(){
        return this.position
    }

    getVelocity(){
        return this.velocity
    }

    getStat(){
        return this.stat
    }

    getInventory(){
        return this.inventory
    }

    getEquipement(){
        return this.equipment
    }

    getGold(){
        return this.gold
    }

    getTurn(){
        return this.turn
    }

    //setter

    setPosition(elt){
        this.position = elt
    }

    setVelocity(elt){
        this.velocity = elt
    }

    setStat(elt){
        this.stat = elt
    }

    setInventory(elt){
        this.inventory = elt
    }

    setEquipement(elt){
        this.equipment = elt
    }

    setGold(elt){
        this.gold = elt
    }

    setTurn(elt){
        this.turn = elt
    }

};

