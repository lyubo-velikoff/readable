import { 
  RECEIVE_POSTS,
  SEND_POST,
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
    default:
      return state
  }
}

