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

function Cell(element, id, isMine) {
  ;(this.element = element),
    (this.id = id),
    (this.isMine = isMine),
    (this.leftClick = this.checkCell.bind(this)),
    this.element.addEventListener('click', this.leftClick)
}

Cell.prototype.checkCell = function () {
  console.log(this.isMine)
  // do something
}

var btn = document.querySelector('#btn')
var square = new Cell(btn, 1, true)
console.log('square:', square)

square.checkCell()

// Array.from
var items = Array.from({ length: 120 }, (_, i) => {
  return i
})

var itemsPerPage = 10
var pages = Math.ceil(items.length / itemsPerPage)
console.log('pages:', pages)
console.log(items)

const newItems = Array.from({ length: pages }, (_, i) => {
  //the callback is a map method must have a return
  const start = i * itemsPerPage
  console.log('start:', start)
  const tempItems = items.slice(start, start + itemsPerPage)
  return tempItems
})

console.log(newItems)
