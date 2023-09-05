const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, minLength: 11, unique: true },
  username: { type: String, required: true, minLength: 4, unique: true },
  password: { type: String, required: true, minLength: 4 },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
