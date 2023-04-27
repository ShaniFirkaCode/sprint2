

function onInit() {
    renderGallery()
}

function renderMeme(meme) {
    drawImg(meme.selectedImgId)
    meme.lines.forEach(line => drawText(line))
}

function renderGallery() {
    gElGallery = document.querySelector('.images-container')
    var strHtml = gImgs.map(img =>
        `<img src="${img.url}" id="${img.id}" onclick="onImgClicked('${img.id}')"> `
    ).join('')
    gElGallery.innerHTML = strHtml
}

function onAboutClicked() {

}

function onMemeClicked() {

}

function onImgClicked(imgId) {
    initCanvas()
    const elGallery = document.querySelector('.main-gallery')
    const elCanvasMain = document.querySelector('.main-canvas')
    elGallery.hidden = true
    setImg(imgId)
    elCanvasMain.hidden = false
    const meme = getMeme()
    renderMeme(meme)

}

function onAddLine() {
    addLine()
}

function onTyping(text) {
    updateText(text)
    const meme = getMeme()
    renderMeme(meme)
}

function onSetFillColor(fillColor) {
    console.log(fillColor)
}

function onSetStrokeColor(strokeColor) {
    console.log(strokeColor)
}