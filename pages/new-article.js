import Head from 'next/head'
import NewArticle from '../components/NewArticle'

export default function NewArticlePage() {
  async function addArticleHandler(article) {
    const response = await fetch('/api/new-article', {
      method: 'POST',
      body: JSON.stringify(article),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json()
    console.log(data)
  }

  return (
    <div>
      <Head>
        <title>NextX | Add</title>
        <meta name="description" content="Add article" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Add Article</p>
      <NewArticle onAddArticle={addArticleHandler} />
    </div>
  )
}
