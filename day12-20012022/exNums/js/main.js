'use strict'
var gNums = []
var BOARD_SIZE = 16

function changeLevel(size) {
  BOARD_SIZE = size
  init()
}

function init() {
  gNums = resetNums()
  renderBoard()
}

function resetNums() {
  var nums = []
  for (let i = 0; i < BOARD_SIZE; i++) {
    nums.push(i + 1)
  }
  return nums
}

function renderBoard() {
  var StrHTML = ''
  var count = 0
  var length = Math.sqrt(BOARD_SIZE)
  for (let i = 0; i < length; i++) {
    StrHTML += `<tr>`
    for (let j = 0; j < length; j++) {
      StrHTML += `<td onclick="cellClicked(this)">${randomNum()}</td>`
      count++
    }

    StrHTML += `</tr>`
  }

  var elBoard = document.querySelector('.board')
  elBoard.innerHTML = StrHTML
}

var gPrevNum = 0
function cellClicked(elBtn) {
  var curCellNum = +elBtn.innerText

  if (checkBoard() === BOARD_SIZE) {
    clearInterval(time)
    console.log('game over')
    window.location.reload()
  }

  if (curCellNum - 1 === gPrevNum) {
    var time = setInterval(stopWatch, 1000)
    elBtn.classList.add('clicked')
    gPrevNum = curCellNum
  }
}

function checkBoard() {
  var elCelles = document.querySelectorAll('.clicked')
  return elCelles.length + 1
}

function updateSec() {
  gSec + 1

  return gSec++
}

var gSeconds = 0
function stopWatch() {
  gSeconds++

  // var seconds = countTime()

  var elTime = document.querySelector('.time')
  elTime.innerText = `${gSeconds}`
}

function randomNum() {
  var numIdx = getRandomInt(0, gNums.length)
  var num = gNums.splice(numIdx, 1)
  return num[0]
}

// utils
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

// var gTimePassedInSeconds = 0

// function countTime() {
//   var display = ' '
//   gTimePassedInSeconds++
//   if (gTimePassedInSeconds > 60) {
//     const seconds =
//       gTimePassedInSeconds % 60 < 10
//         ? '0' + (gTimePassedInSeconds % 60)
//         : gTimePassedInSeconds % 60
//     display = parseInt(gTimePassedInSeconds / 60) + ' : ' + seconds
//   } else display = gTimePassedInSeconds
//   return display
// }
