import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    cleanup()
  })
  // beforeAll()
  // afterEach()
  // afterAll()

  it('should render learn react link', () => {
    // const section = document.createElement('section')
    // render(<App />, { container: document.body.appendChild(section)})
    render(<App />)

    // screen.debug()
    // const passwordInput = screen.getByLabelText('Confirm Password')
    const link = screen.getByText(/learn react/i)
    // console.log(link)

    expect(link).toBeEnabled()
    expect(link).toBeInTheDocument()
  })

})
