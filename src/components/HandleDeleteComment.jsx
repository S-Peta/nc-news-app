import axios from "axios"
import { confirmAlert } from 'react-confirm-alert'

export default function HandleDeleteComment({comment, setComments}) {

  function handleClick() {
    confirmAlert({
      message: 'Are you sure you want delete this comment?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => DeleteComment()
        },
        {
          label: 'No',
        }
      ]
    })
  }

  function DeleteComment() {
    axios.delete(`https://news-api-urho.onrender.com/api/comments/${comment.comment_id}`)
    .then(() => {
      deletedComment(comment.comment_id)
      alert('Comment deleted successfully!')
    })
    .catch((err) => {
      alert('Error deleting the comment')
    })
  }

  function deletedComment(comment_id) {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.comment_id !== comment_id)
    );
  }

  return (
    <button onClick={handleClick}>Delete</button>
  )
}
