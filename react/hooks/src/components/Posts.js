import { useState, useEffect } from 'react'
import axios from 'axios'

function useApi() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getPosts() {
      try {
        setLoading(true)
        const { data } = await axios({
          method: 'GET',
          baseURL: 'https://jsonplaceholder.typicode.com',
          url: '/posts'
        })
        setPosts(data)
        setLoading(false)
      } catch(error) {
        setError(error)
        setLoading(false)
      }
    }

    getPosts()

    return () => {
      console.log('component will unmount')
    }
  }, [])

  return { posts, loading, error }
}

function Posts({ count }) {
  const { posts, loading, error } = useApi()

  if(loading) return <p>Loading...</p>
  if(error) return <p>Something went wrong</p>
  return (
    <main>
      {!!posts && posts.length > 0 && posts.map(post => (
        <article key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </article>
      ))}
    </main>
  )
}

export default Posts
