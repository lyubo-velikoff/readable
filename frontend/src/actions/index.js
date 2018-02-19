/* Imports */

import * as ReadableAPI from '../utils/ReadableAPI'

import {
  RECEIVE_CATEGORIES,
  RECEIVE_POSTS,
  RECEIVE_POST,
  RECEIVE_COMMENTS,
  SEND_POST,
  EDIT_POST,
  VOTE_POST,
  DELETE_POST,
  ADD_COMMENT,
  EDIT_COMMENT,
  VOTE_COMMENT,
  GET_COMMENT,
  DELETE_COMMENT,
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

export const getPost = (postId) => (dispatch) => (
  ReadableAPI.fetchPost(postId)
    .then(data => {
      dispatch(receivePost(data))
    })
    .catch(err => console.error(err))
)

const sendPost = (post) => ({
  type: SEND_POST,
  post
})

export const addPost = (post) => (dispatch) => (
  ReadableAPI.insertPost(post)
    .then(data => {
      dispatch(sendPost(data))
    })
    .catch(err => console.error(err))
)

const updatePost = (post) => ({
  type: EDIT_POST,
  post
})

export const editPost = (id, post) => (dispatch) => (
  ReadableAPI.editPost(id, post)
    .then(data => {
      dispatch(updatePost(data))
    })
    .catch(err => console.error(err))
)

const sendPostVote = (post) => ({
  type: VOTE_POST,
  post
})

export const votePost = (id, option) => (dispatch) => (
  ReadableAPI.votePost(id, option)
    .then(data => {
      dispatch(sendPostVote(data))
    })
    .catch(err => console.error(err))
)

const removePost = (post) => ({
  type: DELETE_POST,
  post
})

export const deletePost = (id) => (dispatch) => (
  ReadableAPI.deletePost(id)
    .then(data => {
      dispatch(removePost(data))
    })
    .catch(err => console.error(err))
)

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

const sendComment = (comment) => ({
  type: ADD_COMMENT,
  comment
})

export const addComment = (comment) => (dispatch) => {
  ReadableAPI.insertComment(comment)
    .then(data => {
      dispatch(sendComment(data))
    })
    .catch(err => console.error(err))
}

const receiveComment = (comment) => ({
  type: GET_COMMENT,
  comment
})

export const getComment = (commentId) => (dispatch) => (
  ReadableAPI.fetchComment(commentId)
    .then(data => {
      dispatch(receiveComment(data))
    })
    .catch(err => console.error(err))
)

const updateComment = (comment) => ({
  type: EDIT_COMMENT,
  comment
})

export const editComment = (id, comment) => (dispatch) => (
  ReadableAPI.editComment(id, comment)
    .then(data => {
      dispatch(updateComment(data))
    })
    .catch(err => console.error(err))
)

const removeComment = (comment) => ({
  type: DELETE_COMMENT,
  comment
})

export const deleteComment = (id) => (dispatch) => (
  ReadableAPI.deleteComment(id)
    .then(data => {
      dispatch(removeComment(data))
    })
    .catch(err => console.error(err))
)

const sendCommentVote = (comment) => ({
  type: VOTE_COMMENT,
  comment
})

export const voteComment = (id, option) => (dispatch) => (
  ReadableAPI.voteComment(id, option)
    .then(data => {
      dispatch(sendCommentVote(data))
    })
    .catch(err => console.error(err))
)