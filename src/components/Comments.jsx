import CommentCard from "./CommentCard"

export default function Comments({comments}) {

  return (
    <>
      <ul className="articles-list">
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment}/>
        ))}
      </ul>
    </>
  )
}
