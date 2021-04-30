import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import './App.css';

function App() {
  const ref = useRef()
  const [sender, setSender] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    ref.current = io('http://localhost:8000')

    ref.current.on('welcome', data => console.log(data))
    ref.current.on('message', data => {
      setMessages(prevMsgs => [...prevMsgs, data])
    })
    ref.current.on('private', data => {
      setMessages(prevMsgs => [...prevMsgs, data])
    })
    ref.current.on('join', data => console.log(data))
    ref.current.on('farewell', data => console.log(data))

    return () => {
      ref.current.removeAllListeners()
      ref.current.close()
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    // ref.current.emit('message', { sender, message })
    ref.current.emit('private', { sender, message })
  }

  function handleJoinRoom() {
    ref.current.emit('join')
  }

  function handleLeaveRoom() {
    ref.current.emit('leave')
  }

  return (
    <div className="App">
      <button
        type="button"
        onClick={handleJoinRoom}
      >
        Unirse a la sala
      </button>
      <button
        type="button"
        onClick={handleLeaveRoom}
      >
        Dejar la sala
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sender">Sender</label>
        <input
          id="sender"
          name="sender"
          type="text"
          onChange={e => setSender(e.target.value)}
          value={sender}
        />
        <label htmlFor="message">Message</label>
        <input
          id="message"
          name="message"
          type="text"
          onChange={e => setMessage(e.target.value)}
          value={message}
        />
        <button>Enviar</button>
      </form>
      {!!messages && Array.isArray(messages) && messages.map(el => (
        <div>
          <p>{el.sender}</p>
          <p>{el.message}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
