// lecture 76
// CRUD
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = `mongodb://127.0.0.1:27017`;
const databaseName = `task-manager`;

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
    // db.collection('users').insertOne(
    //   {
    //     name: 'Deekayy',
    //     age: 19,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Deekayy',
    //       age: 19,
    //     },
    //     {
    //       name: 'Tanu',
    //       age: 20,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert docs');
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // CHALLENGE
    db.collection('tasks').insertMany(
      [
        { task: 'HTML & CSS', completed: true },
        { task: 'NodeJs', completed: false },
        { task: 'Javascript', completed: true },
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to add the docs');
        }

        console.log(result.ops);
      }
    );
  }
);
