// 'use strict'
// this

function bar(ctx) {
  console.log(arguments)
  console.log('context: ', ctx)
  console.log(this.foo)
}

// const bar = () => {
//   console.log(this.foo)
// }

// 1. El this apunta al entorno global por defecto. En node apunta al módulo. Undefined si estamos en strict mode
bar('default')

// this === undefined
// this === module.exports
// this === window

// module.exports = {
//   foo: 'module'
// }

// 2. El this es el objeto desde el cual estamos invocando la función
const obj = {
  foo: 'object',
  bar: bar,
}

// this === obj

// obj.bar('object')

// 3. El this es definido por el desarrollador
const obj2 = {
  foo: 'object 2',
}

// soft binding
// bar.call(obj2, 'soft binding call')
// bar.apply(obj2, ['soft binding apply'])
// obj.bar.call(obj2, 'Extra soft binding call')
// obj.bar.apply(obj2, ['Extra soft binding call'])
// bar('default again')
// obj.bar('object again')

// hard binding
const bar2 = bar.bind(obj2, 1, 2, 3)
// function bar2(ctx) {
//   return bar.call(obj2, ctx)
// }

const bar3 = bar.bind(obj, 'hard binding 2')
// function bar3() {
//   return bar.call(obj, 'hard binding 2')
// }

const obj3 = {
  foo: 'object 3',
  bar: bar2,
}

// bar2(4, 5, 6)
// obj3.bar()
// bar2.call(obj, 4, 5, 6)
// bar3()

// 4. Cuando creamos una instancia de un prototipo usando la palabra clave new
//
//    1. se crea un nuevo objeto vacio
//    2. se asocia el nuevo objeto con otro objeto (prototipo)
//    3. al this se le asigna el objeto recien creado
//    4. si la funcion no esta retornado un objeto entonces retorna el this

// PascalCase
// camelCase
// snake_case
// kebab-case
function Person(name, age) {
  // this = {
  //   __proto__: Person
  // }
  this.name = name
  this.age = age

  // return this
  // return {}
}

const p1 = new Person('Maria', 24)
const p2 = new Person('Juan', 30)
// console.log(p1)
// console.log(p2)
