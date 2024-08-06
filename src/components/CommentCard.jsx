import { useContext, useState } from "react";
import VotesHandler from "./VotesHandler";
import { UserContext } from "../contexts/User";

export default function CommentCard({ comment, updateVotes }) {
  const { setLoggedUser } = useContext(UserContext)

  return (
    <li className="comment-card">
      <div className="comment-card-header">
        <p className="author">{comment.author}</p>
        <p className="date">{new Date(comment.created_at).toLocaleDateString()}</p>
      </div>
      <div className="comment-card-body">
        <p>{comment.body}</p>
      </div>
      <div className="comment-card-footer">
        <VotesHandler comment={comment} updateVotes={updateVotes}/>
        <p>{comment.votes} votes</p>
      </div>
    </li>
  );
}
