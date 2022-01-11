'use strict'

/*Exercise 35 - Encrypt
Write the function encrypt which gets a string and encrypts it.

Implement the function by replacing each character code with code + 5 (i.e. 'r' will be replaced by: 'w').
Write the function decrypt which decrypts a message.
Tip: try writing this in the console: 'ABC'.charCodeAt(0)
Tip: search for the opposite function to charCodeAt

Bonus: extract the common logic to an encode function which both encrypts and decrypts.*/

var str = 'encrypt this'

// var res = encrypt(str)
// console.log('res:', res)

function encrypt(str) {
  var encrypted = ''

  for (let i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i) + 5
    var encryptedChar = String.fromCharCode(char)
    encrypted += encryptedChar
  }
  return encrypted
}

// var deRes = decrypt('jshw~uy%ymnx')
// console.log('deRes:', deRes)

function decrypt(str) {
  var decrypted = ''

  for (let i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i) - 5
    var decryptedChar = String.fromCharCode(char)
    decrypted += decryptedChar
  }
  return decrypted
}

var res3 = encode(str, -5)
console.log('res3:', res3)

function encode(str, number) {
  var modifiedString = ''

  for (let i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i) + number
    var convertedChar = String.fromCharCode(char)
    modifiedString += convertedChar
  }
  return modifiedString
}
