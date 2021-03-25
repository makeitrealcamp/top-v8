import { render, cleanup } from '@testing-library/react'
import faker from 'faker'
import Book from '.'

describe('Book', () => {
  beforeEach(() => {
    cleanup()
  })

  it('should render book info correctly', () => {
    const mockBook = {
      title: faker.name.firstName(),
      votes: faker.random.number(),
      description: faker.lorem.sentence(),
    }

    const { getByTestId } = render(
      <Book
        title={mockBook.title}
        description={mockBook.description}
        votes={mockBook.votes}
      />
    )

    const votesElement = getByTestId('votes')
    const titleElement = getByTestId('title')
    const descriptionElement = getByTestId('description')

    expect(votesElement.textContent).toContain(mockBook.votes)
    expect(titleElement.textContent).toContain(mockBook.title)
    expect(descriptionElement.textContent).toContain(mockBook.description)
  })
})
