/* Imports */

import {
  combineReducers
} from 'redux'

import CategoryReducer from './category'
import PostReducer from './post'

/* Export all reducers */

export default combineReducers({
  categories: CategoryReducer,
  posts: PostReducer,
})