const mongoose = require("mongoose");

const paymentTypesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Payment Types", paymentTypesSchema);
