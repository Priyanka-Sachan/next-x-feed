import { MongoClient, ObjectId } from 'mongodb'

async function getArticleById(id) {
  try {
    const client = await MongoClient.connect(
      'mongodb+srv://author:UqQHha2e12qbius6@cluster0.58skw0h.mongodb.net/articles?retryWrites=true&w=majority'
    )
    const db = client.db()
    const articlesCollection = db.collection('articles')
    const result = await articlesCollection.findOne({ _id: ObjectId(id) })
    client.close()
    const article = {
      id: result._id.toString(),
      coverUrl: result.coverUrl,
      dateCreated: result.dateCreated,
      title: result.title,
      tags: result.tags,
      subtitle: result.subtitle,
      content: result.content,
      numFavourites: result.numFavourites,
    }
    return article
  } catch (e) {
    console.log(e)
  }
}

export { getArticleById }
