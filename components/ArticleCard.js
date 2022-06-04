import Link from "next/link"

export default function ArticleCard(props) {
  const article = props.article
  return (
    <div>
      <p>Id: {article.id}</p>
      <p>DateCreated: {article.dateCreated}</p>
      <p>Favourites: {article.numFavourites}</p>
      <img src={article.coverUrl} />
      <Link href={`/articles/${article.id}`}><p>Title:{article.title}</p></Link>
      <p>Tags: {article.tags}</p>
    </div>
  )
}