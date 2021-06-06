// ! lecture 80
// CRUD
const { MongoClient, ObjectID } = require('mongodb');

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

    // // TODO - store promise in the cariable
    // const updatePromise = db.collection('users').updateOne(
    //   // target using the id
    //   {
    //     _id: new ObjectID('60b0437dbcfdf046aca3faed'),
    //   },
    //   {
    //     // using update operator to update
    //     $inc: {
    //       age: -1,
    //     },
    //     $set: {
    //       name: 'Durgesh',
    //     },
    //   }
    // );

    // updatePromise
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // ? CHALLENGE-TIME
    db.collection('tasks')
      .updateMany({ completed: true }, { $set: { completed: false } })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }
);
