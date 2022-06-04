import { useRef } from "react";

export default function NewArticle(props) {
  const coverUrl = useRef('');
  const title = useRef('');
  const tags = useRef([]);
  const subtitle = useRef('');
  const content = useRef('');

  function submitArticle(event) {
    event.preventDefault()
    const article = {
      coverUrl: coverUrl.current.value,
      dateCreated: Date.now(),
      title: title.current.value,
      tags: ['default-tags', 'new']/*tags.current.value*/,
      subtitle: subtitle.current.value,
      content: content.current.value,
      numFavourites: 0,
    }
    props.onAddArticle(article);
  }

  return (
    <form onSubmit={submitArticle}>
      <p>CoverUrl</p>
      <input ref={coverUrl} type="url" name="coverUrl"></input>
      <p>Title</p>
      <input ref={title} type="text" name="title"></input>
      <p>Tags</p>
      <input ref={tags} type="text" name="tags"></input>
      <p>Subtitle</p>
      <input ref={subtitle} type="text" name="subtitle"></input>
      <p>Content</p>
      <input ref={content} type="text" name="content"></input>
      <button type="submit">Add</button>
    </form>
  )
}