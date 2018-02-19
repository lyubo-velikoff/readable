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

/* Helpers */
import SortOptions from '../helpers/SortOptions'

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
    sortOptions: [
      {
      'label': 'Score',
      'field': 'voteScore'
      },
      {
        'label': 'Time',
        'field': 'timestamp'
        },
    ]
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
    const { sort, order, sortOptions } = this.state
    const orderBy = order + sort
    const postsToDisplay = posts.sort(sortBy(orderBy))
    
    return (
      <div className="main-page">
        <div className="container">
          <div className="section-title">All of our posts</div>
          <p>Filter by category &nbsp;</p>
          <ListCategories
            categories={categories}
            category={categoryParam}
            showAll={true}
            handleCategoryChange={(e) => history.push(`/posts/${e.target.value}`)}
          />
        </div>

        <SortOptions 
          options={sortOptions}
          sort={sort}
          order={order}
          sortPostsHandle={this.sortPosts}
        />

        <ListPosts
          posts={postsToDisplay}
        />
        <div className="add-new-container">
          <Link to="/new/post" className="add-new-button"><span>+</span></Link>
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
