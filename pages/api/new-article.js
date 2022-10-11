import { MongoClient } from 'mongodb'

export default async function addNewArticle(req, res) {
  if (req.method == 'POST') {
    const data = req.body
    try {
      const client = await MongoClient.connect(
        'mongodb+srv://author:UqQHha2e12qbius6@cluster0.58skw0h.mongodb.net/articles?retryWrites=true&w=majority'
      )
      const db = client.db()
      const articlesCollection = db.collection('articles')
      const result = await articlesCollection.insertOne(data)
      console.log(result)
      client.close()
      res.status(201).json({ message: 'Article added.' })
    } catch (e) {
      console.log(e)
    }
  }
}
