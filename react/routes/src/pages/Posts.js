import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Posts extends React.Component {
  state = {
    posts: [],
    loading: false,
    error: null,
  }

  componentDidMount() {
    this.setState({
      loading: true,
    })

    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts'
    })
      .then(({ data }) => {
        this.setState({
          posts: data,
          loading: false,
        })
      })
      .catch(err => {
        this.setState({
          error: err,
          loading: false,
        })
      })
  }

  render() {
    const { posts, loading, error } = this.state

    if(loading) return <p>Loading...</p>
    if(error) return <p>Oops Something went wrong</p>
    return (
      <main>
        {!!posts && posts.length > 0 && posts.map(({ id, title }) => {
          return (
            <article key={id}>
              <h1>{title}</h1>
              <Link to={`/posts/${id}`}>View more</Link>
            </article>
          )
        })}
      </main>
    )
  }
}

export default Posts
