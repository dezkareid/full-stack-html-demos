/* global fetch */
function appendListVideo (section, title) {
  const header = document.createElement('header')
  const titleElement = document.createElement('h3')
  titleElement.textContent = title
  header.appendChild(titleElement)
  const container = document.createElement('div')
  container.setAttribute('class', 'carousel')
  section.appendChild(header)
  section.appendChild(container)
}

function createVideo (video) {
  const article = document.createElement('article')
  article.setAttribute('class', 'video-item')
  const link = document.createElement('a')
  link.setAttribute('href', `viewer?id=${video.id}`)
  link.setAttribute('class', 'video-item--link link-container')
  article.appendChild(link)

  const image = document.createElement('img')
  image.setAttribute('class', 'video-item--image')
  image.setAttribute('src', video.img)

  link.appendChild(image)

  const title = document.createElement('h4')
  title.textContent = video.title

  link.appendChild(title)

  return article
}

function appendVideos (section, videos, title) {
  appendListVideo(section, title)
  const carousel = section.querySelector('.carousel')
  for (let index = 0; index < videos.length; index++) {
    const videoElement = createVideo(videos[index])
    carousel.appendChild(videoElement)
  }
}

function createVideos (videos) {
  const seccionRecomendados = document.getElementById('recomendados')
  const seccionInternacional = document.getElementById('internacional')
  appendVideos(seccionRecomendados, videos.recomendados, 'Recomendados')
  appendVideos(seccionInternacional, videos.internacional, 'Internacional')
}
function fetchVideos (url) {
  return fetch(url)
    .then(response => response.json())
}

window.addEventListener('load', function () {
  return fetchVideos('http://localhost:3000/videos')
    .then(createVideos)
})
