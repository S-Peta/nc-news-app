import ArticleCard from "./ArticleCard";

export default function ArticlesList({articles}) {
  return (
    <>
      <ul className="articles-list">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article}/>
        ))}
      </ul>
    </>
  )
}
