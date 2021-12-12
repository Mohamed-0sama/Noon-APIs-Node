const router = require("express").Router();
const cart = require("../controllers/cart.controller");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/Authorization");

//EndPoints
router.post("/", verifyToken, cart.createCart);
router.get("/", verifyTokenAndAdmin, cart.getAllUsersCarts);
router.get("/find/:id", verifyTokenAndAuthorization, cart.getCart);
router.put("/edit/:id", verifyTokenAndAuthorization, cart.updateCart);
router.delete("/delete/:id", verifyTokenAndAuthorization, cart.deleteCart);

module.exports = router;
