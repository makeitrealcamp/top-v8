import { render, cleanup, act } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import faker from 'faker'
import moxios from 'moxios'
import App from './App';


describe('App', () => {
  beforeEach(() => {
    moxios.install()
    cleanup()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('should render a list of posts', async () => {
    const length = Math.ceil(Math.random() * 20)
    const posts = Array.from({ length }, () => {
      return {
        id: uuidv4(),
        title: faker.animal.dog(),
        body: faker.lorem.paragraph(),
      }
    })

    const { getAllByTestId } = render(<App />)

    await moxios.wait(jest.fn)
    await act(async () => {
      const request = moxios.requests.mostRecent()

      request.respondWith({
        status: 200,
        response: posts,
      })
    })

    expect(getAllByTestId('post')).toHaveLength(length)
  })

  it('should render error', async () => {
    const { getByText } = render(<App />)

    await moxios.wait(jest.fn)
    await act(async () => {
      const request = moxios.requests.mostRecent()

      request.respondWith({
        status: 400,
        response: 'error',
      })
    })

    expect(getByText(/something went wrong/i)).toBeInTheDocument()
  })
})
