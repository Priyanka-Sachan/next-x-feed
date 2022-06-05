import { useRef, useState } from "react";
import { TextInput, Button, MultiSelect } from '@mantine/core';

export default function NewArticle() {
  const coverUrl = useRef('');
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
    // props.onAddArticle(article);
  }

  return (
    <form onSubmit={submitArticle}>
      <TextInput ref={coverUrl} type="url" label="Cover Url" required />
      <TextInput ref={title} type="text" label="Title" required />
      <MultiSelect
        label="Tags"
        data={tags}
        searchable
        creatable
        getCreateLabel={(query) => `+ Create ${query}`}
        onCreate={(query) => setTags((current) => [...current, query])}
        nothingFound="Nothing found..."
      />
      <TextInput ref={subtitle} type="text" label="Subtitle" required />
      <TextInput ref={content} type="text" label="Content" required />
      <Button type="submit">Add</Button>
    </form>
  )
}