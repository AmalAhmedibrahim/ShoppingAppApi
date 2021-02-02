const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("About", aboutSchema);
