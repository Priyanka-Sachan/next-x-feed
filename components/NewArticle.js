import { useEffect, useRef, useState } from "react";
import { TextInput, Button, MultiSelect, ActionIcon, SimpleGrid, Textarea } from '@mantine/core';
import { ArrowRight } from 'tabler-icons-react';
import RichTextEditor from './RichTextEditor';
import styles from './NewArticle.module.css'

export default function NewArticle(props) {
  const coverUrl = useRef('');
  const [coverImage, setCoverImage] = useState('');
  useEffect(() => {
    setCoverImage(coverUrl.current.value);
  }, [coverUrl.current.value]);
  const title = useRef('');
  const [allTags, setAllTags] = useState(['Head to Head', 'Months Past', 'History Matters', 'Out of the Margins', 'Behind the Times']);
  const [tags, setTags] = useState([]);
  const subtitle = useRef('');
  const [content, setContent] = useState('');

  function submitArticle(event) {
    event.preventDefault()
    const article = {
      coverUrl: coverUrl.current.value,
      dateCreated: Date.now(),
      title: title.current.value,
      tags: tags,
      subtitle: subtitle.current.value,
      content: content,
      numFavourites: 0,
    }
    // console.log(article)
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
        <img className={styles.coverImage} src={coverImage} />
        <TextInput ref={coverUrl}
          type="url"
          placeholder="Cover Url"
          required
          rightSection={
            <ActionIcon size={24} radius="xl" variant="filled">
              <ArrowRight size={18} onClick={updateCoverImage} />
            </ActionIcon>
          } />
      </div>
      <form onSubmit={submitArticle}>
        <Textarea
          ref={title}
          placeholder="Title"
          styles={{
            input: {
              fontSize: '2em',
              fontFamily: 'Lora',
              fontStyle: 'italic',
              fontWeight: '600'
            },
          }}
          variant="unstyled"
          autosize
          required />
        <Textarea
          ref={subtitle}
          placeholder="Subtitle"
          styles={{
            input: {
              fontSize: '1.5em',
              fontFamily: 'Lora',
              color: 'grey'
            },
          }}
          variant="unstyled"
          autosize
          required />
        <MultiSelect data={allTags}
          placeholder="Tags"
          searchable
          creatable
          value={tags}
          onChange={setTags}
          getCreateLabel={(query) => `+ Create ${query}`}
          onCreate={(query) => setAllTags((current) => [...current, query])}
          nothingFound="Nothing found..." variant="unstyled" size="lg" />
        <RichTextEditor
          value={content}
          onChange={setContent}
          styles={{
            root: { border: 'none', minHeight: '70vh', fontSize: '20px', fontFamily: 'Lato' },
            toolbarInner: { justifyContent: 'center' },
          }}
          readOnly={false} />
        <Button type="submit" fullWidth variant="default">Add</Button>
      </form>
    </SimpleGrid>
  )
}