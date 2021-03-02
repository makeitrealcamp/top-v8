// export default Foo
// import Foo from 'path/to/foo'
//
// module.exports = Foo
// const Foo = require('path/to/foo')

// export const Foo
// import { Foo } from 'path/to/foo'
//
// module.exports.Foo = Foo
// module.exports = {
//   Foo,
// }
// const { Foo } = require('path/to/foo')
const express = require('express')

const app = express()

// endpoint
// método - ruta
app.get('/', (req, res) => {
  console.log('receiving request...')
  console.log(res)
  res.send('<h1>hola mundo</h1>')
})

app.post('/', (req, res) => {
  res.status(301).json({ message: 'post' })
})

// app.get('*', (req, res) => {
//   res.send(build/index.html)
// })

app.get('/about', (req, res) => {
  res.json([{ title: 'post 1', body: 'body 1' }, { title: 'post 2', body: 'body 2' }])
})

app.listen(8000, () => {
  console.log('App running at http://localhost:8000')
})
