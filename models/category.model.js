const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
        id: {type: Number, required: true, unique: true},
      mainCat: { type: String, required: true, unique: true},
      subCat: {type: Array},
      brands: {type: Array},
      brandsImg: {type: Array},
      catImg: {type: Array},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
