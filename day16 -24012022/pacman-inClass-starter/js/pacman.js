'use strict'
const PACMAN = '😷'

var gPacman
function createPacman(board) {
  gPacman = {
    location: {
      i: 6,
      j: 6,
    },
    isSuper: false,
  }
  board[gPacman.location.i][gPacman.location.j] = PACMAN
}

function movePacman(ev) {
  if (!gGame.isOn) return
  // use getNextLocation(), nextCell
  var nextLocation = getNextLocation(ev)
  var nextCellContent = gBoard[nextLocation.i][nextLocation.j]

  // return if cannot move
  if (nextCellContent === WALL) return
  // hitting a ghost?  call gameOver
  if (nextCellContent === GHOST && !gPacman.isSuper) {
    gameOver()
    return
  }
  if (nextCellContent === FOOD) updateScore(1)
  if (nextCellContent === SUPER) {
    superFood(nextCellContent)
    updateScore(100)
  }
  if (nextCellContent === CHERRY) updateScore(10)
  // update the model
  gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
  // update the DOM
  renderCell(gPacman.location, EMPTY)
  // Move the pacman
  gPacman.location = nextLocation
  // update the model
  gBoard[gPacman.location.i][gPacman.location.j] = PACMAN
  // update the DOM
  renderCell(gPacman.location, PACMAN)
}

function superFood(nextCellContent) {
  updateScore(100)
  gPacman.isSuper = true
  if (nextCellContent === GHOST) {
    nextCellContent === ''
  }
  for (let i = 0; i < gGhosts.length; i++) {
    gGhosts[i].color = 'pink'
  }

  setTimeout(function () {
    for (let i = 0; i < gGhosts.length; i++) {
      gGhosts[i].color = getRandomColor()
    }
    gPacman.isSuper = false
  }, 10000)
}

function getNextLocation(ev) {
  var nextLocation = {
    i: gPacman.location.i,
    j: gPacman.location.j,
  }
  // figure out nextLocation
  switch (ev.key) {
    case 'ArrowDown':
      nextLocation.i++
      break
    case 'ArrowUp':
      nextLocation.i--
      break
    case 'ArrowLeft':
      nextLocation.j--
      break
    case 'ArrowRight':
      nextLocation.j++
      break
  }

  return nextLocation
}
