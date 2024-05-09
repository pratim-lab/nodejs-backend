import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: [true, "username is already exist"],
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: [true, "Email id is already exist"],
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
