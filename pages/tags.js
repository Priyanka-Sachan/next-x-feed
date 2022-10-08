import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import getTags from './api/tags';

export default function TagsPage(props) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>NextX | Search</title>
        <meta name="description" content="Search articles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container mx-auto prose prose:slate'>
        <h1 className='mt-16'>#Tags</h1>
        {props.tags.map((tag) => <Link href={'./tagged/' + tag} key={tag}><a className='bg-gray-100 hover:bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded no-underline dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-700'>{tag}</a></Link>)}
      </div>
    </div>
  )
}

// Runs during build time only - can be async
export async function getStaticProps() {
  const tags = await getTags();
  console.log(tags)
  return {
    props: { tags: tags },
    // Rebuilds every 36000 sec on server
    revalidate: 10
  }
}

