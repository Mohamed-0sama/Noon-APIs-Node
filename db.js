const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL)

  .then(() => {
    console.log("success connect to database");
  })
  .catch((err) => {
    console.log(err);
  });
