const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_LOCAL_URL)

  .then(() => {
    console.log("success connect to database");
  })
  .catch((err) => {
    console.log(err);
  });
