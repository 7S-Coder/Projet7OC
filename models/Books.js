/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */

const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  imageUrl: { type: String, required: true },
  year: { type: Number, required: true },
});

module.exports = mongoose.model("Book", bookSchema);
