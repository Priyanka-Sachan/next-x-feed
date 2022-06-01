import { Fragment } from "react"
import ArticleCard from "./ArticleCard"

export default function AllArticles(props) {
  const articles = props.articles
  return (
    <Fragment>
      {
        articles.map((a) => <ArticleCard article={a} />)
      }
    </Fragment>
  )
}