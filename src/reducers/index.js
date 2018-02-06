/* Imports */

import {
  combineReducers
} from 'redux'

import CategoryReducer from './category'
import PostReducer from './post'
import CommentReducer from './comment'

/* Export all reducers */

export default combineReducers({
  categories: CategoryReducer,
  posts: PostReducer,
  comments: CommentReducer,
})