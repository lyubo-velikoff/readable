/* Imports */

import * as ReadableAPI from '../utils/ReadableAPI'

import {
  RECEIVE_CATEGORIES,
  RECEIVE_POSTS,
  RECEIVE_POST,
  RECEIVE_COMMENTS,
  SEND_POST,
} from './types'

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

/* Single Post */

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
})

export const getPost = (postId) => (dispatch) => {
  ReadableAPI.fetchPost(postId)
    .then(data => {
      dispatch(receivePost(data))
    })
    .catch(err => console.error(err))
}

const sendPost = (post) => ({
  type: SEND_POST,
  post
})

export const addPost = (post) => (dispatch) => {
  ReadableAPI.insertPost(post)
    .then(data => {
      dispatch(sendPost(data))
    })
    .catch(err => console.error(err))
}


/* Comments */

const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
})

export const getComments = (postId) => (dispatch) => {
  ReadableAPI.fetchCommentsByPost(postId)
    .then(data => {
      dispatch(receiveComments(data))
    })
    .catch(err => console.error(err))
}