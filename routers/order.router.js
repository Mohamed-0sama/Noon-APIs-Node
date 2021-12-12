const router = require("express").Router();
const order = require("../controllers/order.controller");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/Authorization");

//EndPoints
router.post("/", verifyToken, order.createOrder);
router.get("/", verifyTokenAndAdmin, order.getAllUsersOrders);
router.get("/income", verifyTokenAndAdmin, order.getMonthlyIncome);
router.get("/find/:id", verifyTokenAndAuthorization, order.getOrder);
router.put("/edit/:id", verifyTokenAndAdmin, order.updateOrder);
router.delete("/delete/:id", verifyTokenAndAdmin, order.deleteOrder);

module.exports = router;
