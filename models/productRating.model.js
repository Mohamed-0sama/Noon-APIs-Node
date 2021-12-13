const mongoose = require("mongoose");

const ProductRatingSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true },
    rating: [
      {
        userId: String,
        comment: String,
        value: Number,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductRating", ProductRatingSchema);
