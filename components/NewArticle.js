import { useEffect, useRef, useState } from "react";
import { TextInput, Button, MultiSelect, ActionIcon, JsonInput, Image, SimpleGrid } from '@mantine/core';
import { ArrowRight } from 'tabler-icons-react';

export default function NewArticle() {
  const coverUrl = useRef('');
  const [coverImage, setCoverImage] = useState('');
  useEffect(() => {
    setCoverImage(coverUrl.current.value);
  }, [coverUrl.current.value]);
  const title = useRef('');
  const [tags, setTags] = useState(['Top', 'Reading', 'For Self', 'For Ones', 'For World']);
  const subtitle = useRef('');
  const content = useRef('');

  function submitArticle(event) {
    event.preventDefault()
    const article = {
      coverUrl: coverUrl.current.value,
      dateCreated: Date.now(),
      title: title.current.value,
      tags: tags,
      subtitle: subtitle.current.value,
      content: content.current.value,
      numFavourites: 0,
    }
    props.onAddArticle(article);
  }

  function updateCoverImage() {
    setCoverImage(coverUrl.current.value)
  }

  return (
    <SimpleGrid
      cols={2}
      spacing="lg"
      breakpoints={[
        { maxWidth: 755, cols: 1, spacing: 'sm' },
      ]}>
      <div>
        <Image src={coverImage} />
        <TextInput ref={coverUrl} type="url" placeholder="Cover Url" required
          rightSection={
            <ActionIcon size={24} radius="xl" variant="filled">
              <ArrowRight size={18} onClick={updateCoverImage} />
            </ActionIcon>
          } />
      </div>
      <form onSubmit={submitArticle}>
        <TextInput ref={title} type="text" placeholder="Title" variant="unstyled" size="xl" required />
        <TextInput ref={subtitle} type="text" placeholder="Subtitle" variant="unstyled" size="lg" required />
        <MultiSelect placeholder="Tags" data={tags} searchable creatable
          getCreateLabel={(query) => `+ Create ${query}`}
          onCreate={(query) => setTags((current) => [...current, query])}
          nothingFound="Nothing found..." variant="unstyled" size="lg" />
        <JsonInput
          ref={content}
          placeholder="Content"
          formatOnBlur
          autosize
          minRows={4}
          variant="unstyled"
          required
        />
        <Button type="submit">Add</Button>
      </form>
    </SimpleGrid>
  )
}