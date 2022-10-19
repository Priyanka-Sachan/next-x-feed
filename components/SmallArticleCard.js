import Link from 'next/link'

export default function SmallArticleCard(props) {
  const article = props.article
  var options = { year: 'numeric', month: 'long', day: 'numeric' }
  const dateCreated = new Date(article.dateCreated)
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700 uppercase">
          {article.tags[0]}
        </span>
        <span className="mt-1 text-gray-500 text-sm">
          {' '}
          {dateCreated.toLocaleDateString('en-US', options)}
        </span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 mt-1">
          {article.title}
        </h2>
        <p className="leading-relaxed">{article.subtitle}</p>
        <Link href={`/articles/${article.id}`}>
          <a className="text-red-600 inline-flex items-center mt-4">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </Link>
      </div>
    </div>
    // <div>
    //   <img className="w-full h-auto" src={article.coverUrl} />
    //   <Link href={`/articles/${article.id}`}>
    //     <h2 className="my-0 cursor-pointer">{article.title}</h2>
    //   </Link>
    //   <p className="uppercase font-bold text-red-600">
    //     {dateCreated.toLocaleDateString('en-US', options)}
    //   </p>
    //   <p className="line-clamp-3"> {article.subtitle}</p>
    //   {article.tags.map((tag) => (
    //     <span
    //       className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
    //       key={tag}
    //     >
    //       {tag}
    //     </span>
    //   ))}
    // </div>
  )
}
