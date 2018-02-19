/* Imports */

import {
  combineReducers
} from 'redux'

import CategoriesReducer from './categories'
import PostReducer from './post'
import PostsReducer from './posts'
import CommentsReducer from './comments'

/* Export all reducers */

export default combineReducers({
  categories: CategoriesReducer,
  posts: PostsReducer,
  post: PostReducer,
  comments: CommentsReducer,
})