import { 
  RECEIVE_POSTS,
} from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    default:
      return state
  }
}

