const express = require('express')
const http = require('http')
const SocketIO = require('socket.io')

const port = 8000
const app = express()
const server = http.createServer(app)
const io = SocketIO(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'OPTIONS']
  }
})

app.get('/', () => {
  console.log('hola mundo')
})

io.on('connection', socket => {
  socket.emit('welcome', { message: 'Bienvenido' })

  socket.on('message', data => {
    // Message.create(data)
    // Message.findAll()
    socket.broadcast.emit('message', data)
  })

  socket.on('join', () => {
    socket.join('someroom')
    socket.emit('join', { message: 'You have been connected to someroom' })
  })

  socket.on('private', data => {
    io.to('someroom').emit('private', data)
  })

  socket.on('leave', () => {
    socket.leave('someroom')
  })

  socket.on('disconnect', () => {
    console.log('connection closed')
    io.emit('farewell', { message: 'Someone has left the room' })
  })
})

server.listen(port, () => console.log(`Server running at http://localhost:${port}`))
