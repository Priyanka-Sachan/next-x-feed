import Link from 'next/link'

export default function ArticleCard(props) {
  const article = props.article
  var options = { year: 'numeric', month: 'long', day: 'numeric' }
  const dateCreated = new Date(article.dateCreated)
  console.log(dateCreated)
  return (
    <div>
      <img className="w-full h-auto" src={article.coverUrl} />
      <Link href={`/articles/${article.id}`}>
        <h2 className="my-0 cursor-pointer">{article.title}</h2>
      </Link>
      <p className="uppercase font-bold text-red-600">
        {dateCreated.toLocaleDateString('en-US', options)}
      </p>
      <p className="line-clamp-3"> {article.subtitle}</p>
      {article.tags.map((tag) => (
        <span
          className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
