import { render, cleanup, fireEvent } from '@testing-library/react'
import faker from 'faker'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    cleanup()
  })

  it('should render new books after created', () => {
    const length = Math.ceil(Math.random() * 20)
    const booksMock = Array.from({ length }, () => {
      return {
        title: faker.name.firstName(),
        description: faker.lorem.sentence(),
      }
    })

    const { getByLabelText, getByTestId, getByText, getAllByTestId } = render(<App />)

    const textElement = getByText('No books created!')

    expect(textElement).toBeInTheDocument()

    const titleInput = getByLabelText('Title')
    const descriptionInput = getByLabelText('Description')
    const formElement = getByTestId('form')

    booksMock.forEach(({ title, description }) => {
      fireEvent.change(titleInput, { target: { value: title } })
      fireEvent.change(descriptionInput, { target: { value: description } })
      fireEvent.submit(formElement)
    })

    const bookElements = getAllByTestId('book')

    expect(bookElements).toHaveLength(length)
  })
})
