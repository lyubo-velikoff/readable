import React from 'react'
import PropTypes from 'prop-types'

const Category = (props) => {
  console.log(props)

  return (
    <div>
      <h1>Hello from signle category view</h1>
    </div>
  )
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
}

export default Category