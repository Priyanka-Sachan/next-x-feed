export default function NewArticle() {
  return (
    <div>
      <p>Id</p>
      <input type="text" name="id"></input>
      <p>DateCreated</p>
      <input type="text" name="dateCreated"></input>
      <p>Favourites</p>
      <input type="text" name="numFavourites"></input>
      <p>CoverUrl</p>
      <input type="text" name="coverUrl"></input>
      <p>Title</p>
      <input type="text" name="title"></input>
      <p>Subtitle</p>
      <input type="text" name="subtitle"></input>
      <p>Content</p>
      <input type="text" name="content"></input>
      <button>Add</button>
    </div>
  )
}