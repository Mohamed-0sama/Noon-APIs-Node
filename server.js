require("dotenv").config();
require("./db");
const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const imageStorage = require("./helpers/imageStorage");
const port = process.env.PORT || 6000;

//Routers
const authRouter = require("./routers/auth.router");
const userRouter = require("./routers/user.router");
const productRouter = require("./routers/product.router");
const cartRouter = require("./routers/cart.router");
const orderRouter = require("./routers/order.router");
const imageUploaderRouter = require("./routers/imageUploader");
const categoryRouter = require("./routers/category.router");
const productRatingRouter = require("./routers/productRating.router");

//Middlewares & Resources
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/ratings", productRatingRouter);
app.use(
  "/api/Upload",
  multer({ storage: imageStorage }).single("image"),
  imageUploaderRouter
);

app.listen(port, () => {
  console.log(`App is running and listening on port ${port}`);
});
