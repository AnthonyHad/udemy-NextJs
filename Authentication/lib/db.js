import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://antho:an0cI7ktt3FGC39R@cluster0.zqmklxs.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
