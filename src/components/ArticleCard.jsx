export default function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <div className="article-card-header">
        <p className="author">{article.author}</p>
        <p className="date">{new Date(article.created_at).toLocaleDateString()}</p>
      </div>
      <h2 className="article-card-title">{article.title}</h2>
      <img src={article.article_img_url} alt="Article" />
      <div className="article-card-footer">
        <button>{article.votes} Votes</button>
        <button>{article.comment_count} Comments</button>
      </div>
    </div>
  );
}
