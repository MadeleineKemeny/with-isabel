const mongoose = require('mongoose');
const db = require('../models');

// This file deletes the existing users and creates new ones

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/CDCDB", { useNewUrlParser: true }
);

const seedUser = [
  {
    email: "jenine.ellis@gmail.com",
    password: "Test1234",
    userType: "Admin"
  }

];


db.User
  .remove({})
  .then(() => db.User.collection.insertMany(seedUser))
  .then(data => {
    console.log(data.result.n + " User records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
