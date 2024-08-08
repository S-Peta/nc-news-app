import axios from "axios";
import { useEffect, useState } from "react";
import TopicCard from "./TopicCard";

export default function TopicProvider() {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    axios.get('https://news-api-urho.onrender.com/api/topics')
    .then((response) => {
      setTopics(response.data.topics)
    })
    .catch((err) => {
      alert("Something went wrong! Please try again")
    })
  }, [])

  return (
    <div className="topics-box">
      <h2>Topics</h2>
      <ul className="topics-list">
        {topics.map((topic) => (
          <TopicCard key={topic.slug} topic={topic}/>
        ))}
      </ul>
    </div>
  )
}
