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
})

const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup__close')

popupClose.addEventListener('click', function () {
  popup.classList.remove('popup--active')
})