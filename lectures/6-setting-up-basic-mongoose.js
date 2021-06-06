// * lecture 83
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// setup a model
const User = mongoose.model('User', {
  name: { type: String },
  age: { type: Number },
});

// create an instance of model
const me = new User({
  name: 'Deekayy',
  age: 'true',
});

// save model to database
// * me.save() returns a promise
me.save()
  .then((me) => {
    console.log(me);
  })
  .catch((error) => {
    console.log('Error!', error);
  });
