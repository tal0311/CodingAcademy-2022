'use strict'

/*Exercise 54 - Airline
Build a data structure for an airline company with the enteties listed below. For each type of entity, define an object and implement a create function.*/

// Tip: implement createPlane(model, seatCount)

var gPlanes = createPlans()
// console.log('gPlanes:', gPlanes)
function createPlans() {
  var plans = []
  for (let i = 0; i < 2; i++) {
    plans.push(createPlane('airbus', 100))
  }
  return plans
}

function createPlane(model, seatCount) {
  return {
    model: model,
    seatCount: seatCount,
  }
}

// random id
var randomId = generateId(0, 10)
function generateId(min, max) {
  var randomId = ''
  for (let i = 0; i < 7; i++) {
    randomId += Math.floor(Math.random() * (max - min) + min)
  }
  return randomId
}
// passenger object –

var gPassengers = cratePassengers()
// console.log('gPassengers:', gPassengers)

function cratePassengers() {
  var passengers = []
  for (let i = 0; i < 5; i++) {
    passengers.push(cratePassenger(randomId, 'test pass', []))
  }
  return passengers
}

function cratePassenger(id, name, flight) {
  return {
    id: id,
    name: name,
    flight: flight,
  }
}

/*A flight object –


date
departure – where the flights takes off from…
destination – …and where it lands.
plane – a pointer to a plane object
passengers – an array of pointers to the relevant passenger objects*/

var gFlights = crateFlights()
// console.log('gFlights:', gFlights)
function crateFlights() {
  var flights = []

  for (let i = 0; i < 2; i++) {
    flights.push(crateFlight(3.11, 'ISR', 'USA', gPlanes[i], []))
  }
  return flights
}

function crateFlight(date, dep, des, plan, passengers) {
  return {
    date: date,
    dep: dep,
    des: des,
    plan: plan,
    passengers: passengers,
  }
}

var booked = bookFlight(gFlights[0], gPassengers)
console.log('booked:', booked)

function bookFlight(flight, passenger) {
  var addPassengersToFlight = (flight.passengers = [passenger])
  var passengers = passenger
  for (let i = 0; i < passengers.length; i++) {
    passenger[i].flight = [flight]
  }

  return flight
}

console.log('flights:', gFlights)

console.log('is fully booked:', isFullyBooked(gFlights[0]))
function isFullyBooked(flight) {
  // console.log(flight)
  var seatCount = flight.plan.seatCount
  var passengers = flight.passengers.length
  return passengers < seatCount ? false : true
}
