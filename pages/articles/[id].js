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

// For static generated - dynamic pages
export async function getStaticPaths() {
  return {
    // If fallback false, all other pages: 404
    //  If fallback true, all other pages are then generated on server on request
    fallback: false,
    // Build static pages for following dynamic pages
    paths: [
      {
        params: {
          id: '1',
        }
      },
      {
        params: {
          id: '2',
        }
      }
    ]
  }
}

export async function getStaticProps(context) {
  const id = context.params.id;
  return {
    props: {
      articles: {
        id: 1,
        coverUrl: 'https://images.unsplash.com/photo-1656663584992-e1f24fe5eae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        dateCreated: '2022-06-01',
        title: 'Title 1',
        tags: ['t1', 'one'],
        subtitle: 'Subtitle 1',
        content: 'Content 1',
        numFavourites: 1,
      },
    },
  }
}
