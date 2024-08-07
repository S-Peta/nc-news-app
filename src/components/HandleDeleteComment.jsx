import axios from "axios"
import { confirmAlert } from 'react-confirm-alert'

export default function HandleDeleteComment({comment, deletedComment}) {

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
      console.log(err);
      alert('Error deleting the comment')
    })

  }

  return (
    <button onClick={handleClick}>Delete</button>
  )
}
