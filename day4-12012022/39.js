/*Exercise 39 - Count Votes
Implement a function named countVotes(votes, candidateName) which counts how many votes a candidate received.

For example: if the votes array looks like this: ['Nuli', 'Pingi', 'Uza', 'Shabi', ‘Uza’],and the candidate name is 'Uza',the function returns 2.*/

var votes = ['Nuli', 'Pingi', 'Uza', 'Shabi', 'Uza', 'Shabi', 'Shabi']

var res = countVotes(votes, votes[3])
console.log('res:', res)
function countVotes(votes, candidateName) {
  var count = 0
  for (let i = 0; i < votes.length; i++) {
    currCandidate = votes[i]
    if (candidateName === currCandidate) count++
  }
  return candidateName + 'got:', count
}
