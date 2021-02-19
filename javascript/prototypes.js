// objetos literales
const maria = {
  name: 'Maria',
  age: 24,
  working: true,
  greet: function() {
    console.log('hola mi nombre es Maria')
  }
}

const juan = {
  name: 'Juan',
  age: 25,
  working: false,
  greet: function() {
    console.log('hola mi nombre es Juan')
  }
}

maria.greet()
juan.greet()

// Fabricas de objetos
function person(name, age, working) {
  return {
    name: name,
    age: age,
    working: working,
    greet: function() {
      console.log('Hola mi nombre es ' + this.name)
    }
  }
}

const ana = person('Ana', 23, true)
const martin = person('Martin', 30, false)

ana.greet()
martin.greet()

// Prototipos
// Todo es un Objeto. Todo es un prototipo
// const str = 'hola'
// str.split('')

function Person(name, age, working) {
  this.name = name
  this.age = age
  this.working = working
  // No No
  // this.greet = function () {
  //   console.log('Hola mi nombre es ' + this.name)
  // }
}

Person.prototype.greet = function () {
  console.log('Hola mi nombre es ' + this.name)
}

function Teacher(name, age, working, lesson) {
  Person.call(this, name, age, working)
  this.lesson = lesson
}

Teacher.prototype = new Person()
Teacher.prototype.constructor = Teacher

// instancias
const pedro = new Person('Pedro', 28, true)
const camila = new Person('Camila', 30, false)

pedro.greet()
camila.greet()
// console.log(pedro.hasOwnProperty('name'))
// console.log(pedro.nothing)

const simon = new Teacher('Simon', 29, true, 'TOP')
console.log(simon)
simon.greet()

// Clases
// syntatic sugar
// class Person {
//   constructor(name, age, working) {
//     this.name = name
//     this.age = age
//     this.working = working
//   }

//   greet() {
//     console.log('Hola mi nombre es ' + this.name)
//   }
// }

// class Teacher extends Person {
//   constructor(name, age, working, lesson) {
//     super(name, age, working)
//     this.lesson = lesson
//   }
// }

// polyfill
const arr = [1,2,3]
console.log(arr.map((el, index, arro) => {
  return el * 2
}))

Array.prototype.map2 = function(cb) {
  let newArray = []

  for(let i = 0; i < this.length; i++) {
    const newEl = cb(this[i], i, this)
    newArray.push(newEl)
  }

  return newArray
}

console.log(arr.map2((el, index, arro) => {
  return el * 2
}))

console.log(arr.map2((el, index, arro) => {
  return el + index
}))
