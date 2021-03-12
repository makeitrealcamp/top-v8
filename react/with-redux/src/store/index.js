import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { countReducer } from './countReducer'
import { textReducer } from './textReducer'
import { postReducer } from './postsReducer'

// currying
function logger(store) {
  return function (next) {
    return function (action) {
      const prevState = store.getState()
      const result = next(action)

      console.log({
        'prev state': prevState,
        action,
        'next state': store.getState()
      })

      return result
    }
  }
}

const rootReducer = combineReducers({
  countReducer,
  textReducer,
  postReducer,
})

const middlewares = applyMiddleware(thunk, logger)

// store = {
//   countReducer: {
//     count: 0
//   },
//   textReducer: {
//     text: '',
//     count: 0,
//   }
// }

export const store = createStore(rootReducer, middlewares)
