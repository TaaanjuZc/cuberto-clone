// var cursor = document.querySelector('.cursor')
// var main = document.querySelector('#main')

// main.addEventListener('mousemove', function(dets) {
//     cursor.style.left = dets.x + 'px'
//     cursor.style.top = dets.y + 'px'
// })

const cursor = new MouseFollower({
  container: document.body,
  speed: 0.2
});

document.querySelector('#overlay1').addEventListener('mousemove', function(dets){
  document.querySelector('#elem1 img').style.scale = 1
  document.querySelector('#elem1 img').style.opacity = 1

  document.querySelector('#elem1 img').style.left = (dets.x-440) +'px'
  document.querySelector('#elem1 img').style.top = (dets.y-375) +'px'
})