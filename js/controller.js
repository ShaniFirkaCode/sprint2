

function onInit() {
    onGalleryClicked()

}

function renderMeme(meme) {
    drawImg(meme.selectedImgId)
    //meme.lines.forEach(line => drawText(meme.line[0]))
    drawText(meme.lines[0])
}

function renderGallery() {
    gElGallery = document.querySelector('.images-container')
    var strHtml = gImgs.map(img =>
        `<img src="${img.url}" alt="img${img.id}" onclick="onImgClicked(${img.id})"> `
    ).join('')
    gElGallery.innerHTML = strHtml
}

function onAboutClicked() {
    const elGallery = document.querySelector('.main-gallery')
    const elCanvasMain = document.querySelector('.main-canvas')
    const elAbout = document.querySelector('.main-about')
    elGallery.hidden = true
    elCanvasMain.hidden = true
    elAbout.hidden = false
}

function onMemeClicked() {
    const elMemes = document.querySelector('.main-memes')
    const elGallery = document.querySelector('.main-gallery')
    const elCanvasMain = document.querySelector('.main-canvas')
    const elAbout = document.querySelector('.main-about')
    elGallery.hidden = true
    elCanvasMain.hidden = true
    elAbout.hidden = false
}

function onGalleryClicked() {
    const elMemes = document.querySelector('.main-memes')
    const elGallery = document.querySelector('.main-gallery')
    const elCanvasMain = document.querySelector('.main-canvas')
    const elAbout = document.querySelector('.main-about')
    elCanvasMain.hidden = true
    elAbout.hidden = true
    elMemes.hidden = true
    elGallery.hidden = false
    renderGallery()
}

function onImgClicked(imgId) {
    setImg(imgId)
    initCanvas()
    const elGallery = document.querySelector('.main-gallery')
    const elCanvasMain = document.querySelector('.main-canvas')
    elGallery.hidden = true
    elCanvasMain.hidden = false
    const meme = getMeme()
    renderMeme(meme)
}

function onAddLine() {
    addLine()
}

function onTyping(text) {
    console.log(text)
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

function onIncreaseFont() {
    console.log('BiggerFont')
}

function onDecreaseFont() {
    console.log('SmallerFont')
}

function onAlignCenter() {
    console.log('AlignCenter')
}

function onAlignRight() {
    console.log('AlignRight')
}

function onAlignLeft() {
    console.log('AlignLeft')
}