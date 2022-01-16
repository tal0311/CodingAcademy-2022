'use strict'

/*Create an array of monsters with 4 monsters (use a createMonsters() function).

Each monster object should have the following keys –

id – a unique sequential number
name – a name that will be read from the user
power a random number (1 - 100)
Implement the following functions:

createMonsters()
createMonster(name, power) – returns a new monster object. The name and power parameters are optional – set them to default values if they aren’t passed to the function.
getMonsterById(id) – scans the array for a monster with the provided id and returns it.
deleteMonster(id) – the function removes the specified monster from the array.
updateMonster(id, newPower) – the function updates the specified monster, setting a new power.
Write the function: findMostPowerful(monsters).*/

var gNextId = 101

// create monster array
var gMonsters = createMonsters()
function createMonsters() {
  var monsters = []
  for (let i = 0; i < 4; i++) {
    var monster = createMonster()

    monsters.push(monster)
  }
  return monsters
}

// single monster
function createMonster(name = 'testMonster', power = 300) {
  return {
    id: gNextId++,
    name: name,
    power: power,
  }
}

// random power function
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

// get monster by id
console.log('getMonsterById:', getMonsterById(103))
function getMonsterById(id) {
  for (let i = 0; i < gMonsters.length; i++) {
    if (gMonsters[i].id === id) return gMonsters[i]
  }
  return null
}

// deleteMonsterById(101)
function deleteMonsterById(id) {
  for (let i = 0; i < gMonsters.length; i++) {
    if (gMonsters[i].id === id) {
      gMonsters.splice(i, 1)
      console.log(gMonsters[i].name, 'id:', id, 'was removed successfully')
    }
  }
}

// console.log('after:', gMonsters)

// update monster
console.log('updateMonster:', updateMonster(104, 800))

function updateMonster(id, newPower) {
  for (let i = 0; i < gMonsters.length; i++) {
    // var SingleMonster = gMonsters[i]
    if (gMonsters[i].id === id) {
      gMonsters[i].power = newPower
      return gMonsters[i]
    }
  }
}

/*Write the function: breedMonsters(monsterId1, monsterId2). This function returns a new monster. The breeded monster's power is an average of its parents power. Its name is the beginning half of the first parent name, and the second half is the end of the second parent name.*/

// bread monsters
console.log('bread monsters:', breedMonsters(101, 104))

function breedMonsters(monsterId1, monsterId2) {
  var monster1 = getMonsterById(monsterId1)
  console.log('monster1:', monster1)
  var monster2 = getMonsterById(monsterId2)
  var name =
    monster1.name.slice(0, (length - 1) / 2) +
    monster2.name.slice((length - 1) / 2, length - 1)
  var power = (monster1.power + monster2.power) / 2
  return createMonster(name, power)
}

// most powerFull monster

// console.log('the most powerFul monster is:', findMostPowerful(gMonsters))
function findMostPowerful(monsters) {
  var mostPowerFull = null

  for (let i = 0; i < monsters.length; i++) {
    var currMonster = monsters[i]
    if (!mostPowerFull || currMonster.power > mostPowerFull.power) {
      mostPowerFull = currMonster
    }
  }
  return mostPowerFull
}

/**
 * todo find sort()
 */
