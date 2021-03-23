require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { formData } = require('./utils/formData')

const port = process.env.PORT || 8000
const app = express()

app.use(express.json()) // Content-Type: application/json
app.use(cors())

app.post('/profile', formData, (req, res) => {
  console.log(req.body)
  res.send('hola mundo')
})

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});
