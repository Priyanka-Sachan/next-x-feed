import Head from 'next/head'
import AllArticles from '../components/AllArticles'
import getArticles from './api/articles'

export default function AllArticlesPage(props) {
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
      <div className="ml-40 prose prose:slate">
        <h1 className="mt-16"># All posts</h1>
      </div>
      <AllArticles articles={props.articles} />
    </div>
  )
}

// Runs during build time only - can be async
export async function getStaticProps() {
  const articles = await getArticles()
  return {
    props: { articles: articles },
    // Rebuilds every 36000 sec on server
    revalidate: 1,
  }
}
