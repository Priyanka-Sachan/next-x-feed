import { Container } from "@mantine/core"
import ArticleCard from "./ArticleCard"

export default function AllArticles(props) {
  const articles = props.articles
  return (
    <Container>
      {
        articles.map((a) => <ArticleCard key={a.id} article={a} />)
      }
    </Container>
  )
}