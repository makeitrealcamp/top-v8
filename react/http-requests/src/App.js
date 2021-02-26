import React from 'react'
import axios from 'axios'
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

class App extends React.Component {
  state = {
    count: 0,
    posts: [],
    error: null,
    loading: false,
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
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { count, posts, error, loading } = this.state

    if(loading) return <p>Loading.....</p>
    if(error) return <p>{error}</p>
    return (
      <div className="App">
        <button type="button" onClick={this.handleClick}>{count}</button>
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
