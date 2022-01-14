var atoms = ['H', 'B', 'C', 'N', 'O', 'F']

// makeWater()
function makeWater() {
  var water = []
  var counter = 0
  // BUILDING THE MOLECULES
  while (water.length < 3) {
    var letter = atoms[getRandomInt(0, atoms.length)]
    counter++

    if (letter === 'H' || letter === 'O') {
      water.push(letter)
    } else if (water.includes('O')) continue
  }
  // IF STRING IS NOT AT RIGHT ORDER
  if (water.join('') !== 'HOH') {
    makeWater()
    counter++
  } else {
    console.log('water:', water.join(''), 'i:', counter)
  }
}

// HELPER
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

makeWater2()
function makeWater2() {
  var atoms = ['H', 'B', 'C', 'N', 'O', 'F']
  var water = ''
  var counter = 0

  while (water !== 'HOH') {
    water = ''
    for (var i = 0; i < 3; i++) {
      var letter = atoms[getRandomInt(0, atoms.length)]

      water += letter
    }
    counter++
  }
  console.log(water, counter)
}
