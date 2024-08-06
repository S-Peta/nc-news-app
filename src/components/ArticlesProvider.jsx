import axios from "axios";
import { useState, useEffect } from "react"
import ArticlesList from "./ArticlesList";
import { useParams, useNavigate } from "react-router-dom";
import Comments from "./Comments";

export default function ArticlesProvider() {
  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!article_id) {
      axios.get("https://news-api-urho.onrender.com/api/articles")
        .then((response) => {
          setArticles(response.data.articles);
        });
    } else {
      axios.get(`https://news-api-urho.onrender.com/api/articles/${article_id}`)
        .then((response) => {
          setArticles([response.data.article]);
        });
      axios.get(`https://news-api-urho.onrender.com/api/articles/${article_id}/comments`)
        .then((response) => {
          setComments(response.data.comments);
        });
    }
  }, [article_id]);

  const handleArticleClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <>
      <ArticlesList articles={articles} onArticleClick={handleArticleClick} />
      {article_id && <Comments comments={comments} />}
    </>
  )
}
