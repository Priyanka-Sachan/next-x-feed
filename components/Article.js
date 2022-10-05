import { Badge, Container } from "@mantine/core"
import styles from './Article.module.css'

export default function Article(props) {
  const article = props.article
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateCreated = new Date(article.dateCreated)
  return (
    <Container>
      <h1>{article.title}</h1>
      <p className={styles.dateCreated}>{dateCreated.toLocaleDateString('en-US', options)}</p>
      <img className={styles.coverUrl} src={article.coverUrl} />
      <h3>{article.subtitle}</h3>
      <p dangerouslySetInnerHTML={{ __html: article.content }} ></p>
      {article.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
    </Container>
  )
}