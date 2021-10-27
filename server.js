const express = require("express");
const app = express();
const port = 5000;
require("./db");

//Middlewares
app.use(express.json());

app.listen(port, () => {
  console.log("listining to port 5000");
});
