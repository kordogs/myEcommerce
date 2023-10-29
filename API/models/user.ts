import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  profilePic: { type: String },
  email: { type: String, required: true, minLength: 4, unique: true },
  username: { type: String, required: true, minLength: 4, unique: true },
  password: { type: String, required: true, minLength: 4 },
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
