import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ListCategories from '../categories/List'
import ListPosts from '../posts/List'

/* Route */
import { withRouter, Link } from 'react-router-dom'

/* Redux */
import { connect } from 'react-redux'

/* Sort by */
// import sortBy from 'sort-by'

/* Actions */
import {
  getCategories,
  getPosts,
} from '../../actions'


class Main extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired,
  }

  state = {
    posts: [],
    categories: [],
  }

  componentDidMount() {
    const { getAllCategories, getAllPosts, } = this.props
    getAllPosts()
    getAllCategories()
  }

  sortPosts(e) {
    // const { posts } = this.props
    // posts.sort(sortBy(attribute))
    console.log('hereasd', e)
  }

  render() {
    const { categories, posts, history } = this.props
    const categoryParam = this.props.match.params.category

    return (
      <div className="main-page">
        <div className="container">
          <div className="section-title">All of our posts</div>
          Filter by category &nbsp;
          <ListCategories
            categories={categories}
            category={categoryParam}
            showAll={true}
            handleCategoryChange={(e) => history.push(`/posts/${e.target.value}`)}
          />
        </div>

        <div className="container sort-by">
          Sort by:
          <span value="voteScore" onClick={this.sortPosts}>Score</span>
        </div>

        <ListPosts
          posts={posts}
        />
        <div className="add-new-container">
          <Link to="/new" className="add-new-button"><span>+</span></Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ categories, posts }, { match }) => {
  const { category } = match.params
  
  if (category && posts) {
    posts = posts.filter(post => post.category === category)
  }

  return {
    categories: categories,
    posts: posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCategories(){
      dispatch(getCategories())
    },
    getAllPosts(){
      dispatch(getPosts())
    },
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps) (Main)
)
