import { 
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
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
    case DELETE_COMMENT:
      const comments = state.filter((comment) => comment.id !== action.comment.id)
      return comments
    default:
      return state
  }
}

