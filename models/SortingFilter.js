const mongoose = require("mongoose");

const SortingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Sorting", SortingSchema);
