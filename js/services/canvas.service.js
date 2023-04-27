let gElCanvas
let gCtx
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']


function initCanvas() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
    //window.addEventListener('resize', resizeCanvas)
}

function drawImg(imgId) {
    var img = getImgById(imgId)
    console.log('img from drawimg:', img)
    const elImg = new Image()
    elImg.src = img.url
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    }
    console.log('finish drawImg')
}

function updateText(text) {
    const line = gMeme.lines[gMeme.selectedLineIdx].txt
    line.txt = text
}

function drawText(line) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = line.strokeColor
    gCtx.fillStyle = line.fillColor
    gCtx.font = line.size + 'px Arial'
    gCtx.textAlign = line.align
    // gCtx.textBaseline = 'middle'
    gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
    gCtx.fillText(line.txt, line.pos.x, line.pos.y)
    console.log('finish drawText')
}

function addLine() {
    if (gMeme.lines.length < 2) createSecLine()
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    renderMeme(getMeme())
}

function downloadCanvas(elLink) {
    // Gets the canvas content and convert it to base64 data URL that can be save as an image
    const data = gElCanvas.toDataURL() // Method returns a data URL containing a representation of the image in the format specified by the type parameter.
    // console.log('data', data) // Decoded the image to base64

    elLink.href = data // Put it on the link
    elLink.download = 'my-img' // Can change the name of the file
}

// function drawRectstroke(x, y) {
//     gCtx.strokeStyle = 'white'
//     gCtx.strokeRect(x, y, 120, 120)
// }

function clear() {
    gCtx.fillStyle = 'white'
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
    gCtx.strokeStyle = 'black'
    gCtx.strokeRect(0, 0, gElCanvas.width, gElCanvas.height)
}
