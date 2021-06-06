// lecture 78
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

    // * find one document
    // db.collection('users').findOne(
    //   // { name: 'Tanu', age: 20 }
    //   { _id: new ObjectID('60b0456423832822e8b576d0') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('Unable to fetch the user');
    //     }
    //     console.log(user);
    //   }
    // );

    // * find multiply documents (returns a cursor)
    // db.collection('users')
    //   .find({ age: 19 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // TODO - Challenge to read last task with id and then all completed tasks
    db.collection('tasks').findOne(
      { _id: new ObjectID('60b046a56d58225d80f32894') },
      (error, task) => {
        if (error) {
          return console.log('Unable to find the task');
        }
        console.log(task);
      }
    );

    db.collection('tasks')
      .find({ completed: true })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);
