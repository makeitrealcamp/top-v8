const express = require('express')
const { connect } = require('./db')
const bookRouter = require('./routes/book')

const port = 8000
const app = express()
connect()

app.use(express.json())

app.use('/books', bookRouter)

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})

