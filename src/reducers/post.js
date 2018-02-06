import { 
  RECEIVE_POSTS
} from '../actions/constants'

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return [ ...state, ...action.posts ]
    default:
      return state
  }
}

