import { createStore } from 'redux'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

const initialState = {
  count: 0,
}

function reducer(state, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

export const store = createStore(reducer, initialState)
