import axios from "axios";
import { useState, useEffect } from "react"
import ArticlesList from "./ArticlesList";
import { useParams, useSearchParams } from "react-router-dom";
import SortProvider from "./SortProvider";

export default function ArticlesProvider() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { topic } = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setLoading(true)
    const sort_by = searchParams.get("sort_by") || "created_at";
    const order = searchParams.get("order") || "desc";

    const params = {
      sort_by,
      order,
      topic,
    }


    axios.get("https://news-api-urho.onrender.com/api/articles", {params})
      .then((response) => {
        setArticles(response.data.articles)
        setLoading(false)
      });
  }, [topic, searchParams]);

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <SortProvider />
      <ArticlesList articles={articles} />
    </>
  )
}
