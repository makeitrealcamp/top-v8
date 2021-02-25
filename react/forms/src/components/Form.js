import React from 'react'

class Form extends React.Component {
  state = {
    email: '',
    password: '',
    terms: false,
  }

  handleChange = e => {
    const { name, value, checked, type } = e.target

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  // handleEmailChange = (event) => {
  //   // console.dir(event.target.value)
  //   this.setState({
  //     email: event.target.value,
  //   })
  // }

  // handlePasswordChange = e => {
  //   // console.log(e.target.value)
  //   this.setState({
  //     password: e.target.value,
  //   })
  // }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    const { email, password, terms } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={this.handleChange}
            placeholder="email"
            value={email}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handleChange}
            placeholder="password"
            value={password}
          />
        </fieldset>
        <label htmlFor="terms">Terms</label>
        <input
          type="checkbox"
          name="terms"
          id="terms"
          onChange={this.handleChange}
          checked={terms}
        />
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
    )
  }
}

export default Form
