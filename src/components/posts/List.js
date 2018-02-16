/* React */
import React from 'react'

/* Router */
import { Link } from 'react-router-dom'

/* Prop Types */
import PropTypes from 'prop-types'

/* Time library */
import Time from 'react-time'

const List = (props) => {
  const {
    posts
  } = props
  return (
    <div className="list-posts">
      <ul className="posts-list container">
        {posts.map(post => (
          <li key={post.id} className="post">
            <Link to={`/posts/${post.category}/${post.id}`} className="post-link">
              {post.title}
              <span className="post-date"><Time value={post.timestamp} format="YYYY/MM/DD" /></span>
              <span className="post-score">Score: {post.voteScore}</span>
              <span className="post-comment-count">Comments: {post.commentCount}</span>
              <span className="post-icon">&raquo;</span>
            </Link>
          </li>
        ))}
      </ul>
      


    </div>
  )
}

List.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default List