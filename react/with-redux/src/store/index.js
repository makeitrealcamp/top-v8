import { createStore, combineReducers } from 'redux'
import { countReducer } from './countReducer'
import { textReducer } from './textReducer'

const rootReducer = combineReducers({
  countReducer,
  textReducer,
})

// store = {
//   countReducer: {
//     count: 0
//   },
//   textReducer: {
//     text: '',
//     count: 0,
//   }
// }

export const store = createStore(rootReducer)
