import Head from 'next/head'
import { getArticlesByTag } from '../api/articles'
import getTags from '../api/tags';
import AllArticles from '../../components/AllArticles';

export default function TaggedArticlePage(props) {
  const articles = props.articles;
  return (
    <div>
      <Head>
        <title>NextX</title>
        <meta name="description" content="Read about anything & everything from nextX Feed." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AllArticles articles={articles}></AllArticles>
    </div>
  )
}

export async function getStaticPaths() {
  const tags = await getTags();
  return {
    fallback: 'blocking',
    paths: tags.map((tag) => ({
      params: {
        tag: tag,
      }
    }))
  }
}

export async function getStaticProps(context) {
  const tag = context.params.tag;
  const articles = await getArticlesByTag(tag);
  return {
    props: {
      articles: articles
    },
  }
}