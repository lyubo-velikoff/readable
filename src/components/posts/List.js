/* React */
import React from 'react'

/* Router */
import { Link } from 'react-router-dom'

/* Prop Types */
import PropTypes from 'prop-types'

const List = (props) => {
  const {
    posts
  } = props
  return (
    <div className="list-posts">
      <ul className="posts-list container">
        {posts.map(post => (
          <li key={post.id} className="post"><Link to={`${post.category}/${post.id}`} className="post-link">{post.title}<span class="post-icon">&raquo;</span></Link></li>
        ))}
      </ul>
    </div>
  )
}

List.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default List