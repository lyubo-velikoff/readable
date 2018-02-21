/* React */
import React from 'react'

/* Components */
import GoBack from '../helpers/GoBack'

const NotFound = () => {
  return (
    <div className="container">
      <GoBack />
      <div className="page-not-found">
        We are sorry, the content you are looking for does not exist.
      </div>
    </div>
  )
}

export default NotFound
