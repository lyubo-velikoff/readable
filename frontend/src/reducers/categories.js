import { RECEIVE_CATEGORIES } from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories
    default:
      return state
  }
}