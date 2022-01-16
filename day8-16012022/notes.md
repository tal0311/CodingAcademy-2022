## objects

- position and order is not important in object
- every key can hold a value
- to access values use . pet.name
- to assign property use = , pet.name = 'jonny'
- to crate property use pet.age = _value_
- use [] to access name of property with in a var. movie['price']===movie.price
- if object=null the object is deleted.
- object is a pointer.
- " " + object will return [object object]
- every object should have a unique id.

 <!-- code -->

var gNextId=101

var players = [
{
id: gNextId++, //101
name:'puki'
},
{
id: gNextId++, //102
name:'suki'
},
]

- 'g' before a var is a **Global** variable.
- default parameter createPlayer(name,score=5)
- return null if item does not exist.

### object as Map

map a single value with different keys.  
city: population.  
you can iterate over map with a for...in loop

<!-- code -->

for (const key in object) {
const element = object[key]; // will give you the **value** of a specific key
}

### function as reference

use the function ar a parameter and cal it inside a different function

function runThisFunc(func){

func() // here im calling the parameter prom line 52
}
runThisFunc(foo)

function foo(){
console.log('foo')
}

#### setTimeOut

anonymous function will run one time in the code
