const { createStore } = require('redux')

const initialState = {
  count: 0,
}

function reducer(state, action) {
  console.log('hola reducer')
  switch(action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'incrementBy':
      return {
        ...state,
        count: state.count + action.payload,
      }
    case 'decrementBy':
      return {
        ...state,
        count: state.count - action.payload,
      }
    default:
      return state
  }
}

const store = createStore(reducer, initialState)

store.subscribe(() => {
  console.log(store.getState())
})

// function handleClick(e) {
//   store.dispatch({ type: 'increment' })
// }

store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })
store.dispatch({ type: 'incrementBy', payload: 3 })
// store.dispatch({ type: 'decrementBy', payload: 'hola' })
// store.dispatch({ type: 'decrementBy', payload: {} })
// store.dispatch({ type: 'decrementBy', payload: true })
// store.dispatch({ type: 'decrementBy', payload: [] })
