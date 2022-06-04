export default function Article(props) {
  const article = props.article
  return (
    <div>
      <p>Id: {article.id}</p>
      <p>DateCreated: {article.dateCreated}</p>
      <p>Favourites: {article.numFavourites}</p>
      <img src={article.coverUrl}/>
      <p>Title: {article.title}</p>
      <p>Subtitle: {article.subtitle}</p>
      <p>Content: {article.content}</p>
      <p>Tgas: {article.tags}</p>
    </div>
  )
}