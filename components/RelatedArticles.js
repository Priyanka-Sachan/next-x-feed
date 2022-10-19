import MediumArticleCard from './MediumArticleCard'

export default function RelatedArticles(props) {
  const articles = props.articles
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-8 py-8 mx-auto">
        <div className="prose prose:slate">
          <h2 className="mb-8">Related Articles</h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {articles.map((a) => (
            <MediumArticleCard key={a.id} article={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
