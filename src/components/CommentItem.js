import React from 'react'

export default function CommentItem(props) {
  const { user, commentBody } = props;

  return (
      <div>
        <strong>{user} said: </strong> {commentBody}
      </div>)
}