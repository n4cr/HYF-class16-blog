import React from 'react'

class CommentForm extends React.Component {

  state = {
    user: "",
    commentBody: ""
  }
  handleSubmit = () => {
    console.log('Button clicked')
    const comment = this.state;
    this.props.onNewComment(comment, this.props.index);
    this.setState({
      user: "",
      commentBody: ""
    })
  };

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  render() {
    return (
        <div>
          <div>
            <input name="user" onChange={this.onInputChange} type="text"
                   placeholder="Name" value={this.state.user}/>
          </div>
          <div>
            <textarea name="commentBody" onChange={this.onInputChange}
                      placeholder="Your comment" value={this.state.commentBody}></textarea>
          </div>
          <div>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
    )
  }
}

export default CommentForm;
