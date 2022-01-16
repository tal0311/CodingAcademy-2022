'use strict'

/*Exercise 53 - Students
Create a students array – use the same algorithm as before and name it createStudents()
Read a student name from the user until ‘quit’ is entered. Populate the students array with student objects.
Read 3 grades for each student (each student should have a grades array).
Calculate the average grade for each student.
Write the function findWorstStudent(students).
Write the function sortStudentsByGrade(students).
Write the function sortStudentsByName(students)*/

var gNextId = 101

// create monster array
var gStudents = createMonsters()
console.log('gStudents:', gStudents)
function createMonsters() {
  var students = []
  for (let i = 0; i < 4; i++) {
    var student = createStudent()

    students.push(student)
  }
  return students
}

// single student
function createStudent(name = 'testStudent', grades = [90, 87, 78]) {
  return {
    id: gNextId++,
    name: name,
    grades: grades,
  }
}

function getGrades() {
  var grades = []
  for (let i = 0; i < 3; i++) {
    grades.push(+prompt('log student 3 grades'))
  }
  return grades
}

var studentsAvg = calcAvgGrades()
function calcAvgGrades() {
  var avgGrades = []

  var sum = 0
  for (let i = 0; i < gStudents.length; i++) {
    var student = gStudents[i]
    var sum = 0

    for (let j = 0; j < student.grades.length; j++) {
      var singleGrade = student.grades[j]
      sum += singleGrade
    }

    var avg = sum / student.grades.length
    avgGrades.push({ student, avg })
  }
  return avgGrades
}

// dummy data
var arr = [
  {
    student: {
      id: 101,
      name: 'tal1',
      grades: [90, 90, 90],
    },
    avg: 90,
  },
  {
    student: {
      id: 102,
      name: 'tal2',
      grades: [80, 80, 80],
    },
    avg: 80,
  },
  {
    student: {
      id: 103,
      name: 'tal3',
      grades: [95, 95, 95],
    },
    avg: 95,
  },
  {
    student: {
      id: 104,
      name: 'tal4',
      grades: [98, 98, 98],
    },
    avg: 98,
  },
]

// console.log('worst student is:', findWorstStudent(arr))
function findWorstStudent(students) {
  var sorted = students.sort(function (a, b) {
    if (a.avg > b.avg) return 1
    else return -1
  })

  return sorted[0]
}
