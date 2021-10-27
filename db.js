const mongoose = require("mongoose");
// const MongoAtlas ="";
const MongoLocal = "mongodb://localhost:27017/NoonDB";
mongoose
  .connect(MongoLocal)

  .then(() => {
    console.log("success connect to database");
  })
  .catch((err) => {
    console.log(err);
  });
