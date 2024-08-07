import { Link } from "react-router-dom";

export default function TopicCard({topic}) {

  return (
    <li className="topic-card">
      <Link to={`/topics/${topic.slug}`}>
        <p>{topic.slug}</p>
      </Link>
    </li>
  )
}
