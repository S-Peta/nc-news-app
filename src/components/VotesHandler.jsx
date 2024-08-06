import { useContext } from "react"
import { UserContext } from "../contexts/User"
import axios from "axios"

export default function VotesHandler({ comment, updateVotes }) {
  const {isLoggedIn} = useContext(UserContext)

  function incVotes() {
    if (isLoggedIn) {
      axios.patch(`https://news-api-urho.onrender.com/api/comments/${comment.comment_id}`, {inc_votes: 1})
      .then((response) => {
        const newVotes = response.data.votes
        updateVotes(comment.comment_id, newVotes)
      })
    } else {
      alert("Please login to vote")
    }
  }

  return (
    <button onClick={incVotes}>+</button>
  );
}
