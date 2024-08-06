import ArticleCard from "./ArticleCard";

export default function ArticlesList({articles, onArticleClick}) {
  return (
    <>
      <ul className="articles-list">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} onClick={() => onArticleClick(article.article_id)}/>
        ))}
      </ul>
    </>
  )
}
