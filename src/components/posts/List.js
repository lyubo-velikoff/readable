/* React */
import React from 'react'

/* Router */
// import { Link } from 'react-router-dom'

/* Prop Types */
import PropTypes from 'prop-types'

const List = (props) => {
  const {
    posts
  } = props
  return (
    <div className="list-posts">
      <ol className="posts-list">
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  )
}

List.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default List