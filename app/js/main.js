function homeHoverIn() {
  document.querySelector('.home__arrow').style.cssText = `
  margin-left: 20px;`
}
function homeHoverOut() {
  document.querySelector('.home__arrow').style.cssText = `
  margin-left: 10px;`
}

const btn = document.querySelector('.menu__burger')
const menu = document.querySelector('.menu__wrapper')

btn.addEventListener('click', function () {
  menu.classList.toggle('menu__wrapper--active')
  btn.classList.toggle('menu__burger--active')
})

function offerZoomIn(x) {
  document.getElementById("offer-img-" + x).style.cssText =
    `transform: scale(1.05);`
}
function offerZoomOut(x) {
  document.getElementById("offer-img-" + x).style.cssText =
    `transform: scale(1.0);`
}