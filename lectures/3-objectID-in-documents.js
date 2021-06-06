// CRUD
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = `mongodb://127.0.0.1:27017`;
const databaseName = `task-manager`;

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('unable to connect to database!');
    }

    // specify the database
    const db = client.db(databaseName);

    // insert a document to the collection
    db.collection('users').insertOne(
      {
        _id: id,
        name: 'Roshan',
        age: 25,
      },
      (error, result) => {
        if (error) {
          return console.log('Unable to insert user');
        }

        console.log(result.ops);
      }
    );
  }
);
