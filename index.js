const qrCode = require('qrcode-npm')

var target = document.getElementById('target')
var input = document.getElementById('input')

var qr = qrCode.qrcode(4, 'M')
var text = 'hello world'
qr.addData(text)
qr.make()

var image = qr.createImgTag(4)    // creates an <img> tag as text
console.log(image)

target.innerHTML = image

input.addEventListener('change', handleFiles)

function handleFiles (ev) {
  console.log(this.files[0])
  //TODO read this File and print contents to dom
}
