import { useState, useEffect } from "react"
import CommentsProvider from "./CommentsProvider"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

export default function SingularArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState()
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://news-api-urho.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        setArticle(response.data.article)
        setLoading(false)
      }) .catch((err) => {
        alert("Please chose a valid article")
        navigate('/')
      })
  }, [article_id])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div className="singular-article-container">
        <div className="back-to-articles-container">
        <Link to={'/'}>
          <button className="button back-to-articles-btn"> Back to all articles</button>
        </Link>
        </div>
        <div className="singular-article">
          <h1>{article.title}</h1>
          <p>By {article.author}</p>
          <p>{new Date(article.created_at).toLocaleDateString()}</p>
          <img src={article.article_img_url} alt="" />
          <p>{article.body}</p>
        </div>
        <CommentsProvider article_id={article_id} />
      </div>
    </>
  );
}
