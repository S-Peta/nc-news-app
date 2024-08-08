import { useContext, useState } from "react"
import { UserContext } from "../contexts/User"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

export default function NewCommentForm() {
  const {loggedUser, isLoggedIn} = useContext(UserContext)
  const [newComment, setNewComment] = useState("")
  const {article_id} = useParams()
  const navigate = useNavigate()

  function changeCommentHandler(e) {
    setNewComment(e.target.value)
  }

  function submitComment(e) {
    if (isLoggedIn) {
      e.preventDefault()
      axios.post(`https://news-api-urho.onrender.com/api/articles/${article_id}/comments`, {
        body: newComment,
        author: loggedUser.username
      })
      .then(() => {
        setNewComment("")
        navigate(`/articles/${article_id}`)
      })
    } else {
      alert("Please login to vote")
    }
  }

  return (
    <>
    <h2>New comment</h2>
    <form onSubmit={submitComment}>
      <label htmlFor="new-comment">Comment</label>
        <input type="text" id="new-comment" value={newComment} onChange={changeCommentHandler} />
        <button type="submit">Send</button>
    </form>
    </>
  )
}
