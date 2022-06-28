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

function offerCanIn() {
  document.querySelector('.offer__cannabis').style.cssText = `
  transform: scale(1.05);`
}
function offerCanOut() {
  document.querySelector('.offer__cannabis').style.cssText = `
  transform: scale(1.0);`
}
function offerMerchIn() {
  document.querySelector('.offer__merch').style.cssText = `
  transform: scale(1.05);`
}
function offerMerchOut() {
  document.querySelector('.offer__merch').style.cssText = `
  transform: scale(1.0);`
}
function offerArtIn() {
  document.querySelector('.offer__art').style.cssText = `
  transform: scale(1.05);`
}
function offerArtOut() {
  document.querySelector('.offer__art').style.cssText = `
  transform: scale(1.0);`
}