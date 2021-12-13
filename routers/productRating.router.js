const router = require("express").Router();
const productRating = require("../controllers/productRating.controller");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/Authorization");

//EndPoints
router.post("/", productRating.createProductRating);
router.get("/", productRating.getAllProductsRatings);
router.get("/find/:id", productRating.getRatings);

module.exports = router;
