import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email addres' });
      return;
    }

    const client = await MongoClient.connect(
      'mongodb+srv://antho:@cluster0.zqmklxs.mongodb.net/newsLetter?retryWrites=true&w=majority'
    );
    const db = client.db();
    await db.collection('emails').insertOne({ email: userEmail });

    client.close();
    res.status(200).json({ message: 'Signed up!' });
  }
}

export default handler;
