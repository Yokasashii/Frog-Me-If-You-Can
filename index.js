const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
let touche = ""

document.addEventListener('keydown', (event) => {
    touche = event.key;
    
});

canvas.width = 1200
canvas.height = 600

c.fillRect(0,0, canvas.width, canvas.height)

class Sprite {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
    }

    drawplayer(){
        c.fillStyle = 'green'
        c.fillRect(this.position.x,this.position.y, 25, 25)
    }

    drawennemi(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x,this.position.y, 25, 25)
    }

    drawline(){
        let xline = 0
        let yline = 0
        
        while (yline <= canvas.height){
            c.fillStyle = 'grey'
            c.fillRect(xline,yline, 1200, 5)
            yline += 50
        }
    }

    drawcolumn(){
        let xline = 0
        let yline = 0
        
        while (xline <= canvas.width){
            c.fillStyle = 'grey'
            c.fillRect(xline,yline, 5, 600)
            xline += 50
        }
    }

    update(){
        
        c.fillStyle = 'black'
        c.fillRect(0,0, canvas.width, canvas.height)
        this.drawline()
        this.drawcolumn()
        if (touche == "z") {
                if (player.position.y+40 >= 0){
                    player.position.y -= 10
                }   
            } 
            if (touche == "q") {
                if (player.position.x-15 >= 0){
                        player.position.x -= 10
                    }  
            }
            if (touche == "s") {
                if (player.position.y+40 <= canvas.height){
                        player.position.y += 10
                    }
            }
            if (touche == "d") {
                if (player.position.x+70 <= canvas.width){
                        player.position.x += 10
                    }
            }

        ennemi.drawennemi()
        player.drawplayer()

        if (player.position.y == ennemi.position.y-20 || player.position.x == ennemi.position.x-20 || player.position.y == ennemi.position.y+20 || player.position.x == ennemi.position.x+20){
            console.log("fight")
        }

        touche = []
    }
}
const player = new Sprite({
    position:{
        x:400,
        y:200
    },
    velocity : {x:0,y:0} }
)

const ennemi = new Sprite({
    position:{
        x:400,
        y:100
    },
    velocity : {x:0,y:0} })

console.log(player)

function animate(){
    window.requestAnimationFrame(animate)
    player.update()
    ennemi.update()
}

animate()