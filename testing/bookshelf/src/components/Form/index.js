import { useState } from 'react'
import Button from '../Button'

function Form({ createBook }) {
  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')

  function handleSubmit(e) {
    e.preventDefault();

    createBook(title, description)
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        onChange={e => setDescription(e.target.value)}
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

export default Form
