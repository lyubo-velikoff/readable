import { 
  RECEIVE_POST,
  EDIT_POST,
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POST:
      return action.post
    case EDIT_POST:
      return action.post
    default:
      return state
  }
}

