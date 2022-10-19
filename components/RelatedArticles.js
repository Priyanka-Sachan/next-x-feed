import MediumArticleCard from './MediumArticleCard'

export default function RelatedArticles(props) {
  const articles = props.articles
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {articles.map((a) => (
            <MediumArticleCard key={a.id} article={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
