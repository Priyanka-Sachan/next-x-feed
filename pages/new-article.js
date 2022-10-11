import Head from 'next/head'
import { useRouter } from 'next/router'
import NewArticle from '../components/NewArticle'

export default function NewArticlePage() {
  const router = useRouter()

  async function addArticleHandler(article) {
    const response = await fetch('/api/new-article', {
      method: 'POST',
      body: JSON.stringify(article),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data)
    router.push('/')
  }

  return (
    <div>
      <Head>
        <title>NextX | Add</title>
        <meta name="description" content="Add article" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewArticle onAddArticle={addArticleHandler} />
    </div>
  )
}
