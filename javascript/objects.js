// Arrays
// Inmutabilidad

let arr = [1,2,3]

// Copiar
// const arr2 = arr.slice(0)

// Obtener
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[-1])

// Agregar
// Al final
// console.log(arr.push(4))
// console.log(arr)
//
// const arr2 = arr.concat(4)
// console.log(arr2)
// console.log(arr)
// console.log(arr === arr2)

// Al principio
// console.log(arr.unshift(0))
// console.log(arr)
//
// const arr2 = [0].concat(arr)
// console.log(arr2)
// console.log(arr)
// console.log(arr === arr2)

// Al medio
// console.log(arr.splice(2, 0, 10, 'hola', true))
// console.log(arr)
// console.log(arr[10] = 10)
// console.log(arr)
//
// const arr2 = arr.slice(0, 1)
// const arr3 = arr.slice(1)
// const arr4 = arr2.concat(10).concat(arr3)
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)
// const arr2 = arr.slice(0, 1).concat(10).concat(arr.slice(1))
// console.log(arr2)

// Modificar
// console.log(arr[1] = 59)
// console.log(arr.splice(2, 1, 30))
// console.log(arr)
//
// const arr2 = arr.slice(0)
// arr2[2] = 59
// const arr2 = arr.slice(0, 1)
// const arr3 = arr.slice(2)
// const arr4 = arr2.concat(10).concat(arr3)
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)

// Eliminar
// Al final
// console.log(arr.pop())
// console.log(arr)
// Al principio
// console.log(arr.shift())
// console.log(arr)
// Al medio
// console.log(arr.splice(0, 3))
// console.log(arr)
//
// const arr2 = arr.slice(0, 1)
// const arr3 = arr.slice(2)
// const arr4 = arr2.concat(arr3)
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)

// Iteraciones
// for(let i = 0; i < arr.length; i++) {
//   arr[i]
// }

// for(let val of arr) {
//   console.log(val)
// }

// arr.forEach()
// arr.reduce()
// arr.map()
// arr.filter()
// arr.every()
// arr.some()

// Object literals

let obj = { a: 1, b: 2, c: 3, 'hola-mundo': 4 }

// Obtener
// console.log(obj.a)
// console.log(obj.hola-mundo)
// console.log(obj['a'])
// const prop = 'b'
// console.log(obj[prop])
// function foo() {
//   return 'c'
// }
// console.log(obj[foo()])

// Agregar
// console.log(obj.name = 'maria')
// console.log(obj['age'] = 24)
// console.log(obj)
//
// const obj2 = Object.assign({}, obj, { d: 5 })
// console.log(obj)
// console.log(obj2)

// Modificar
// console.log(obj.name = 'juan')
// console.log(obj['age'] = 30)
// console.log(obj)
//
// const obj2 = Object.assign({}, obj, { a: 5 })
// const obj2 = Object.assign({}, { a: 5 }, obj)
// console.log(obj)
// console.log(obj2)

// Eliminar
// console.log(delete obj.a)
// delete obj['b']
// console.log(obj)

// Iteranciones
// for(let key in obj) {
//   const value = obj[key]
//   console.log(key, value)
// }

// Primitivos vs Referencia (Objetos)
// const num = 1
// const str = 'str'
// const bool = true
// const num = new Number(1)
// const str = new String('str')
// const bool = new Boolean(true)
// console.log(num, str, bool)

// let num1 = 1
// let num2 = 1
// console.log(num1 == num2)

const a = [1]
const b = [1]
const c = a

// console.log(a == b) // false
// console.log(b == c) // false
// console.log(a == c) // true
// c.push(2)
// console.log(a)

let x = { a: 1 }
let y = { a: 1 }
let z = x

// console.log(x == y) // false
// console.log(y == z) // false
// console.log(x == z) // true
// z.b = 2
// console.log(x)
