export const CHANGE_TEXT = 'CHANGE_TEXT'

// action creator
export function changeText(value) {
  return {
    type: CHANGE_TEXT,
    payload: value,
  }
}

const initialState = {
  text: '',
  count: 0,
}

export function textReducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.payload,
        count: action.payload.length,
      }
    default:
      return state
  }
}
