import { render, cleanup, fireEvent } from '@testing-library/react'
import faker from 'faker'
import Form from '.'

describe('Form', () => {
  beforeEach(() => {
    cleanup()
  })

  it('should create a new book with title and description', () => {
    const createBookMock = jest.fn()

    const bookMock = {
      title: faker.name.firstName(),
      description: faker.lorem.sentence(),
    }

    const { getByLabelText, getByText } = render(<Form createBook={createBookMock} />)

    const titleElement = getByLabelText(/title/i)
    fireEvent.change(titleElement, { target: { value: bookMock.title } })

    const descriptionElement = getByLabelText(/description/i)
    fireEvent.change(descriptionElement, { target: { value: bookMock.description } })

    const buttonElement = getByText(/create/i)
    fireEvent.click(buttonElement)

    expect(createBookMock).toHaveBeenCalled()
    expect(createBookMock).toHaveBeenCalledWith(bookMock.title, bookMock.description)
    expect(titleElement.value).toBe('')
    expect(descriptionElement.value).toBe('')
  })
})
