/* React */
import React from 'react'

/* Router */
import { Link } from 'react-router-dom'

/* Prop Types */
import PropTypes from 'prop-types'

const List = (props) => {

  const {
    categories
  } = props

  return ( 
    <div className="list-categories container">
      <div className="section-title">All of our posts</div>
      <ul className="categories-list">
        {categories.map(category => (
          <li key={category.path}><Link to={`/${category.path}`} >{category.name}</Link></li>
        ))}
      </ul>
    </div>
  )
}

List.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default List