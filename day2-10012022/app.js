console.log('ok')

// Read positive numbers until their sum is bigger than
// 100 then print the average
// • Read numbers until you get an odd number, then
// print the maximal even number you got
// • Read names until “QUIT” is entered then print the
// names separated by
// positiveNum()
function positiveNum() {
  var sum = 0
  var count = 0
  while (sum < 100) {
    var num = +prompt('give me a number')
    console.log(num)
    sum += num
    count++
  }
  console.log(' sum is:', sum)
  var avg = 100 - sum / count
  console.log('avg:', avg)
}

function getName() {
  var name = prompt('name or "QUIT"')
  var namesStr = ' *'
  while (name !== 'QUIT') {
    namesStr += name + ' * '
    name = prompt('name or "QUIT"')
  }
  console.log(namesStr)
  console.log()
}

var num = 7
function isPrime(num) {
  var condition = 2
  var limit = Math.sqrt(num)
  while (condition < limit) {
    if (num % condition === 0) return false
    condition++
  }
  return true
}

var num = 123321
var res = isSymmetric()

function isSymmetric() {
  while (num > 10) {
    var length = '' + num.length // how long is the number
    var divider = 10 ** (length - 1) // how many numbers 0 to divide

    var leftDigit = parseInt(num / 10000) //left digit
    console.log('leftDigit:', leftDigit)
    var rightDigit = num % 10 //right digit
    console.log('rightDigit:', rightDigit)

    if (leftDigit !== rightDigit) return false //condition for exit

    num = parseInt(num / 10) //cut number
    console.log('num:', num)
    divider /= 10 //modify divider
    mun -= leftDigit * divider //cut number
  }
  return true
}
