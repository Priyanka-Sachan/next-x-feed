import Link from "next/link"
import { Badge } from "@mantine/core";
import styles from './ArticleCard.module.css'

export default function ArticleCard(props) {
  const article = props.article
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateCreated = new Date(article.dateCreated)
  console.log(dateCreated)
  return (
    <div className={styles.card}>
      <img className={styles.coverUrl} src={article.coverUrl} />
      <Link href={`/articles/${article.id}`}><h1>{article.title}</h1></Link>
      <p className={styles.dateCreated}>{dateCreated.toLocaleDateString('en-US', options)}</p>
      <p className={styles.subtitle}> {article.subtitle}</p>
      {
        article.tags.map((tag) => (<Badge key={tag}>{tag}</Badge>))
      }
    </div>
  )
}