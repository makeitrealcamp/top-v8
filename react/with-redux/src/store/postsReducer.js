import axios from 'axios'

const POSTS_LOADING = 'POSTS_LOADING'
const POSTS_SUCCESS = 'POSTS_SUCCESS'
const POSTS_ERROR = 'POSTS_ERROR'
const POSTS_FINISHED = 'POSTS_FINISHED'

export function getPosts() {
  return async function(dispatch) {
    dispatch({ type: POSTS_LOADING })
    try {
      const { data } = await axios({
        method: 'GET',
        baseURL: 'https://jsonplaceholder.typicode.com',
        url: '/posts'
      })

      dispatch({ type: POSTS_SUCCESS, payload: data })
    } catch(error) {
      dispatch({ type: POSTS_ERROR, payload: error })
    } finally {
      dispatch({ type: POSTS_FINISHED })
    }
  }
}
const initialState = {
  loading: false,
  posts: [],
  error: null,
}

export function postReducer(state = initialState, action) {
  switch(action.type) {
    case POSTS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      }
    case POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case POSTS_FINISHED:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
