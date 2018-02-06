/* React */
import React, { Component } from 'react'

/* Router */
import { Link } from 'react-router-dom'

/* Prop Types */
import PropTypes from 'prop-types'

/* Time library */
import Time from 'react-time'

/* Route */
import { withRouter } from 'react-router-dom'

/* Redux */
import { connect } from 'react-redux'

/* Actions */
import {
  getPost
} from '../../actions'

class Single extends Component {
  static propTypes = {
    post: PropTypes.array,
  }

  state = {
    post: []
  }

  componentDidMount() {
    this.props.getSinglePost(this.props.match.params.postId)
  }

  render() {
    const {
      posts
    } = this.props

    const post = posts[0] || false

    return (
      <div className="view-post container">
        {post && (
          <div className="single-post">
            <div className="title">{post.title}</div>
            <div className="body">{post.body}</div>
            <div className="author">{post.author}</div>
            <div className="date"><Time value={post.timestamp} format="YYYY/MM/DD" /></div>
            <div className="score">{post.voteScore}</div>
            <Link to={`/`}>Go back to all posts</Link>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSinglePost(postId){
      dispatch(getPost(postId))
    },
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps) (Single)
)

