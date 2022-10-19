import Link from 'next/link'

export default function MediumArticleCard(props) {
  const article = props.article
  var options = { year: 'numeric', month: 'long', day: 'numeric' }
  const dateCreated = new Date(article.dateCreated)
  console.log(dateCreated)
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={article.coverUrl}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">
            {dateCreated.toLocaleDateString('en-US', options)}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {article.title}
          </h1>
          <p className="leading-relaxed mb-3">{article.subtitle}</p>
          <div className="flex items-center flex-wrap ">
            <Link href={'./' + article.id}>
              <a className="text-red-600 inline-flex items-center md:mb-2 lg:mb-0">
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
      </div>
    </div>
  )
}
