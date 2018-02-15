/* React */
import React, { Component }  from 'react'

/* Prop Types */
import PropTypes from 'prop-types'

class Add extends Component {
  static propTypes = {
    handleAddComment: PropTypes.func.isRequired,
  }

  state = {
    'author': '',
    'body': ''
  }

  handleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    })
  }

  onSubmit = event => {
    const { handleAddComment } = this.props 
    event.preventDefault()
    handleAddComment(this.state)
    this.setState({
      'author': '',
      'body': ''
    })
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div className="add-comment">
        Add comment
        <form onSubmit={this.onSubmit} className="mt30">
          
          <label>
            Author
            <input id="author" name ="author" type="text" value={this.state.author} onChange={this.handleChange('author')} />
          </label>

          <label>
            Body
            <textarea id="body" name ="body" type="text" value={this.state.body} onChange={this.handleChange('body')} />
          </label>

          <div className="mt20">
            <input type="submit" value="Submit" className="button"/>
          </div>

        </form>

      </div>
    )
  }
}

export default Add