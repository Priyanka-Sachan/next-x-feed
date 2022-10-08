import ArticleCard from "./ArticleCard"

export default function AllArticles(props) {
  const articles = props.articles
  return (
    <div className="container mx-auto prose prose:slate">
      {
        articles.map((a) => <ArticleCard key={a.id} article={a} />)
      }
    </div>
  )
}