import Head from 'next/head'
import NewArticle from '../components/NewArticle'

export default function NewArticlePage() {
  return (
    <div>
      <Head>
        <title>NextX | Add</title>
        <meta name="description" content="Add article" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Add Article</p>
      <NewArticle />
    </div>
  )
}
