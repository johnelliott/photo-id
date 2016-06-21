const qrCode = require('qrcode-npm')

var target = document.getElementById('target')
var target = document.getElementById('target')
var input = document.getElementById('input')

var qr = qrCode.qrcode(4, 'M')
var text = 'hello world'
qr.addData(text)
qr.make()

var image = qr.createImgTag(4)    // creates an <img> tag as text

// show image generated
target.innerHTML = image
