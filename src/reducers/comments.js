import { 
  RECEIVE_COMMENTS,
  ADD_COMMENT,
} from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments
    case ADD_COMMENT:
      return [
        ...state,
        action.comment
      ]
    default:
      return state
  }
}

