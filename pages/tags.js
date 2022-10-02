import { Badge, Chip, Container } from '@mantine/core';
import Head from 'next/head'
import { useRouter } from 'next/router';
import getTags from './api/tags';
import { Chips } from '@mantine/core';
export default function TagsPage(props) {
  const router = useRouter();

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
    router.push('/')
  }

  return (
    <div>
      <Head>
        <title>NextX | Search</title>
        <meta name="description" content="Search articles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Chips position="center" multiple={false}>
          {props.tags.map((tag) => <Chip value={tag}>{tag}</Chip>)}
        </Chips>
      </Container>
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

