import LargeArticleCard from './LargeArticleCard'

export default function LatestArticles(props) {
  const articles = props.articles
  return (
    <section className="container mx-auto prose prose:slate">
      {articles.map((a) => (
        <LargeArticleCard key={a.id} article={a} />
      ))}
    </section>
  )
}
