'use strict'

// write data base model

var gCurrQuestIdx = 0
var gCorrect = 0
var gQuests = [
  {
    id: 1,
    opts: ['this is a flag', 'this is a bad'],
    correctOptIndex: 0,
    img: './src/0.png',
  },
  {
    id: 2,
    opts: ['this is a dog', 'this is a cat'],
    correctOptIndex: 1,
    img: './src/1.jpeg',
  },
]

function init() {
  render()
}

// update model

function render() {
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
  console.log(idx)
  if (idx === gQuests[gCurrQuestIdx].correctOptIndex) {
    elH3.innerText = 'you are correct'
    gCurrQuestIdx++
    gCorrect++
    console.log('gCurrQuestIdx:', gCurrQuestIdx)
    setTimeout(init, 1000)
  } else {
    elH3.innerText = 'try again'
  }
}

// remember update model and then update dom
