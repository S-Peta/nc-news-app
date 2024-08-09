import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TopicCard from "./TopicCard";
import { UserContext } from '../contexts/User';

export default function TopicProvider() {
  const [topics, setTopics] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const { loggedUser } = useContext(UserContext);

  useEffect(() => {
    axios.get('https://news-api-urho.onrender.com/api/topics')
    .then((response) => {
      setTopics(response.data.topics)
    })
    .catch((err) => {
      alert("Something went wrong! Please try again")
    })
  }, [])

  function handleDropdown() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`topics-box ${isOpen ? "open" : ""}`} onClick={handleDropdown}>
      <ul className="topics-list">
        {topics.map((topic) => (
          <TopicCard key={topic.slug} topic={topic}/>
        ))}
      </ul>
      <div className="user-info">
        <img src={loggedUser.avatar_url} alt="" className="user-avatar" />
        <span className="user-username">{loggedUser.username}</span>
      </div>
    </div>
  )
}
