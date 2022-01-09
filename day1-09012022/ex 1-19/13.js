/*Exercise 13 - The Elevator
Keep a currentFloor variable, initialize it to 0
Ask the user which floor would he like to go to.
Validate the floor is between -2 and 4.
Update the currentFloor variable accordingly.
Let the user know his current floor.
If the user goes to floor 0 alert 'Bye Bye'.
If the user goes to the parking lot (negative floors) alert: 'Drive Safely'.*/

var currentFloor = 0
var userFloorInput = +prompt('which floor would you like to go to?')

if (userFloorInput > -2 && currentFloor > 4) {
  if (userFloorInput < 0) {
    console.log('drive safe')
  }
  if (userFloorInput === 0) {
    console.log('bye-bye')
  } else {
    currentFloor = userFloorInput
    console.log('currentFloor:', currentFloor)
  }
} else {
  console.log('floor number must be bw -2 and 4')
}
