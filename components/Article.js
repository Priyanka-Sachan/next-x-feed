export default function Article(props) {
  const article = props.article
  var options = { year: 'numeric', month: 'long', day: 'numeric' }
  const dateCreated = new Date(article.dateCreated)
  return (
    <div className="container mx-auto prose prose:slate">
      <h1 className="mt-16 mb-0">{article.title}</h1>
      <p className="uppercase font-bold text-red-600">
        {dateCreated.toLocaleDateString('en-US', options)}
      </p>
      <img className="w-full h-auto" src={article.coverUrl} />
      <h3>{article.subtitle}</h3>
      <p dangerouslySetInnerHTML={{ __html: article.content }}></p>
      <div>
        {article.tags.map((tag) => (
          <span
            className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      <hr />
    </div>
  )
}
