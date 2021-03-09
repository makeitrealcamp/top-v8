import React from 'react'
import axios from 'axios'

class Private extends React.Component {
  state = {
    message: '',
  }

  async componentDidMount() {
    try {
      const token = localStorage.getItem('token')

      const { data } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })

      this.setState({
        message: data,
      })
    } catch(error) {
      localStorage.removeItem('token')
      // localStorage.clear()
      this.props.history.push('/login')
    }
  }

  render() {
    const { message } = this.state
    return (
      <h1>{message}</h1>
    )
  }
}

export default Private
