/* Imports */

import * as ReadableAPI from '../utils/ReadableAPI'
import {
  RECEIVE_CATEGORIES,
  RECEIVE_POSTS,
} from './constants'

/* Categories */

const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
})

export const getCategories = () => (dispatch) => {
  ReadableAPI.fetchCategories()
    .then(data => {
      dispatch(receiveCategories(data))
    })
    .catch(err => console.error(err))
}

/* Posts */

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
})

export const getPosts = () => (dispatch) => {
  ReadableAPI.fetchPosts()
    .then(data => {
      dispatch(receivePosts(data))
    })
    .catch(err => console.error(err))
}