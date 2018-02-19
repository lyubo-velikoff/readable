/* React */
import React from 'react'

/* Router */
// import { Link } from 'react-router-dom'

/* Prop Types */
import PropTypes from 'prop-types'

const List = (props) => {

  const { categories, category, showAll,handleCategoryChange } = props

  return ( 
    <div className="list-categories">
      <select value={category} className="categories-list" onChange={handleCategoryChange}>
        {showAll && (
          <option key="" value="">All</option>
        )}
        {categories.map(category => (
          <option key={category.path} value={category.path}>{category.name}</option>
        ))}
      </select>
    </div>
  )
}

List.propTypes = {
  categories: PropTypes.array.isRequired,
  showAll: PropTypes.bool.isRequired,
}

export default List