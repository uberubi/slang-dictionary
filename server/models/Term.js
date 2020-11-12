const { model, Schema } = require("mongoose");

const termSchema = new Schema({
  title: String,
  text: String,
  createdAt: String,
  username: String,
  cursor: String,
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
});

module.exports = model("Term", termSchema);
