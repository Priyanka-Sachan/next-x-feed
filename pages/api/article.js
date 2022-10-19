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

async function getRelatedArticles(tags) {
  try {
    const client = await MongoClient.connect(
      'mongodb+srv://author:UqQHha2e12qbius6@cluster0.58skw0h.mongodb.net/articles?retryWrites=true&w=majority'
    )
    const db = client.db()
    const articlesCollection = db.collection('articles')
    const aggCursor = articlesCollection
      .aggregate([
        { $match: { tags: { $in: tags } } },
        { $unwind: '$tags' },
        {
          $group: {
            _id: {
              _id: '$_id',
              title: '$title',
              subtitle: '$subtitle',
              coverUrl: '$coverUrl',
              dateCreated: '$dateCreated',
            },
            matches: { $sum: 1 },
          },
        },
        { $sort: { matches: -1 } },
      ])
      .limit(3)
    const articles = []
    await aggCursor.forEach((listing) => {
      const result = listing._id
      const article = {
        id: result._id.toString(),
        coverUrl: result.coverUrl,
        dateCreated: result.dateCreated,
        title: result.title,
        subtitle: result.subtitle,
      }
      articles.push(article)
    })
    client.close()
    return articles
  } catch (e) {
    console.log(e)
  }
}

export { getArticleById, getRelatedArticles }
