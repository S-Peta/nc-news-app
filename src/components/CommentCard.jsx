export default function CommentCard({ comment }) {
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
        <button>{comment.votes} Votes</button>
      </div>
    </li>
  );
}