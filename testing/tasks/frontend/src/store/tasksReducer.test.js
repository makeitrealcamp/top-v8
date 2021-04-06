import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import {
  initialState,
  tasksReducer,
  getTasks,
  createTask,
  completeTask,
  deleteTask,
  handleChange,
  GET_TASKS,
  CREATE_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  CHANGE_NAME,
} from './tasksReducer'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const mockTasks = [
  { _id: 'asdfjasdkfjasd', name: 'task 1', done: false },
  { _id: 'asdgasdgaereew', name: 'task 2', done: true },
  { _id: 'asdtge4rdgfkjf', name: 'task 3', done: false },
]

describe('tasksReducer', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it(
    'should request tasks and dispatch GET_TASKS action with response payload',
    async () => {
      const { dispatch, getActions } = mockStore()

      getTasks()(dispatch)

      await moxios.wait(jest.fn)
      const req = moxios.requests.mostRecent()
      await req.respondWith({
        status: 200,
        response: mockTasks,
      })

      const actions = getActions()

      expect(actions[0].type).toBe(GET_TASKS)
      expect(actions[0].payload).toMatchObject(mockTasks)
    }
  )

  it(
    'should create task and dispatch CREATE_TASK action with response payload',
    async () => {
      const { dispatch, getActions } = mockStore()

      createTask({ name: 'task 4' })(dispatch)

      await moxios.wait(jest.fn)
      const req = moxios.requests.mostRecent()
      await req.respondWith({
        status: 200,
      })

      const [action] = getActions()

      expect(action.type).toBe(CREATE_TASK)
      expect(action.payload).toMatch(/task created successfully/i)
    }
  )

  it(
    'should dispatch COMPLETE_TASK and return new state with completed task',
    async () => {
      const { dispatch, getActions } = mockStore()

      completeTask('asdfjasdkfjasd')(dispatch)

      const newTask = {
        ...mockTasks[0],
        done: !mockTasks[0].done
      }

      await moxios.wait(jest.fn)
      const req = moxios.requests.mostRecent()
      await req.respondWith({
        status: 200,
        response: newTask,
      })

      const [action] = getActions()

      expect(action.type).toBe(COMPLETE_TASK)
      expect(action.payload).toMatchObject(newTask)
    }
  )

  it(
    'should delete task and dispatch DELETE_TASK action with response payload',
    async () => {
      const { dispatch, getActions } = mockStore()

      const id = 'asdfjasdkfjasd'
      deleteTask(id)(dispatch)

      await moxios.wait(jest.fn)
      const req = moxios.requests.mostRecent()
      await req.respondWith({
        status: 200,
      })

      const [action] = getActions()

      expect(action.type).toBe(DELETE_TASK)
      expect(action.payload).toBe(id)
    }
  )

  it(
    'should change name input and dispatch CHANGE_NAME action with value as payload',
    async () => {
      const { dispatch, getActions } = mockStore()

      const mockEvent = {
        target: {
          value: 'task 4'
        }
      }

      handleChange(mockEvent)(dispatch)

      const [action] = getActions()

      expect(action.type).toBe(CHANGE_NAME)
      expect(action.payload).toBe(mockEvent.target.value)
    }
  )

  it(
    'should change tasks state when action GET_TASKS is dispatched',
    () => {
      const state = tasksReducer(undefined, { type: GET_TASKS, payload: mockTasks })

      expect(state).toMatchObject({ ...initialState, tasks: mockTasks })
    }
  )

  it(
    'should create task, reset name, and change message when action CREATE_TASK is dispatched',
    () => {
      const message = 'message'
      const state = tasksReducer(undefined, { type: CREATE_TASK, payload: message })

      expect(state).toMatchObject({ ...initialState, name: '', message })
    }
  )

  it(
    'should toggle task when action COMPLETE_TASK is dispatched',
    () => {
      const [task, ...rest] = mockTasks

      const state = tasksReducer(
        { ...initialState, tasks: mockTasks },
        { type: COMPLETE_TASK, payload: { ...task, done: !task.done }},
      )

      expect(state).toMatchObject({ ...initialState, tasks: [ { ...task, done: !task.done }, ...rest ] })
    }
  )

  it(
    'should delete task when action DELETE_TASK is dispatched',
    () => {
      const [task, ...rest] = mockTasks

      const state = tasksReducer(
        { ...initialState, tasks: mockTasks },
        { type: DELETE_TASK, payload: task._id },
      )

      expect(state).toMatchObject({ ...initialState, tasks: rest })
    }
  )

  it(
    'should change name when action CHANGE_NAME is dispatched',
    () => {
      const name = 'task 5'
      const state = tasksReducer(undefined, { type: CHANGE_NAME, payload: name })

      expect(state).toMatchObject({ ...initialState, name })
    }
  )

  it(
    'should return current state when the action type is invalid',
    () => {
      const type = 'INVALID'
      const state = tasksReducer(undefined, { type })

      expect(state).toMatchObject(initialState)
    }
  )
})
