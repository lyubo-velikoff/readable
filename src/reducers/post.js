import { 
  RECEIVE_POSTS,
  RECEIVE_POST
} from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case RECEIVE_POST:
      return [action.post]
    default:
      return state
  }
}

