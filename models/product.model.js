const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    imageSrc: { type: String, required: true, default: "productdefault.png" },
    quantity: { type: Number, required: true },
    categories: { type: Array },
    subCat: { type: String },
    brand: { type: String },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
