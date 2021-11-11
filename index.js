const express = require("express");
const app = express();
const dotenv = require("dotenv")
const port = 4000; 

dotenv.config()

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
//const stripeRoute = require("./routes/stripe");
//const cors = require("cors");



app.use(express.json());

require("./db");
// make a middleware to set who can use books or any condition u want 


//app.use(cors());

app.use("/api/auth", authRoute);// recommended to put register and login in a different file to make it more secure
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
//app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || port, () => {
  console.log("listening on port " + port);
  console.log(port)
});
