import React from 'react'
import Button from '../Button'

class Form extends React.Component {
  state = {
    title: '',
    description: '',
  }

  handleSubmit = (e) => {
    const { title, description } = this.state
    const { createBook } = this.props

    e.preventDefault();

    createBook(title, description)
    this.setState({ title: '', description: '' })
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value,
    })
  }

  render() {
    const { title, description } = this.state

    return (
      <form onSubmit={this.handleSubmit} data-testid="form">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={this.handleChange}
          value={title}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={this.handleChange}
          value={description}
        />
        <Button
          type="submit"
        >
          Create Book
        </Button>
      </form>
    )
  }
}

export default Form
