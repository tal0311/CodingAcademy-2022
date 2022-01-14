'use strict'

// HELPER
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

makeWater2()
function makeWater2() {
  var atoms = ['H', 'B', 'C', 'N', 'O', 'F']

  console.log('atoms:', atoms)
  var water = ''

  var counter = 0
  console.log('counter:', counter)

  while (water !== 'HOH') {
    // debugger // this will open a debugger on break point
    water = ''
    for (var i = 0; i < 3; i++) {
      var letter = atoms[getRandomInt(0, atoms.length)]

      water += letter
    }
    counter++
  }
}

// style text in console

console.log('%cTal Amit', 'background-color:red; color:black')

// log value and variable use { var }
var atoms = ['H', 'B', 'C', 'N', 'O', 'F']
var water = ''
var counter = 0

console.log({ atoms, water, counter })
// expected output
// {atoms: Array(6), water: '', counter: 0}

// use table to look better at array of objects
var arrTable = [
  {
    name: 'obj1',
    value: 1,
  },
  {
    name: 'obj2',
    value: 2,
  },
  {
    name: 'obj3',
    value: 3,
  },
  {
    name: 'obj4',
    value: 4,
  },
  {
    name: 'obj5',
    value: 5,
  },
]

console.table(arrTable)

// group your logs for a scop or object
console.group(makeWater2)

// trace call back function
console.trace(makeWater2)

// will display the object as a js object with all properties and methods
var h1 = document.querySelector('h1')
console.dir(h1)

// this is coming from devtools > sources > work space
console.log('workspace on sources')
