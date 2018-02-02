import React from 'react'
import PropTypes from 'prop-types'

import ListCategories from '../categories/List'
import ListPosts from '../posts/List'

const Main = (props) => {
  // const {
  //   categories, category, posts, post
  // } = props
  console.log(props)
  const {
    categories, posts
  } = props
  return (
    <div className="main-page">
      <ListCategories
        categories={categories}
      />
      <ListPosts
        posts={posts}
      />
    </div>
  )
}

Main.propTypes = {
  categories: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
}

export default Main