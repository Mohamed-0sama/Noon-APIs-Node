const router = require("express").Router();
router.post("/", (req, res, next) => {
  const imageUrl = req.file.filename;
  res.json({
    imageUrl,
  });
});

module.exports = router;
