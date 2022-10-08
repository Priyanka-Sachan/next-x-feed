import Link from "next/link"
import { Center, Group } from "@mantine/core"
import Image from 'next/image';

export default function HomeHeader() {
  return (
    <>
      <Center>
        <Image src="/images/logo.png" alt="me" width="64" height="64" />
      </Center>
      <Center>
        <h1>next-X-feed</h1>
      </Center>
      <Center>
        <Group>
          <Link href='./new-article'>New</Link>
          <Link href='./tags'>Tags</Link>
        </Group>
      </Center>
    </>
  )
}