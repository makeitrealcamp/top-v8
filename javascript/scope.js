// lexical scope
// static scope

// Global - window (navegador) - global (nodejs)
//   bar
//     foo
//  buz

// var foz = 1
// console.log(foz)

// console.log(baz)
// console.log(bee)

// function bar(zaf) {
//   var baz = 2
//   console.log(foz)
//   console.log(baz)
//   console.log(zaf)

//   function foo() {
//     var bee = 3
//     console.log(foz)
//     console.log(baz)
//     console.log(bee)
//     console.log(zaf)

    // foo()
//   }

//   foo()
// }

// bar()

// function buz() {
//   bar()
  // buz()
//   console.log(foz)
// }

// buz()

// function bar() {
//   var fuz = 2
// }

// if (true) {
  // var fuz = 2
  // let fuz = 2
// }

// {
//   let fuz = 0
// }

// for(var i = 0; i < 1; i++) {
//   var fuz = 2
// }

// var fuz = 0

// function bar() {
  // variable shadowing
  // var fuz = 1

  // console.log(fuz)
// }

// bar()
// console.log(fuz)

// recursion
// function sum(num) {
//   if (num <= 1) {
//     return num
//   }

//   return num + sum(num - 1)
// }

// console.log(sum(5))

// hoisting
// var foo;
// var fuz;
// console.log(foo)
// bar()
// fuz()

// var foo = 1
// let foo = 1

// function bar() {
//   console.log('hola')
// }

// var fuz = function () {
//   console.log('chao')
// }

// var fuz = () => {
//   console.log('chao')
// }

// function bar() {
//   var foo;
//   console.log(foo)

//   var foo = 1
// }

// bar()

// implicit coercion

// == vs ===
// console.log(2 == "2")
// console.log(1 + 'hola')
// console.log(1 - "1")
// console.log([] + [3, 2])
// console.log([] + 2)

// console.log(2 === Number("2"))
// console.log(String(1) + "hola")
// console.log(1 - Number("1"))
// console.log(String([]) + String([3, 2]))
// console.log(String([]) + String(2))

// Falsy values & Truthy values
// falsys: 0, '', undefined, null, NaN, false
// if(NaN) {
//   console.log(true)
// }

// closure
// Es una función que aún siendo invocada por fuera de su lexical scope tiene acceso a su lexical scope

function bar() {
  const baz = 1

  const foo = () => {
    return baz
  }

  return foo

  // return function foo() {
  //   return baz
  // }
}

const buz = bar()
const faz = buz()
console.log(faz)

// function bar() {
//   return 1
// }

// const foo = bar
// const foo = bar()

// console.log(foo())
// console.log(foo)

function car() {
  let speed = 0

  function accelerate() {
    speed++
  }

  function breaks() {
    speed--
  }

  function getSpeed() {
    return speed
  }

  return {
    accelerate: accelerate,
    break: breaks,
    getSpeed: getSpeed,
  }
}

const car1 = car()
car1.accelerate()
car1.accelerate()
car1.break()
console.log(car1.getSpeed())
