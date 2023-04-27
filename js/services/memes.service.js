'use strict'

const STORAGE_KEY = 'memesDB'
var gColor = 'black'
var gId = 101
var gMemes
var gMeme = {
    selectedImgId: null,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I am text',
        size: 20,
        align: 'center',
        fillColor: 'white',
        pos: { x: 200, y: 30 },
        strokeColor: 'black'
    }]
}

function getMeme() {
    return gMeme
}

function createSecLine(hight) {
    gMeme.lines.push({
        txt: 'I am text',
        size: 20,
        align: 'center',
        fillColor: 'white',
        hight,
        strokeColor: 'black'
    })
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

// function _saveMemeToStorage() {
//     saveToStorage(STORAGE_KEY, gMeme)
// }
