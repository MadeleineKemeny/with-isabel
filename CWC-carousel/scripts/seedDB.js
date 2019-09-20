// This file empties the Wines collection in the db and inserts the wines got by scraping

const mongoose = require("mongoose");
const db = require("../models");
const winescrape = require("./winescrape");

// Read environment variables from .env
// Please make sure you have a ".env" file in the Fantastic4 folder
require('dotenv').config()

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/CDCDB", { useNewUrlParser: true });

winescrape.scrapeAll()
  .then((wineSeed) => {
  // wineSeed is an array of wines obtained from scraping wine.com
  db.Wine
    .deleteMany({})
    .then(() => db.Wine.collection.insertMany(wineSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.log(err);
      process.exit(1);
    })
});
