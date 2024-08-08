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
    console.log(e.target.value);

  }

  function submitComment(e) {
    e.preventDefault()

    if(!isLoggedIn) {
      alert("Please login to vote")
      return
    }

    if(newComment.trim().length === 0) {
      alert("Comment can not be empty")
      return
    }

    axios.post(`https://news-api-urho.onrender.com/api/articles/${article_id}/comments`, {
      body: newComment,
      author: loggedUser.username
    })
    .then(() => {
      setNewComment("")
      navigate(`/articles/${article_id}`)
    }).catch((err) => {
      alert("Something went wrong! Please try again")
    })
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
