import userModel from "../models/user";
import bcrypt from "bcryptjs";
import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";

const router = express.Router();
dotenv.config();

router.post(
  "/signup",
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, username, password } = req.body;
    try {
      const existingEmail = await userModel.findOne({ email });
      if (existingEmail) {
        return res.status(409).json("Email Already Exists");
      }
      const existingUsername = await userModel.findOne({ username });
      if (existingUsername) {
        return res.status(409).json("Username Already Exists");
      }

      const newUser = new userModel({
        email,
        username,
        password: await bcrypt.hash(password, 10),
      });

      await newUser.save();
      return res.status(200).json("success on creating user please wait");
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    try {
      const existingUser = await userModel.findOne({ email });
      if (!existingUser) {
        return res.status(404).json("Wrong Email or Password");
      }
      const passOk = await bcrypt.compare(password, existingUser.password);
      if (!passOk) {
        return res.status(404).json("Wrong Email or Password");
      }

      const secret = process.env.SECRET;
      if (!secret) {
        throw new Error("SECRET is not defined in the environment variables");
      }
      const token = jwt.sign(
        {
          email: existingUser.email,
          username: existingUser.username,
          id: existingUser._id,
          profilePic: existingUser.profilePic,
        },
        secret,
        {}
      );
      res.cookie("token", token).json({
        email: existingUser.email,
        username: existingUser.username,
        id: existingUser._id,
        profilePic: existingUser.profilePic,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post("/logout", (req: Request, res: Response, next: NextFunction) => {
  return res.cookie("token", "").json("you have been logout");
});

module.exports = router;
