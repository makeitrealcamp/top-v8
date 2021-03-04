const mongoose = require('mongoose')

function connect() {
  mongoose.connect('mongodb://localhost:27017/validations', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  mongoose.connection.once('open', () => {
    console.log('Connection established successfully')
  })

  mongoose.connection.on('error', error => {
    console.log(error)
  })

  return mongoose.connection
}

module.exports = { connect }
