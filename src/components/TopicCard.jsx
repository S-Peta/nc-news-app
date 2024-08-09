import { Link, useLocation } from
"react-router-dom";


export default function TopicCard({topic}) {
  const location = useLocation();
  const isActive = location.pathname === `/topics/${topic.slug}`

  return (
    <li className={`topic-card ${isActive ? "active" : ""}`}>
      <Link to={`/topics/${topic.slug}`}>
        <p>{topic.slug}</p>
      </Link>
    </li>
  )
}
