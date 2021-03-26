import { render, cleanup } from '@testing-library/react'
import faker from 'faker'
import uuid from 'uuid-random'
import Books from '.'

describe('Books', () => {
  beforeEach(() => {
    cleanup()
  })

  it('should render no books text if there are no books', () => {
    const { getByText } = render(<Books books={[]} />)

    const textElement = getByText('No books created!')

    expect(textElement).toBeInTheDocument()
  })

  it('should render a list of books', () => {
    const length = Math.ceil(Math.random() * 20)
    const booksMock = Array.from({ length }, () => {
      return {
        id: uuid(),
        title: faker.name.firstName(),
        votes: faker.random.number(),
        description: faker.lorem.sentence(),
      }
    })

    const { getAllByTestId } = render(<Books books={booksMock} />)
    const bookElements = getAllByTestId('book')

    expect(bookElements).toHaveLength(length)
  })
})
