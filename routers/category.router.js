// const router = require("express").Router();
// const express = require('express');
const router = require("express").Router();
// const router = express.Router();
const category = require("../controllers/category.controller");
// const {
//   verifyToken,
//   verifyTokenAndAuthorization,
//   verifyTokenAndAdmin,
// } = require("../middlewares/Authorization");

//EndPoints
// router.post("/", verifyTokenAndAdmin, product.createProduct);
router.get("/", category.getAllCategory);
router.get("/subCat", category.getSubCategory);
router.get("/find/:id", category.getCategory);
// router.put("/edit/:id", verifyTokenAndAdmin, product.updateProduct);
// router.delete("/delete/:id", verifyTokenAndAdmin, product.deleteProduct);

module.exports = router;
