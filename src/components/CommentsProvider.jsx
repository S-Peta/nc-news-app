import { useState, useEffect } from "react";
import CommentCard from "./CommentCard"
import axios from "axios";

export default function CommentsProvider({article_id}) {
  const [comments, setComments] = useState([])

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

  return (
    <>
      <ul className="articles-list">
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} updateVotes={updateVotes}/>
        ))}
      </ul>
    </>
  )
}
