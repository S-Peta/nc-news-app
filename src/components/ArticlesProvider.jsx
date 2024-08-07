import axios from "axios";
import { useState, useEffect } from "react"
import ArticlesList from "./ArticlesList";
import { useParams } from "react-router-dom";

export default function ArticlesProvider() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    setLoading(true)
    const params = topic ? { topic } : {}

    axios.get("https://news-api-urho.onrender.com/api/articles", {params})
      .then((response) => {
        setArticles(response.data.articles)
        setLoading(false)
      });
  }, [topic]);

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <ArticlesList articles={articles} />
    </>
  )
}
