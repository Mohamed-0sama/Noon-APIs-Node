const router = require("express").Router();
const product = require("../controllers/product.controller");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/Authorization");

//EndPoints
router.post("/", verifyTokenAndAdmin, product.createProduct);
router.get("/", product.getAllProducts);
router.get("/find/:id", product.getProduct);
router.put("/edit/:id", verifyTokenAndAdmin, product.updateProduct);
router.delete("/delete/:id", verifyTokenAndAdmin, product.deleteProduct);

module.exports = router;
