/* React */
import React from 'react'

/* Router */
import { Link } from 'react-router-dom'

/* Prop Types */
import PropTypes from 'prop-types'

const List = (props) => {

  const { categories, category, handleCategoryChange } = props

  return ( 
    <div className="list-categories container">
      <div className="section-title">All of our posts</div>
      Filter by category &nbsp;
      <select value={category} className="categories-list" onChange={handleCategoryChange}>
        <option key="" value="">All</option>
        {categories.map(category => (
          <option key={category.path} value={category.path}>{category.name}</option>
        ))}
      </select>
    </div>
  )
}

List.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default List