/* Exercise 10 - Facebook Friends
Ask the user how many friends he has on FB and print out an analysis:

More than 500 friends – 'OMG, a celebrity!'
More than 300 friends (and up to 500) – 'You are well connected!'
More than 100 friends – 'You know some people...'
Up to 100 friends – 'Quite picky, aren't you?'
0 – 'Let’s be friends!'*/

var userFriendsNumber = +prompt('how many FB friends do you have?')

if (userFriendsNumber > 500) {
  console.log('OMG you atr a celeb')
} else if (userFriendsNumber > 300 && userFriendsNumber < 500) {
  console.log('you are well connected')
} else if (userFriendsNumber > 100) {
  console.log('You know some people...')
} else if (userFriendsNumber < 100) {
  console.log("Quite picky, aren't you?")
} else if (userFriendsNumber === 0) {
  console.log('Let’s be friends!')
}
