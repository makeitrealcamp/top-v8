import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts1',
    })
      .then(({ data }) => setPosts(data))
      .catch(_ => setError(true))
      .finally(_ => setLoading(false))
  }, [])

  if(loading) return <p>Loading...</p>
  if(error) return <p>Something went wrong</p>
  return (
    <main className="App">
      {!!posts && posts.length > 0 && posts.map(post => (
        <article data-testid="post" key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </article>
      ))}
    </main>
  );
}

export default App;
