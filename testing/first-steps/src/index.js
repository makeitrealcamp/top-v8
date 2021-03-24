exports.sum = (a, b) => {
  return a + b
}

exports.multiply = (a, b) => {
  return a * b
}

exports.person = (name, age) => {
  return {
    name,
    age,
    working: false,
    greet() {
      return `Hola mi nombre es ${name}`
    }
  }
}

exports.map = (cb) => {
  cb(1)
}
