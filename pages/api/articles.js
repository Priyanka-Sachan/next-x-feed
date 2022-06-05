import { MongoClient } from 'mongodb';

export default async function getArticles() {
  try {
    const client = await MongoClient.connect('mongodb+srv://author:UqQHha2e12qbius6@cluster0.58skw0h.mongodb.net/articles?retryWrites=true&w=majority');
    const db = client.db();
    const articlesCollection = db.collection('articles');
    const result = await articlesCollection.find().toArray();
    client.close();
    const articles = result.map((article) => ({
      id: article._id.toString(),
      coverUrl: article.coverUrl,
      dateCreated: article.dateCreated,
      title: article.title,
      tags: article.tags,
      subtitle: article.subtitle,
      content: article.content,
      numFavourites: article.numFavourites
    }))
    return articles;
  } catch (e) {
    console.log(e)
  }
}

export async function getArticleIds() {
  try {
    const client = await MongoClient.connect('mongodb+srv://author:UqQHha2e12qbius6@cluster0.58skw0h.mongodb.net/articles?retryWrites=true&w=majority');
    const db = client.db();
    const articlesCollection = db.collection('articles');
    const result = await articlesCollection.find({ _id: 1 }).toArray();
    client.close();
    const ids = result.map((article) => ({
      id: article._id.toString()
    }))
    return ids;
  } catch (e) {
    console.log(e)
  }
}


