console.log('ok')

setTimeout(popUp, 2500)

function popUp() {
  var elPopUp = document.querySelector('.popup-container')
  elPopUp.style.display = 'block'

  setTimeout(function () {
    elPopUp.style.display = 'none'
  }, 2000)
}
