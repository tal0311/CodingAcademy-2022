'use strict'

// write data base model

var gCurrQuestIdx = 0
var gCorrect = 0
var gQuests = [
  {
    id: 1,
    opts: ['This is a flag', 'This is a bad'],
    correctOptIndex: 0,
    img: './src/0.png',
  },
  {
    id: 2,
    opts: ['This is a dog', 'This is a cat'],
    correctOptIndex: 1,
    img: './src/1.jpeg',
  },
  {
    id: 3,
    opts: ['This is a pet', 'This is a net'],
    correctOptIndex: 1,
    img: './src/2.jpg',
  },
]

function init() {
  renderQuest()
}

// update model

function renderQuest() {
  var strHtml = ` <h3>Pick the sentence that describes the picture:</h3>
      <div class="quest-container">
        <div class="img-container">
          <img src="${gQuests[gCurrQuestIdx].img}"  />
        </div>
        <div class="options">
          <div>
            <p data-id="${
              gCurrQuestIdx.correctOptIndex
            }" onclick="checkAnswer(${0})">
          
              ${gQuests[gCurrQuestIdx].opts[0]}
            </p>
            <p data-id="${
              gCurrQuestIdx.correctOptIndex
            }" onclick="checkAnswer(${1})">
              ${gQuests[gCurrQuestIdx].opts[1]}
            </p>
          </div>
        </div>
      </div>`

  var elMain = document.querySelector('.main')
  elMain.innerHTML = strHtml
}

// render html

// click events and change model
function checkAnswer(idx) {
  var elH3 = document.querySelector('h3')

  if (idx === gQuests[gCurrQuestIdx].correctOptIndex) {
    elH3.innerText = 'You are correct'
    gCurrQuestIdx++
    gCorrect++
    console.log('gCurrQuestIdx:', gCurrQuestIdx)
    var gameOn = setTimeout(init, 1000)
    if (gCorrect === gQuests.length) {
      console.log('game over')
      clearInterval(gameOn)
      endScreen()
    }
  } else {
    elH3.innerText = 'Try again'
  }
}

// remember update model and then update dom

function endScreen() {
  var strHtml = `<div class="game-over">Game over!</div>
      <div class="score">You got ${gCorrect} Quest correct</div>
        <button onclick="restart()">Restart</button> `

  var elMain = document.querySelector('.main')
  elMain.innerHTML = strHtml
}

function restart() {
  window.location.reload()
}
