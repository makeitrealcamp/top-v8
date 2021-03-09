import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Form from '../components/Form'

class Signup extends React.Component {
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
        url: '/users/signup',
        data: this.state,
      })

      localStorage.setItem('token', data.token)
      // sessionStorage.setItem('token', data.token)
      this.props.history.push('/')
    } catch(error) {
      this.setState({
        error: error.response.data.error.message,
      })
    }
  }

  render() {
    const { email, password, error } = this.state
    return (
      <>
        <p>{error}</p>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          email={email}
          password={password}
        />
        <p>Ya tienes cuenta? Ingresa <Link to="/login">aquí</Link></p>
      </>
    )
  }
}

export default Signup
