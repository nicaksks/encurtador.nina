const { Schema, model } = require("mongoose");
const generate = require('../utils/generate');

const url = new Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: () => generate(6)
  }
});

module.exports = model("url", url);