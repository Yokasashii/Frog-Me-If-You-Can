const canvas = document.getElementById("canvas")
const c = canvas.getContext('2d')
let touche = ""

canvas.width = 1200
canvas.height = 650

c.fillRect(0,0, canvas.width, canvas.height)

class Map{
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.hitbox = {
            position : this.position,
            width : 50,
            height : 50
        }
    }

    drawplayer(){
        c.fillStyle = 'yellow'
        c.fillRect(this.hitbox.position.x,this.hitbox.position.y, this.hitbox.height, this.hitbox.height)
        c.fillStyle = 'green'
        c.fillRect(this.position.x+12.5,this.position.y+12.5, 25, 25)
        
    }

    drawennemi(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x,this.position.y, 25, 25)
    }

    drawPlace(){
        let xline = 300
        let yline = 600
        
        while (yline <= canvas.height){
            c.fillRect(xline,yline, 200, 400)
            yline += 50
        }
    }

    drawfloor(theX,theY){
        c.fillStyle = 'grey'
        c.fillRect(this.position.x,this.position.y, theX, theY)
    }

    drawline(){
        let xline = 0
        let yline = 0
        
        while (yline <= canvas.height){
            c.fillStyle = 'purple'
            c.fillRect(xline,yline, 1200, 5)
            yline += 50
        }
    }

    drawcolumn(){
        let xline = 0
        let yline = 0
        
        while (xline <= canvas.width){
            c.fillStyle = 'purple'
            c.fillRect(xline,yline, 5, 650)
            xline += 50
        }
    }

    update(){
        
        c.fillStyle = 'black'
        c.fillRect(0,0, canvas.width, canvas.height)
        this.drawline()
        this.drawcolumn()
        this.drawPlace() 
        floor.drawfloor(500,200)
        floor2.drawfloor(300,600)
        floor3.drawfloor(300,600)
        player.drawplayer()
    }
}
const player = new Map({
    position:{
        x:400,
        y:200
    },
    velocity : {x:0,y:0} }
)

const floor= new Map({
    position:{
        x:400,
        y:200
    },
    velocity : {x:0,y:0} }
)

const floor2= new Map({
    position:{
        x:600,
        y:50
    },
    velocity : {x:0,y:0} }
)

const floor3= new Map({
    position:{
        x:200,
        y:50
    },
    velocity : {x:0,y:0} }
)

function animate(){
    window.requestAnimationFrame(animate)
    player.update()
}

animate()

document.addEventListener('keydown', (event) => {
    touche = event.key;
    switch (touche) {
        case "z":
            if (player.position.y+40 >= 0){
                    player.position.y -= 10
                    break 
            }
        case "q":
            if (player.position.x-15 >= 0){
                player.position.x -= 10
                break 
            }  
            
        case "s":
            if (player.position.y+40 <= canvas.height){
                player.position.y += 10
                break 
            }
        case "d":
            if (player.position.x+70 <= canvas.width){
                player.position.x += 10
                break 
            }
    }    
});