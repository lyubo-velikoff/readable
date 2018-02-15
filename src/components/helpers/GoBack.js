/* React */
import React from 'react'

/* Prop Types */
import PropTypes from 'prop-types'

/* Router */
import { Link } from 'react-router-dom'

const GoBack = (props) => {
  let classes = 'mt30'
  classes += props.additionalClasses ? ' ' + props.additionalClasses : ''

  return (
    <div className={classes}>
      <Link to="/" className="button">&laquo; Go back</Link>
    </div>
  )
}

GoBack.propTypes = {
  additionalClasses: PropTypes.string,
}

export default GoBack