import { Fragment } from "react"
import ArticleCard from "./ArticleCard"

export default function AllArticles(props) {
  const articles = props.articles
  return (
    <Fragment>
      {
        articles.map((a) => <ArticleCard key={a.id} article={a} />)
      }
    </Fragment>
  )
}