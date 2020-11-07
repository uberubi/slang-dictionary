const { model, Schema } = require("mongoose");

const termSchema = new Schema({
  title: String,
  text: String,
  createdAt: String,
  username: String,
  cursor: String
});

module.exports = model("Term", termSchema);