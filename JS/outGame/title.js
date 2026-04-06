const canvastitle = document.getElementById("title")
const cT = canvastitle.getContext('2d')

const BackgroundTitle = new Image()
BackgroundTitle.src = "../Assets/Background/Menu/Sprite - TitleSheet.png"

//title size configuration
function titleSize(){
    canvastitle.width = window.innerWidth*9.91/10;
    canvastitle.height = window.innerHeight*0.5/10
}

function drawTitleBackground() {
    cT.fillRect(0, 0, canvastitle.width, canvastitle.height)

    if (BackgroundTitle.naturalWidth <= 0 || BackgroundTitle.naturalHeight <= 0) {
        return
    }

    const scale = Math.min(
        canvastitle.width / BackgroundTitle.naturalWidth,
        canvastitle.height / BackgroundTitle.naturalHeight
    )

    const drawWidth = BackgroundTitle.naturalWidth * scale
    const drawHeight = BackgroundTitle.naturalHeight * scale
    const offsetX = (canvastitle.width - drawWidth) / 2
    const offsetY = (canvastitle.height - drawHeight) / 2

    cT.drawImage(BackgroundTitle, offsetX, offsetY, drawWidth, drawHeight)
}

BackgroundTitle.onload = drawTitleBackground

titleSize()

if (BackgroundTitle.complete && BackgroundTitle.naturalWidth > 0) {
    drawTitleBackground()
}

