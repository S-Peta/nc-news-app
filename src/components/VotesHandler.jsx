import { useContext, useState } from "react"
import { UserContext } from "../contexts/User"
import axios from "axios"
import { FaArrowUp } from "react-icons/fa"

export default function VotesHandler({ comment, updateVotes }) {
  const {isLoggedIn} = useContext(UserContext)
  const [hasVoted, setHasVoted] = useState(false)

  function incVotes() {
    if (isLoggedIn) {
      const newVotes = comment.votes + 1
      updateVotes(comment.comment_id, newVotes)

      setHasVoted(true)

      axios.patch(`https://news-api-urho.onrender.com/api/comments/${comment.comment_id}`, {inc_votes: 1})

      .then((response) => {
        const updatedVotes = response.data.votes
        updateVotes(comment.comment_id, updatedVotes)
      })

      .catch((err) => {
        console.log("errr", err);
        setHasVoted(false)
        updateVotes(comment.comment_id, comment.votes)
      })

    } else {
      alert("Please login to vote")
    }
  }

  return (
    <button onClick={incVotes} disabled={hasVoted}>
      <FaArrowUp />
    </button>
  );
}
