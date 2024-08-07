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

  function updateVotes(comment_id, newVotes) {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.comment_id === comment_id ? { ...comment, votes: newVotes } : comment
      )
    )
  }

  function newCommentHandler() {
    if (isLoggedIn) {
      navigate(`/${article_id}/comments`)
    } else {
      alert("Please login to add a new comment")
    }
  }

  return (
    <>
      <div>
        <button onClick={newCommentHandler}>Add comment</button>
        <ul className="articles-list">
          {comments.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} updateVotes={updateVotes}/>
          ))}
        </ul>
      </div>
    </>
  )
}
