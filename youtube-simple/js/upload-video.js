/* global fetch */
function sendVideo (video) {
  return fetch('http://localhost:3000/videos-personales', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(video)
  })
}

function onSubmit (event) {
  event.preventDefault()
  const elementVideoName = document.getElementById('video-name')
  const elementVideocategory = document.getElementById('video-category')
  const video = { name: elementVideoName.value, category: elementVideocategory.value }
  sendVideo(video)
    .then(() => console.log('Video guardado'))
    .catch(console.error)
}

window.addEventListener('load', function () {
  const form = document.getElementById('video-form')
  form.addEventListener('submit', onSubmit)
})
