import { useContext, useEffect, useState } from "react";
import VotesHandler from "./VotesHandler";
import { UserContext } from "../contexts/User";
import HandleDeleteComment from "./HandleDeleteComment";

export default function CommentCard({ comment, updateVotes, deletedComment }) {
  const { loggedUser } = useContext(UserContext)
  const [votes, setVotes] = useState(comment.votes)

  useEffect(() => {
    setVotes(comment.votes)
  }, [comment.votes])

  function handleUpdateVotes(comment_id, newVotes) {
    setVotes(newVotes)
    updateVotes(comment_id, newVotes)
  }

  return (
    <li className="comment-card">
      <div className="comment-card-header">
        {loggedUser.username === comment.author && <HandleDeleteComment comment={comment} deletedComment={deletedComment}/>}
        <p className="author">{comment.author}</p>
        <p className="date">{new Date(comment.created_at).toLocaleDateString()}</p>
      </div>
      <div className="comment-card-body">
        <p>{comment.body}</p>
      </div>
      <div className="comment-card-footer">
        <VotesHandler comment={comment} updateVotes={handleUpdateVotes}/>
        <p>{votes} votes</p>
      </div>
    </li>
  );

}
