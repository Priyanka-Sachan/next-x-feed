import Head from 'next/head'
import { getArticleById, getRelatedArticles } from '../api/article'
import Article from '../../components/Article'
import { getArticleIds } from '../api/articles'
import RelatedArticles from '../../components/RelatedArticles'

export default function ArticlePage(props) {
  const article = props.article
  return (
    <div>
      <Head>
        <title>NextX</title>
        <meta
          name="description"
          content="Read about anything & everything from nextX Feed."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Article article={article} />
      {props.relatedArticles.length == 0 ? (
        <h2>None</h2>
      ) : (
        <RelatedArticles articles={props.relatedArticles} />
      )}
    </div>
  )
}

// For static generated - dynamic pages
export async function getStaticPaths() {
  const ids = await getArticleIds()
  return {
    // If fallback false, all other pages: 404
    //  If fallback true, all other pages are then generated on server on request
    //  If blocking, these generated pages are cached
    fallback: 'blocking',
    // Build static pages for following dynamic pages
    paths: ids.map((id) => ({
      params: {
        id: id,
      },
    })),
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const article = await getArticleById(id)
  const relatedArticles = await getRelatedArticles(article.tags)
  console.log(relatedArticles)
  return {
    props: {
      article: article,
      relatedArticles: relatedArticles == undefined ? [] : relatedArticles,
    },
  }
}
