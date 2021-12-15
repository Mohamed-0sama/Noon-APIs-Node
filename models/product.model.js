const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    titleAr: { type: String, unique: true },
    desc: { type: String, required: true },
    descAr: { type: String },
    imageSrc: { type: String, required: true, default: "productdefault.png" },
    quantity: { type: Number, required: true },
    categories: { type: Array },
    categoriesAr: { type: Array },
    subCat: { type: String },
    subCatAr: { type: String },
    brand: { type: String },
    brandAr: { type: String },
    size: { type: Array },
    sizeAr: { type: Array },
    color: { type: Array },
    colorAr: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
