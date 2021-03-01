import React from 'react'
import axios from 'axios'
import Button from './components/Button'
import Form from './components/Form'
import './App.css';

// function funcPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('hola res')
      // reject('hola mundo')
//     }, 4000)
//   })
// }
// Promesas
// funcPromise()
//   .then(res => console.log(res))
//   .catch(err => console.log('err', err))

// JSON JavaScript Object Notation
// {
  // json no comments
  // "title": "post 1",
  // "description": "asdfsd f asdf"
// }

class App extends React.Component {
  state = {
    count: 0,
    posts: [],
    error: null,
    loading: false,
    title: '',
    body: '',
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    console.log(this.state)
    const { title, body } = this.state
    axios({
      method: 'POST',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts',
      data: {
        title,
        body,
        userId: 1
      }
    })
      .then(({ data }) => {
        console.log(data)
        this.setState((prevState) => ({
          posts: [data, ...prevState.posts]
        }))
      })
      .catch(err => console.dir(err))
  }

  // UNSAFE_componentWillMount() {
  //   console.log('el componente se va a montar')
  // }

  componentDidMount() {
    console.log('el componente se monto')
    this.setState({
      loading: true,
    })
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts',
    })
      .then((response) => {
        console.log(response)
        const { data } = response
        this.setState({
          posts: data,
          loading: false,
        })
      })
      .catch(error => {
        console.dir(error)
        this.setState({
          error: error.message,
          loading: false,
        })
      })
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   return true
  // }

  // UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
  //   console.log('el componente se va a actualizar')
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('el componente se actualizo')
  // }

  // componentWillUnmount() {}

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }), () => console.log(this.state.count))
  }

  render() {
    const { count, posts, error, loading, title, body } = this.state

    if(loading) return <p>Loading.....</p>
    if(error) return <p>{error}</p>
    return (
      <div className="App">
        <Button
          handleClick={this.handleClick}
        >
          {count}
        </Button>
        <Button>Sign in</Button>
        <Button>Sign up</Button>
        <Form
          title={title}
          body={body}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {!!posts && posts.length > 0 && posts.map(({ id, title, body }) => {
          return (
            <article key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          )
        })}
      </div>
    );
  }
}

export default App;
