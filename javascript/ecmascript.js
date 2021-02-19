// Argumentos por defecto
function sum(a, b) {
  if(a === undefined) {
    return 'a must be number'
  }
  if(b === undefined) {
    b = 0
  }
  return a + b
}

function sum(a = 0, b = 0) {
  return a + b
}

// console.log(sum(1))
// console.log(sum(1, 5))
// console.log(sum(undefined, 5))
// console.log(sum(() => {}, 5))

// Plantillas literales
let name = 'Ana'
// console.log('Hola ' + name + '!')
// console.log(`Hola ${name}!`)
// console.log(`Hola ${1 + 2}`)
// console.log(`Hola ${sum(1,5)}`)
// console.log(`Hole ${sum}`)
// console.log(`
//   <div>
//     <p>${name}</p>
//   </div>
// `)

// Destructuración
const obj = { a: 1, b: 2, c: 3 }

// let a = obj.a
// let b = obj.b
// let c = obj.c

// let { a: rename, c } = obj
// console.log(rename,c)

const arr = [1,2,3,4]

// let first = arr[0]
// let loquesea = arr[1]

// let [ first, loquesea ] = arr
// console.log(first, loquesea)

// Spread operator (...)
// console.log(...arr)
// console.log(1,2,3,4)

const arr2 = [ ...arr ]
// console.log(arr2)
// console.log(arr === arr2)

const obj2 = { ...obj }
// console.log(obj2)
// console.log(obj === obj2)

const arr3 = [ ...arr, ...arr2 ]
// console.log(arr3)

const obj3 = { ...obj, ...obj2, a: 'own property' }
// console.log(obj3)

// Rest (...)
// const { a, b, ...rest } = obj
// const { a, b, ...loquesea } = obj
// console.log(a, rest)

const [d, ...rest] = arr
console.log(rest)

// Propiedades y métodos conscisos
let age = 29

// const person = {
//   name: name,
//   age: age,
//   greet: function () {
//     console.log('hola')
//   }
// }

function bar() {}

const person = { name, age }
const person = {
  name,
  age,
  bar,
  greet() {
    console.log('hola')
  }
}

console.log(person)
person.greet()

// let, const
// arrow function
// class
