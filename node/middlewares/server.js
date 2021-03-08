const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const port = 8000
const app = express()

function logger(config) {
  return function (req, res, next) {
    console.log('config', config)
    console.log(req.method, req.path)
    next()
  }
}

function middle(req, res, next) {
  console.log('I am a middleware')
  console.log(req.body)
  next()
}

// x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// application/json
app.use(express.json())
app.use(cors({
  origin: '*',
}))
app.use('/about', morgan('dev'))
// app.use(logger('global'))
// app.use(middle)

// router.route('/').get(logger, middle, create)
// app.get('/', logger('top-v8'), (req, res) => {
app.get('/', (req, res) => {
  res.send('hola mundo')
})

app.get('/about', (req, res) => {
  res.send('hola about')
})

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});
