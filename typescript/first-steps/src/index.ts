// let anything: any;

// Primitivos
let num: number
num = 1
// num = 'string'

let str: string = 'hola mundo'
// str = true

let bool: boolean = true
// bool = 3

let something = 'string'
// something = 2

let double: number | string = '4'
double = 3
// double = true

// Type aliases
type name = number | string

let p: name = 'Maria'
p = 5
// p = true

// Arrays
// let arr: string[] = ['hola', 'mundo']
// let arr: string[] | number[] = ['hola', 2]
let arr: name[] = ['hola', 2]

// Tuples
let tup: [string, number] = ['hola', 2]

// Interfaces
interface IPerson {
  name: string,
  age: number,
  working?: boolean,
}

// class Person implements IPerson {
//   constructor(name: string, age: number, working: boolean) {
//     this.name = name
//     this.age = age
//     this.working = working
//   }
// }

// class Person {
//   constructor(name: string, age: number, working: boolean) {
//     this.name = name
//     this.age = age
//     this.working = working
//   }
// }

// const p1 = new Person('Maria', 24, true)

// Duck Typing
const person: IPerson = { name: 'Maria', age: 24 }

interface ITeacher {
  course: 'TOP' | 'FS',
  teach: () => void
}

const teacher: IPerson & ITeacher = {
  name: 'Simon',
  age: 30,
  working: true,
  course: 'TOP',
  teach() {
    console.log('hola mundo')
  }
}

// functions
function sum(a: number, b: number) {
  return a + b
}

num = sum(1, 2)

// Promises
// Promise<string>
