const api = process.env.REACT_APP_CONTACTS_API_URL

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const fetchCategories = () =>
  fetch(`${api}/categories`, {
    headers
  })
  .then(res => res.json())
  .then(data => data.categories)

export const fetchPosts = () =>
  fetch(`${api}/posts`, {
    headers
  })
  .then(res => res.json())
  .then(data => data)

export const fetchPostsByCategory = (category) =>
  fetch(`${api}/${category}/posts`, {
    headers
  })
  .then(res => res.json())
  .then(data => data)

// export const create = (body) =>
//   fetch(`${api}/contacts`, {
//     method: 'POST',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(body)
//   }).then(res => res.json())