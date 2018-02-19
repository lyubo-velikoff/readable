/* React */
import React from 'react'

/* Prop Types */
import PropTypes from 'prop-types'

/* Router */
import { Link } from 'react-router-dom'

const GoBack = (props) => {
  let classes = 'mt30'
  classes += props.additionalClasses ? ' ' + props.additionalClasses : ''
  const path = props.path || '/'
  return (
    <div className={classes}>
      <Link to={path} className="button">&laquo; Go back</Link>
    </div>
  )
}

GoBack.propTypes = {
  additionalClasses: PropTypes.string,
  path: PropTypes.string,
}

export default GoBack