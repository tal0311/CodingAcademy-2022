'use strict'

// function getElement(selection) {
//   var element = document.querySelector(selection)
//   if (element) return element
//   else throw Error('check selection')
// }

// class Cell {
//   constructor(element, id, isMine) {
//     ;(this.element = element), (this.id = id), (this.isMine = isMine)
//   }

//   checkValue() {
//     this.element.addEventListener('click', console.log('leftClick'))
//   }
// }

var btn = document.querySelector('#btn')
// var square = new Cell(btn, 1, true)

// console.log(square)

function Cell(element, id, isMine) {
  ;(this.element = element), (this.id = id), (this.isMine = isMine)
}

Cell.prototype.checkCell = function () {
  this.element.addEventListener(
    'click',
    function onClick(e) {
      if (this.isMine) {
        this.element.innerText = 'X'
      } else {
        this.element.classList.add('clicked')
      }
    }.bind(this)
  )
}

var square = new Cell(btn, 1, true)
console.log('square:', square)

square.checkCell()
