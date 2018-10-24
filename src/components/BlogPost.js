import React from 'react';
import CommentItem from './CommentItem'
import CommentForm from './CommentForm';

class BlogPost extends React.Component {


  render() {
    const { title, image, text, comments } = this.props;

    const commentsElements = comments.map((comment, key) => (
        <CommentItem key={key} user={comment.user} commentBody={comment.commentBody}/>
    ));
    return (
        <div>
          <div>
            <h2>{title}</h2>
            <p>{text} </p>
            <img height={200} src={image}/>
          </div>

          <div>
            {commentsElements}
          </div>
          <div>
            <CommentForm
                onNewComment={this.props.onNewComment}
                index={this.props.index}
            />
          </div>
        </div>
    )
  }

}

export default BlogPost