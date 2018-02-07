import { 
  RECEIVE_COMMENTS
} from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments
    default:
      return state
  }
}

