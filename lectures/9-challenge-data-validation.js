// * lecture 86

const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// TODO - Challenhe One (for Users)

// // setup a model
// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },

//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     validate(value) {
//       if (value.length <= 6) {
//         throw new Error('Password needs to be greater than 6 characters');
//       }
//       if (value.toLowerCase() === 'password') {
//         throw new Error("Password can't be *password*");
//       }
//     },
//   },

//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error('Age must be a positive number');
//       }
//     },
//   },

//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error('Email is unvalid');
//       }
//     },
//   },
// });

// // create an instance of model
// const me = new User({
//   name: 'Tanu  ',
//   password: '   ssd        ',
//   email: '48DURGESH.KUMAR@GMAIL.COM',
// });

// // save to database
// me.save()
//   .then((me) => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log('Error!', error);
//   });

// TODO - Challenge Two (for Tasks)

const Task = mongoose.model('Task', {
  task: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const newTask = new Task({ task: 'Start NodeJS Course       ' });

newTask
  .save()
  .then(() => console.log(newTask))
  .catch((error) => console.log(error));
