const router = require("express").Router();
const user = require("../controllers/user.controller");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/Authorization");

//EndPoints
router.get("/", verifyTokenAndAdmin, user.getAllUsers);
router.get("/stats", verifyTokenAndAdmin, user.getUserStats);
router.get("/find/:id", verifyTokenAndAuthorization, user.getUser);
router.put("/edit/:id", verifyTokenAndAuthorization, user.updateUser);
router.put(
  "/editPassword/:id",
  verifyTokenAndAuthorization,
  user.updatePassword
);
router.delete("/delete/:id", verifyTokenAndAuthorization, user.deleteUser);

module.exports = router;
