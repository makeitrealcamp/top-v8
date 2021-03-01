import React from 'react'
import axios from 'axios'

class Post extends React.Component {
  state = {
    post: {},
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
      url: `/posts/${this.props.match.params.id}`,
    })
      .then(({ data }) => {
        this.setState({
          post: data,
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
    const { post: { title, body }, loading, error } = this.state
    if(loading) return <p>Loading...</p>
    if(error) return <p>Oops Something went wrong</p>
    return (
      <main>
        <article>
          <h1>{title}</h1>
          <p>{body}</p>
        </article>
      </main>
    )
  }
}

export default Post
