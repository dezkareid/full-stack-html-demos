const videos = {
  principal: [
    {
      id: '',
      img: '',
      title: ''
    }
  ],
  recomendados: [],
  internacional: []
}
/*
function createVideoDescription (videoInfo) {
  const item = document.createElement('article')
  return item
} */

function appendVideos (element, videos) {

}

window.addEventListener('load', function () {
  const seccionPrincipal = document.getElementById('principal') // Obtener elemento de sección
  appendVideos(seccionPrincipal, videos.principal)
})
