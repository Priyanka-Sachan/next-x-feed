import Head from 'next/head'
import AllArticles from '../components/AllArticles';

export default function Home() {
  const DUMMY_ARTICLES = [{
    id: 1,
    coverUrl: 'https://images.unsplash.com/photo-1656663584992-e1f24fe5eae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    dateCreated: '2022-06-01',
    title: 'Title 1',
    subtitle: 'Subtitle 1',
    content: 'Content 1',
    numFavourites: 1,
  },
  {
    id: 2,
    coverUrl: 'https://images.unsplash.com/photo-1656764984235-55d3304d45f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    dateCreated: '2022-06-02',
    title: 'Title 2',
    subtitle: 'Subtitle 2',
    content: 'Content 2',
    numFavourites: 2,
  },
  ];
  return (
    <div>
      <Head>
        <title>NextX</title>
        <meta name="description" content="Read about anything & everything from nextX Feed." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Welcome to NextX Feed!</p>
      <AllArticles articles={DUMMY_ARTICLES}/>
    </div>
  )
}
