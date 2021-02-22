// functions are first-class citizens
// Herencia vs Composición
function person(name, age) {
  return {
    name,
    age,
  }
}

function teacher(name, age, lesson) {
  return {
    ...person(name, age),
    lesson,
  }
}

const maria = teacher('Maria', 24, 'TOP')

// Inmutabilidad
let arr = [1,2,3]
arr = arr.concat(4)

// Pure functions
// Dados los mismos argumentos la función siempre retorna el mismo resultado
function sum(a,b) {
  return a + b
}

sum(1,2)
sum(1,2)
sum(1,2)

function greet(name) {
  if(name) {
    return `Hola ${name}`
  } else {
    return 'Hola mundo'
  }
}

greet('Maria')
greet('Maria')
greet('Maria')

// No tiene side effects, efectos secundarios
let num = 0
function impureSum(a) {
  console.log('hola')
  num++
  return a + num
}

impureSum(1)
impureSum(1)
impureSum(1)

function pureSum(a, b) {
  return a + b
}

pureSum(1, num)
