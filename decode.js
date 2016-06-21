const decoder = require('qrstuv')
decoder.Promise = require('bluebird')
decoder.Image = Image

var input = document.getElementById('input')

input.addEventListener('change', function(ev) {
  var file = this.files[0]
  console.log('uploaded file', file)

  var reader = new FileReader()

  reader.addEventListener('load', function() {
    //TODO append child to see what's going on
    var img = document.createElement('img');
    console.log('image tag form upload', img)
    // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/result
    img.src = this.result
    document.body.appendChild(img)

    // analyze code
    decoder.decode(this.result).then(function decodeHandler(decoded) {
      console.log(decoded)
      // show what we got
      var span = document.createElement('span');
      span.innerHTML = decoded
      document.body.appendChild(span)
    })

  }, false)

  reader.readAsDataURL(file)
})
