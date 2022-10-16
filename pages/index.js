import Head from 'next/head'
import LatestArticles from '../components/LatestArticles'
import { getLatestArticles } from './api/articles'
import HomeHeader from '../components/HomeHeader'

export default function Home(props) {
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
      <HomeHeader />
      <div className="container mx-auto prose prose:slate">
        <h1>Latest Reads</h1>
      </div>
      <LatestArticles articles={props.articles} />
    </div>
  )
}

// Runs during build time only - can be async
export async function getStaticProps() {
  const articles = await getLatestArticles()
  return {
    props: { articles: articles },
    // Rebuilds every 36000 sec on server
    revalidate: 1,
  }
}

// // Runs on every request on server
// export async function getServerSideProps(context) {
//   const { req, res } = context;
//   // fetch data (eg. secure calls)
//   return {
//     props: {
//       articles: DUMMY_ARTICLES
//     }
//   }
// }
