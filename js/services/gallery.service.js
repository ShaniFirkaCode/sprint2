'use strict'
var gElGallery

// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [
    {
        id: 1,
        url: 'img/19.jpg',
        keywords: ['funny', 'face']
    }, {
        id: 2,
        url: 'img/2.jpg',
        keywords: ['dance', 'woman']
    }, {
        id: 3,
        url: 'img/003.jpg',
        keywords: ['funny', 'trump', 'face']
    }, {
        id: 4,
        url: 'img/004.jpg',
        keywords: ['puppy', 'kiss']
    }, {
        id: 5,
        url: 'img/005.jpg',
        keywords: ['baby', 'puppy']
    }, {
        id: 6,
        url: 'img/5.jpg',
        keywords: ['baby', 'funny', 'face']
    }, {
        id: 7,
        url: 'img/006.jpg',
        keywords: ['cat', 'sleep']
    }, {
        id: 8,
        url: 'img/8.jpg',
        keywords: ['face', 'funny']
    }, {
        id: 9,
        url: 'img/9.jpg',
        keywords: ['baby', 'funny', 'face']
    }, {
        id: 10,
        url: 'img/12.jpg',
        keywords: ['funny', 'face']
    }, {
        id: 11,
        url: 'img/Ancient-Aliens.jpg',
        keywords: ['funny']
    }, {
        id: 12,
        url: 'img/drevil.jpg',
        keywords: ['funnt', 'face']
    }, {
        id: 13,
        url: 'img/img2.jpg',
        keywords: ['baby', 'dance', 'funny']
    }, {
        id: 14,
        url: 'img/img4.jpg',
        keywords: ['trump', 'face']
    }, {
        id: 15,
        url: 'img/img5.jpg',
        keywords: ['baby', 'face']
    }, {
        id: 16,
        url: 'img/img6.jpg',
        keywords: ['funny', 'puppy']
    }, {
        id: 17,
        url: 'img/img11.jpg',
        keywords: ['funny', 'face']
    }, {
        id: 18,
        url: 'img/img12.jpg',
        keywords: ['kiss']
    }, {
        id: 19,
        url: 'img/leo.jpg',
        keywords: ['drink', 'face']
    }, {
        id: 20,
        url: 'img/meme1.jpg',
        keywords: ['face']
    }, {
        id: 21,
        url: 'img/One-Does-Not-Simply.jpg',
        keywords: ['face']
    }, {
        id: 22,
        url: 'img/Oprah-You-Get-A.jpg',
        keywords: ['funny', 'oprah']
    }, {
        id: 23,
        url: 'img/patrick.jpg',
        keywords: ['funny', 'face']
    }, {
        id: 24,
        url: 'img/putin.jpg',
        keywords: ['face']
    }, {
        id: 25,
        url: 'img/X-Everywhere.jpg',
        keywords: ['funny']
    }
]

function getImgById(imgId) {
    var currImg = gImgs.find(img => img.id + '' === imgId + '')
    console.log(currImg)
    return currImg
}

