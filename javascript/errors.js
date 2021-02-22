// const error = new Error()

// const foo = undefined
// foo() // TypeError

// console.log(foo) // Reference

class DivideByZeroError extends Error {
  constructor(message) {
    super(message)
    this.name = 'DivideByZeroError'
  }
}

function division(a,b) {
  if(b === 0) {
    throw new DivideByZeroError('cannot divide by zero')
  }
  return a / b
}

// error handling
try {
  division(1, 0)
} catch(error) {
  console.log('Intenta de nuevo más tarde')
  console.dir(error)
  // console.log(error.name, error.message, error.stack)
}

console.log(division(2,1))
