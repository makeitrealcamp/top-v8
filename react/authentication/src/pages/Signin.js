import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Form from '../components/Form'

class Signin extends React.Component {
  state = {
    email: '',
    password: '',
    error: '',
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if(token) {
      this.props.history.push('/')
    }
  }


  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = async e => {
    e.preventDefault()

    try {
      const { data } = await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/users/signin',
        data: this.state
      })

      localStorage.setItem('token', data.token)
      // sessionStorage.setItem('token', data.token)
      this.props.history.push('/')
    } catch(error) {
      this.setState({
        error: error,
      })
    }
  }

  render() {
    const { email, password, error } = this.state
    return (
      <>
        <p>{error && 'Algo salió mal'}</p>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          email={email}
          password={password}
        />
        <p>No tienes cuenta? crea una <Link to="/register">aquí</Link></p>
      </>
    )
  }
}

export default Signin
