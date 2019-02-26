const videos = {
  principal: [
    {
      id: '1',
      img: 'https://placekitten.com/g/200/120',
      title: 'Lego The Movie'
    },
    {
      id: '1',
      img: 'https://placekitten.com/g/200/120',
      title: 'Avengers End game'
    }
  ],
  recomendados: [
    {
      id: '1',
      img: 'https://placekitten.com/g/200/120',
      title: 'Lego The Movie'
    },
    {
      id: '1',
      img: 'https://placekitten.com/g/200/120',
      title: 'Avengers End game'
    }
  ],
  internacional: [
    {
      id: '1',
      img: 'https://placekitten.com/g/200/120',
      title: 'Lego The Movie'
    },
    {
      id: '1',
      img: 'https://placekitten.com/g/200/120',
      title: 'Avengers End game'
    }
  ]
}
/*
function createVideoDescription (videoInfo) {
  const item = document.createElement('article')
  return item
} */

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

window.addEventListener('load', function () {
  const seccionRecomendados = document.getElementById('recomendados')
  const seccionInternacional = document.getElementById('internacional')
  appendVideos(seccionRecomendados, videos.recomendados, 'Recomendados')
  appendVideos(seccionInternacional, videos.internacional, 'Internacional')
})
