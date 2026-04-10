import { config } from "../config/config.js";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const sendTokenResponse = async (user, res, message) => {
  const token = jwt.sign({ id: user._id }, config.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });

  res.cookie("token", token);

  res.status(200).json({
    message,
    success: true,
    user: {
      id: user._id,
      email: user.email,
      contact: user.contact,
      fullname: user.fullname,
      role: user.role,
    },
  });
};

export const registerUser = async (req, res) => {
  const { email, contact, password, fullname } = req.body;

  try {
    // Check if user already exists
    const existingUser = await userModel.findOne({
      $or: [{ email }, { contact }],
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = await userModel.create({
      email,
      contact,
      password,
      fullname,
    });

    await sendTokenResponse(user, res, "User registered successfully");
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
