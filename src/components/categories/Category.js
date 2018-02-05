/* React */
import React from 'react'

/* Router */
import { Link } from 'react-router-dom'

/* Prop Types */
import PropTypes from 'prop-types'

const Category = (props) => {
  const {
    category, posts
  } = props

  
  return (
    <div>
      <Link to={`/`}>Go back to home</Link>
    </div>
  )
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
}

export default Category