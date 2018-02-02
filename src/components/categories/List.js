/* React */
import React from 'react'

/* Router */
// import { Link } from 'react-router-dom'

/* Prop Types */
import PropTypes from 'prop-types'

const List = (props) => {

  const {
    categories
  } = props

  return ( 
    <div className="list-categories">
      <ol className="categories-list">
        {categories.map(category => (
          <li key={category.path}>{category.name}</li>
        ))}
      </ol>
    </div>
  )
}

List.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default List