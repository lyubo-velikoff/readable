import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ListCategories from '../categories/List'
import ListPosts from '../posts/List'

/* Route */
import { withRouter, Link } from 'react-router-dom'

/* Redux */
import { connect } from 'react-redux'

/* Sort by */
import sortBy from 'sort-by'

/* Actions */
import {
  getCategories,
  getPosts,
} from '../../actions'


class Main extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired,
    sort: PropTypes.string,
    order: PropTypes.string,
  }

  state = {
    posts: [],
    categories: [],
    sort: 'voteScore',
    order: '-',
  }

  componentDidMount() {
    const { getAllCategories, getAllPosts, } = this.props
    getAllPosts()
    getAllCategories()
  }

  sortPosts = field => event => {
    this.setState({
      'sort': field,
      'order': this.state.order === '-' ? '' : '-'
    })
  }

  render() {
    const { categories, posts, history } = this.props
    const categoryParam = this.props.match.params.category
    const { sort, order } = this.state
    const orderBy = order + sort
    const postsToDisplay = posts.sort(sortBy(orderBy))
    console.log(sort)
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

        <div className="container sort-by mt20">
          Sort by:&nbsp;
          <span onClick={this.sortPosts('voteScore')} className={sort && sort === 'voteScore' ? 'active' : ''}>Score</span>
          <span onClick={this.sortPosts('timestamp')} className={sort && sort === 'timestamp' ? 'active' : ''}>Time</span>
          {sort && (
            <div className="mt20">
              Order: {order === '' ? 'ascending' : 'descending'}
            </div>
          )}
        </div>

        <ListPosts
          posts={postsToDisplay}
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
    posts: posts,
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
