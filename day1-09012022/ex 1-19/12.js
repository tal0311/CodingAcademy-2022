/*Exercise 12 - Guess Who
Use the alert function, and ask the user to think about an actor.

Use the confirm function and ask the user two yes/no questions:

Question 1: 'Is he a man?'


If the answer to question 1 is 'Yes', then Question 2 becomes: 'Is he blonde?'
If the answer to question 2 is 'Yes' - Philip Seymour!
If the answer to question 2 is 'No' - Tom Cruise!

If the answer to question 1 is 'No', then Question 2 becomes: 'Is she English?'
If the answer to question 2 is 'Yes' - Keira Knightley!
If the answer to question 2 is 'No' - Natalie Portman!*/

var userGuess = alert('think about an actor')

if (confirm('is he a man?')) {
  if (confirm('is he blond')) {
    console.log('Philip Seymour')
  } else {
    console.log('Tom Cruise!')
  }
} else {
  if (confirm('is she english?')) {
    console.log('Keira Knightley!')
  } else {
    console.log('Natalie Portman!')
  }
}
