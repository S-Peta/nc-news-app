import { useState, useEffect, useContext } from "react";
import CommentCard from "./CommentCard"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/User"

export default function CommentsProvider({article_id}) {
  const {isLoggedIn} = useContext(UserContext)
  const [comments, setComments] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://news-api-urho.onrender.com/api/articles/${article_id}/comments`)
      .then((response) => {
        setComments(response.data.comments);
      });
  }, [article_id]);

  function newCommentHandler() {
    if (isLoggedIn) {
      navigate(`/articles/${article_id}/comments`)
    } else {
      alert("Please login to add a new comment")
    }
  }

  return (
    <>
      <div className="add-comment-container">
        <button className="button add-comment-btn" onClick={newCommentHandler}>Add comment</button>
      </div>
      <div className="comments-list">
        <ul>
          {comments.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} setComments={setComments} />
          ))}
        </ul>
      </div>
    </>
  )
}
