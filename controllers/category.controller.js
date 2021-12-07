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
  // const qNew = req.query.new;
  const qCategory = req.query.category;
  // const qSubCat = req.query.subCat;
  // const qBrand = req.query.brand;
  try {
    let category;
    let categoryStr
    category = await categories.find();
    categoryStr = category.map((c) => {
      return c.mainCat
    })

    if (qCategory === "all") {
      res.status(200).json(categoryStr);
    }
    // else {
    //   category = await categories.find();
    // }
    else {
      res.status(200).json(category);
    }

  } catch (err) {
    res.status(500).json(err);
  }
};

  // if (qNew) {
      //   category = await categories.find().sort({ createdAt: -1 }).limit(5);
      // } 

        // = await categories.find({
        //   mainCat: {
        //     $in: [qCategory],
        //   },
        // });

      // else if (qSubCat) {
      //   category = await categories.find({
      //     subCat: {
      //       $in: [qSubCat],
      //     },
      //   });
      // } 
      // else if (qBrand) {
      //   category = await categories.find({
      //     brands: {
      //       $in: [qBrand],
      //     },
      //   });
      // } 