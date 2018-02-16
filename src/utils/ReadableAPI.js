const api = process.env.REACT_APP_READABLE_API_URL

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

function handleErrors(response) {
  if (!response.ok) {
      console.log('Status',response.status)
      console.log('Error', response.statusText)
  }
  return response
}

export const fetchCategories = () =>
  fetch(`${api}/categories`, {
    headers
  })
  .then(handleErrors)
  .then(res => res.json())
  .then(data => data.categories)

export const fetchCategory = (category) =>
  fetch(`${api}/${category}/posts`, {
    headers
  })
  .then(handleErrors)
  .then(res => res.json())
  .then(data => data)

export const fetchPosts = () =>
  fetch(`${api}/posts`, {
    headers
  })
  .then(handleErrors)
  .then(res => res.json())
  .then(data => data)

export const fetchPost = (postId) => {
  return fetch(`${api}/posts/${postId}`, {
      headers
    })
    .then(handleErrors)
    .then(res => res.json())
    .then(data => data)
}

export const fetchCommentsByPost = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, {
    headers
  })
  .then(handleErrors)
  .then(res => res.json())
  .then(data => data)

export const insertComment = (body) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(handleErrors)
  .then(res => res.json())

export const insertPost = (body) => {
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(handleErrors)
  .then(res => res.json())
}

export const editPost = (id, body) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(handleErrors)
  .then(res => res.json())

export const deletePost = (id) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  })
  .then(handleErrors)
  .then(res => res.json()) 
}

export const deleteComment = (id) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  })
  .then(handleErrors)
  .then(res => res.json()) 
}
