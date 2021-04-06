import React from 'react'
import { render, cleanup, act } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { store } from '../store'
import moxios from 'moxios'
import Tasks from './Tasks'

const mockTasks = [
  { _id: 'asdfjasdkfjasd', name: 'task 1', done: false },
  { _id: 'asdgasdgaereew', name: 'task 2', done: true },
  { _id: 'asdtge4rdgfkjf', name: 'task 3', done: false },
]

describe('Tasks', () => {
  beforeEach(() => {
    moxios.install()
    cleanup()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('should render a list of tasks', async () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Tasks />
        </MemoryRouter>
      </Provider>
    )

    await moxios.wait(jest.fn)
    await act(async () => {
      const req = moxios.requests.mostRecent()

      req.respondWith({
        status: 200,
        response: mockTasks
      })
    })

    expect(getAllByTestId('task')).toHaveLength(3)
  })
})
