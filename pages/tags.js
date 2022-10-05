import { Badge, Chip, Container } from '@mantine/core';
import Head from 'next/head'
import { useRouter } from 'next/router';
import getTags from './api/tags';
import { Chips } from '@mantine/core';
import { useState } from 'react';
export default function TagsPage(props) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>NextX | Search</title>
        <meta name="description" content="Search articles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>#Tags</h1>
        <Chips position="center" multiple={false} onChange={(tag) => router.push('/tagged/' + tag)}>
          {props.tags.map((tag) => <Chip key={tag} value={tag}>{tag}</Chip>)}
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

