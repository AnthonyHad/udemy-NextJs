import { MongoClient } from 'mongodb';

// /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://antho:WQ3Dlp67j91uFNjf@cluster0.zqmklxs.mongodb.net/test2?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({
      message: 'Meetup Inserted!',
    });
  }
}

export default handler;
