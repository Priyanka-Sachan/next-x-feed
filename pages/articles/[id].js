import Head from 'next/head'
import { useRouter } from 'next/router'

export default function ArticlePage() {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div>
      <Head>
        <title>NextX</title>
        <meta name="description" content="Read about anything & everything from nextX Feed." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Article id: {id}</p>
    </div>
  )
}
