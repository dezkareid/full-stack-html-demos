const videos = {
  'yququw': [
    { url: 'https://www.w3schools.com/html/mov_bbb.mp4', type: 'video/mp4' },
    { url: 'https://www.w3schools.com/html/mov_bbb.ogg', type: 'video/ogg' }
  ]
}

function createSource (fuente) {
  const source = document.createElement('source')
  source.src = fuente.url
  source.type = fuente.type
  return source
}

function parseIdVideo (location) {
  const query = location.search
  const indexEqualSymbol = query.indexOf('=')
  return query.slice(indexEqualSymbol + 1, query.length)
}

window.addEventListener('load', function () {
  const idVideo = parseIdVideo(window.location)
  const fuentes = videos[idVideo]

  const videoElement = document.getElementById('video-player')

  for (let index = 0; index < fuentes.length; index++) {
    const source = createSource(fuentes[index])
    videoElement.appendChild(source)
  }
  const messageDontSupportVideo = document.createTextNode('Ya comistes? esto no soporta video')
  videoElement.appendChild(messageDontSupportVideo)
})
