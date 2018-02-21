import { 
  RECEIVE_POSTS,
  SEND_POST,
  VOTE_POST,
  DELETE_POST,
} from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case SEND_POST:
      return [
        ...state,
        action.post
      ]
    case RECEIVE_POSTS:
      return action.posts
    case VOTE_POST:
      const index = state.findIndex(post => post.id === action.post.id)
      return [
        ...state.slice(0, index),
        action.post,
        ...state.slice(index + 1),
      ]
    case DELETE_POST:
      return state.filter((post) => post.id !== action.post.id)
    default:
      return state
  }
}

