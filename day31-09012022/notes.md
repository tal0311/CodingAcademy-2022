# ES6

link: https://caniuse.com/

1. template string ``
2. const will allways pint to object or value
3. var histing to top of code / let and const do not hoist var will uplift to top of function.
   let and const are limited ro their function scope.
4. open scope by {} without function

## arrow functions

this will point to the scope that she created on.

undefined to skip parameter in function

## rest

## object shelow copy

/ Object.assign (ES5) performs shallow copy:
var user1 = {
name: "Shaul",
score: 90,
address:
{ city: 'Tel Aviv', street: 'Nahmani' }
};
var user2 = Object.assign({}, user1);

es6
var user3={..user1}

const pet3 = JSON.parse(JSON.stringify(pet1))

## array.from

to convert node list to array


# html5
label for="name" must have id on input

input type 
validation required
