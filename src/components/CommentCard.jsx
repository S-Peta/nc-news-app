import { useContext } from "react";
import VotesHandler from "./VotesHandler";
import { UserContext } from "../contexts/User";
import HandleDeleteComment from "./HandleDeleteComment";

export default function CommentCard({ comment, setComments }) {
  const { loggedUser } = useContext(UserContext)
  console.log(loggedUser.username, '<< logged');
  console.log( comment.author, '<<< author');



  return (
    <li className="comment-card">
      <div className="comment-card-header">
        {loggedUser.username === comment.author && <HandleDeleteComment comment={comment} setComments={setComments}/>}
        <p className="author">{comment.author}</p>
        <p className="date">{new Date(comment.created_at).toLocaleDateString()}</p>
      </div>
      <div className="comment-card-body">
        <p>{comment.body}</p>
      </div>
      <div className="comment-card-footer">
        <VotesHandler comment={comment} setComments={setComments}/>
        <p>{comment.votes} votes</p>
      </div>
    </li>
  );
}
