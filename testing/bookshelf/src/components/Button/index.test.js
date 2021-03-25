import { render, cleanup } from '@testing-library/react'
import Button from '.'

describe('Button', () => {
  beforeEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    const { getByText } = render(<Button type="button">Click</Button>)

    const buttonElement = getByText(/click/i)

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement.type).toMatch(/button/i)
  })

  it('should disable button if children is less than 5 chars', () => {
    const { getByText } = render(<Button type="button">chil</Button>)

    const buttonElement = getByText(/chil/i)

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toBeDisabled()
  })

  it('should match snapshot', () => {
    const { getByTestId } = render(<Button type="button">Click</Button>)

    const buttonElement = getByTestId('button')

    expect(buttonElement).toMatchSnapshot()
  })
})
