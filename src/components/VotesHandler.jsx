import { useContext, useState } from "react"
import { UserContext } from "../contexts/User"
import axios from "axios"
import { FaArrowUp } from "react-icons/fa"

export default function VotesHandler({ comment, setComments }) {
  const {isLoggedIn} = useContext(UserContext)
  const [hasVoted, setHasVoted] = useState(false)

  function incVotes() {
    if (isLoggedIn) {
      const newVotes = comment.votes + 1
      updateCommentVotes(comment.comment_id, newVotes)

      setHasVoted(true)

      axios.patch(`https://news-api-urho.onrender.com/api/comments/${comment.comment_id}`, {inc_votes: 1})

      .catch((err) => {
        setHasVoted(false)
        updateCommentVotes(comment.comment_id, comment.votes)
        alert("Something went wrong! Please try again")
      })} else {
        alert("Please login to vote")
      }
    }

    function updateCommentVotes(comment_id, newVotes) {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.comment_id === comment_id ? { ...comment, votes: newVotes } : comment
        )
      );
    }

  return (
    <button onClick={incVotes} disabled={hasVoted}>
      <FaArrowUp />
    </button>
  );
}
