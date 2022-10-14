import SmallArticleCard from './SmallArticleCard'

export default function AllArticles(props) {
  const articles = props.articles
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">
          {articles.map((a) => (
            <SmallArticleCard key={a.id} article={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
