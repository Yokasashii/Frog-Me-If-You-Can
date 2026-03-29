const ObjImg = new Image();

class Obj{

    constructor(){
        this.listeObj = ["café","chocolat","vitamine"]
        this.listImg = "img/tresor.png"
        this.height = 55
        this.width = 55
        this.x = 100
        this.y = 100
        this.verif = 1
    }

    getList(){return this.listeObj}

    getPositionX(){
        return this.x
    }

    getPositionY(){
        return this.y
    }

    getImg(){
        return this.listImg
    }

    setverif(elt){
        this.verif = elt
    }

    drawObj(){
        
        ObjImg.src = this.getImg()
        if (ObjImg.complete) {
            c.drawImage(ObjImg, this.getPositionX(), this.getPositionY(), this.width, this.height)
        }
    }

    take(){
        if (
            keys.get('KeyE') &&
            player.getPositionX() < this.getPositionX() + this.width &&
            player.getPositionX() + 55 > this.getPositionX() &&
            player.getPositionY() < this.getPositionY() + this.height &&
            player.getPositionY() + 55 > this.getPositionY()
        ) {
            this.height = 0
            this.width = 0
            c.drawImage(ObjImg, this.getPositionX(), this.getPositionY(), this.width, this.height)
            let nb = this.hasardObj(3)
            if (this.listeObj[nb] == "café"){
                if (player.getInventoryCafe() < 10){ 
                    player.setInventoryCafe(player.getInventoryCafe()+1)
                    this.setverif(1)
                    console.log("cafe",player.getInventoryCafe())
                } else {
                    console.log(" vous avez déjà la quantité max")
                }
                
            } else if (this.listeObj[nb] == "chocolat"){
                if (player.getInventoryChocolat() < 10){
                    player.setInventoryChocolat(player.getInventoryChocolat()+1)
                    this.setverif(1)
                    console.log("chocolat",player.getInventoryChocolat())
                } else {
                    console.log(" vous avez déjà la quantité max")
                }
                
            } else if (this.listeObj[nb] == "vitamine"){
                if (player.getInventoryVitamine() < 10){
                    player.setInventoryVitamine(player.getInventoryVitamine() + 1)
                    this.setverif(1)
                    console.log("vitamine",player.getInventoryVitamine())
                } else {
                    console.log(" vous avez déjà la quantité max")
                }
                
            }
            
        }
    }

    hasardObj(max){
        return Math.floor(Math.random() * max);
    }
}