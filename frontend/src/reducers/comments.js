import { 
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  GET_COMMENT,
  VOTE_COMMENT,
} from '../actions/types'

export default (state = [], action) => {
  let index;
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments
    case ADD_COMMENT:
      return [
        ...state,
        action.comment
      ]
    case EDIT_COMMENT:
      index = state.findIndex(comment => comment.id === action.comment.id)
      return [
         ...state.slice(0, index),
         action.comment,
         ...state.slice(index + 1),
      ]
    case VOTE_COMMENT:
      index = state.findIndex(comment => comment.id === action.comment.id)
      return [
         ...state.slice(0, index),
         action.comment,
         ...state.slice(index + 1),
      ]
    case GET_COMMENT:
      return [action.comment]
    case DELETE_COMMENT:
      return state.filter((comment) => comment.id !== action.comment.id)
    default:
      return state
  }
}

