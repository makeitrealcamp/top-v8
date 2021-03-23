import { useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [file, setFile] = useState(null)
  const [image, setImage] = useState(null)
  const [username, setUsername] = useState('')

  function handleChange(e) {
    console.log(e.target.files[0])
    readFile(e.target.files[0])
    setFile(e.target.files)
  }

  function readFile(file) {
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = e => setImage(e.target.result)
    // reader.onload = e => console.log(e.target.result)
    reader.onerror = e => console.log(reader.error)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const data = new FormData()
    data.append('username', username)
    if(file) {
      data.append('file', file[0], file[0].name)
    }

    const response = await axios({
      method: 'POST',
      baseURL: 'http://localhost:8000',
      url: '/profile',
      data,
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })

    console.log(response)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <label htmlFor="file">Upload file</label>
        <input
          type="file"
          accept="image/*"
          // multiple
          name="file"
          id="file"
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
      {image && <img src={image} alt="profile preview" />}
    </div>
  );
}

export default App;
