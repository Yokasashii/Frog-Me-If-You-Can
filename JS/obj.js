const ObjImg = new Image();

class Obj{

    constructor(x,y,height,width){
        this.listeObj = ["café","chocolat","vitamine"]
        this.listImg = "../img/tresor.png"
        this.height = height
        this.width = width
        this.x = x
        this.y = y
        this.verif = 1
    }

    getList(){return this.listeObj}
    getPositionX(){return this.x}
    getPositionY(){return this.y}
    getImg(){return this.listImg}
    
    setverif(elt){this.verif = elt}
    setPositionX(elt){this.x = elt}
    setPositionY(elt){this.y = elt}


    //draw the object

    drawObj(){
        
        ObjImg.src = this.getImg()
        if (ObjImg.complete) {
            c.drawImage(ObjImg, this.getPositionX(), this.getPositionY(), this.width, this.height)
        }
    }

    //take the object

    take(){
        if (
            keys.get('KeyE') &&
            player.getPositionX() < this.getPositionX() + this.width &&
            player.getPositionX() + 55 > this.getPositionX() &&
            player.getPositionY() < this.getPositionY() + this.height &&
            player.getPositionY() + 55 > this.getPositionY()
        ) {
            if (player.getInventoryCafe()<10 || player.getInventoryChocolat()<10 || player.getInventoryVitamine()<10){
                this.height = 0
                this.width = 0
                c.drawImage(ObjImg, this.getPositionX(), this.getPositionY(), this.width, this.height)
                let nb = this.hasardObj(3)
                if (this.listeObj[nb] == "café"){
                    if (player.getInventoryCafe() < player.getInventoryCafeMax()){ 
                        player.setInventoryCafe(player.getInventoryCafe()+1)
                        this.setverif(1)
                        console.log("cafe",player.getInventoryCafe())
                    } else {
                        console.log(" vous avez déjà la quantité max")
                    }
                    
                } else if (this.listeObj[nb] == "chocolat"){
                    if (player.getInventoryChocolat() < player.getInventoryChocolatMax()){
                        player.setInventoryChocolat(player.getInventoryChocolat()+1)
                        this.setverif(1)
                        console.log("chocolat",player.getInventoryChocolat())
                    } else {
                        console.log(" vous avez déjà la quantité max")
                    }
                    
                } else if (this.listeObj[nb] == "vitamine"){
                    if (player.getInventoryVitamine() < player.getInventoryVitamineMax()){
                        player.setInventoryVitamine(player.getInventoryVitamine() + 1)
                        this.setverif(1)
                        console.log("vitamine",player.getInventoryVitamine())
                    } else {
                        console.log(" vous avez déjà la quantité max")
                    }
                }
            }
        }
    }

    // random for a random object
    hasardObj(max){
        return Math.floor(Math.random() * max);
    }
}