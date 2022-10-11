import { MongoClient } from 'mongodb'

export default async function getTags() {
  try {
    const client = await MongoClient.connect(
      'mongodb+srv://author:UqQHha2e12qbius6@cluster0.58skw0h.mongodb.net/articles?retryWrites=true&w=majority'
    )
    const db = client.db()
    const articlesCollection = db.collection('articles')
    const tags = await articlesCollection.distinct('tags')
    client.close()
    return tags
  } catch (e) {
    console.log(e)
  }
}
