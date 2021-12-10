const categories = require("../models/category.model");

exports.getCategory = async (req, res) => {
  try {
    const category = await categories.findById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllCategory = async (req, res) => {
  const qCategory = decodeURIComponent(req.query.category);
  try {
    let category;
    let categoryStr;
    category = await categories.find();
    categoryStr = category.map((c) => {
      return c.mainCat;
    });

    if (qCategory === "all") {
      res.status(200).json(categoryStr);
    } else {
      res.status(200).json(category);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getSubCategory = async (req, res) => {
  const qCategory = decodeURIComponent(req.query.category);
  let category;
  try {
    category = await categories.find({
      mainCat: {
        $in: [qCategory],
      },
    });

    res.status(200).json(category[0].subCat);
  } catch (err) {
    res.status(500).json(err);
  }
};
