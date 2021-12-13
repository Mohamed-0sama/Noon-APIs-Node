const ProductRating = require("../models/productRating.model");

//CREATE
exports.createProductRating = async (req, res) => {
  const newProductRating = new ProductRating(req.body);

  try {
    const savedProductRating = await newProductRating.save();
    res.status(200).json(savedProductRating);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ALL PRODUCTS RATINGS
exports.getAllProductsRatings = async (req, res) => {
  try {
    const productRatings = await ProductRating.find();
    res.status(200).json(productRatings);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET PRODUCT RATINGS
exports.getRatings = async (req, res) => {
  try {
    const productRatings = await ProductRating.aggregate([
      {
        $match: {
          productId: req.params.id,
        },
      },
      {
        $unwind: {
          path: "$rating",
        },
      },
      {
        $group: {
          _id: {
            productId: "$productId",
          },
          avg_rating: {
            $avg: "$rating.value",
          },
        },
      },
      {
        $project: {
          _id: 0,
          productId: "$_id.productId",
          avg_rating: "$avg_rating",
        },
      },
    ]);
    res.status(200).json(productRatings);
  } catch (err) {
    res.status(500).json(err);
  }
};
