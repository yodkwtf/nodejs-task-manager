// * lecture 85

const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// setup a model
const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    },
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is unvalid');
      }
    },
  },
});

// create an instance of model
const me = new User({ name: 'Deekayy  ', email: '48DURGESH.KUMAR@GMAIL.COM' });

// save to database
me.save()
  .then((me) => {
    console.log(me);
  })
  .catch((error) => {
    console.log('Error!', error);
  });
