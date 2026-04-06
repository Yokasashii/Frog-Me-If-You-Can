const canvas2 = document.getElementById("canvas2")
const c2 = canvas2.getContext('2d')

const BackgroundInput = new Image()
BackgroundInput.src = "../Assets/Background/Menu/Sprite - InputSheet.png"

//configurattion 
universalCanvasSize(canvas2,9.91/10,1.7/10)


c2.fillRect(0,0, canvas2.width, canvas2.height)

c2.font = "30px Arial";

c2.fillStyle = "white";

function drawBackground() {
    c2.fillRect(0,0, canvas2.width, canvas2.height)

    const scale = Math.min(
        canvas2.width / BackgroundInput.naturalWidth,
        canvas2.height / BackgroundInput.naturalHeight
    );

    const drawWidth = BackgroundInput.naturalWidth * scale;
    const drawHeight = BackgroundInput.naturalHeight * scale;
    const offsetX = (canvas2.width - drawWidth) / 2;
    const offsetY = (canvas2.height - drawHeight) / 2;

    c2.drawImage(BackgroundInput, offsetX, offsetY, drawWidth, drawHeight);
}

BackgroundInput.onload = drawBackground

if (BackgroundInput.complete && BackgroundInput.naturalWidth > 0) {
    drawBackground()
}
