document.getElementById('time').innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = 'pink'
}
function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}
function yellow() {
  document.body.style.backgroundColor = 'yellow'
}
function reset() {
  document.body.style.backgroundColor = 'linen'
}

function showhtml() {
  document.getElementById('fig').src = 'image/html.png'
  document.getElementById('desc').innerHTML =
    'HTML은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다.'
}
function showcss() {
  document.getElementById('fig').src = 'image/css.png'
  document.getElementById('desc').innerHTML =
    'css는 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다.'
}
function showjs() {
  document.getElementById('fig').src = 'image/js.png'
  document.getElementById('desc').innerHTML =
    'js는 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다.'
}

function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}
