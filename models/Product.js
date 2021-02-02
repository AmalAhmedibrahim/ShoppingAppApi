const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    originalPrice: {
      type: Number,
      required: true,
    },
    SalePrice: {
      type: Number,
      required: false,
    },
    imageURL: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    paymentTypes: {
      type: [String],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Product", productSchema);
