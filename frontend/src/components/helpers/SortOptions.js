/* React */
import React from 'react'

/* Prop Types */
import PropTypes from 'prop-types'

const SortOptions = (props) => {
  const { options, sortPostsHandle, sort, order } = props
  
  return (
    <div className="container sort-by mt30">
      Sort by:&nbsp;
      {options.map(option => (
        <span key={option.field} onClick={sortPostsHandle(option.field)} className={sort && sort === option.field ? 'active' : ''}>
          {option.label} {sort && sort === option.field && (
            <span>({order === '' ? 'ascending' : 'descending'})</span>
          )}
        </span>
      ))}
    </div>
  )
}

SortOptions.propTypes = {
  options: PropTypes.array.isRequired,
  sortPostsHandle: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
}

export default SortOptions