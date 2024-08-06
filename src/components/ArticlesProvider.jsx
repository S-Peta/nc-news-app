import axios from "axios";
import { useState, useEffect } from "react"
import ArticlesList from "./ArticlesList";


export default function ArticlesProvider() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("https://news-api-urho.onrender.com/api/articles")
      .then((response) => {
        setArticles(response.data.articles)
      });
  }, []);

  return (
    <>
      <ArticlesList articles={articles} />
    </>
  )
}
