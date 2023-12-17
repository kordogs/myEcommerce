import { NextFunction, Response, Request as ExpressRequest } from "express";
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
import bcrypt from "bcryptjs";
import multer from "multer";
import userModel from "../models/user";
import dotenv from "dotenv";
import productModel from "../models/product";
dotenv.config();

const secret = process.env.SECRET;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/profilePicture");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

interface Request extends ExpressRequest {
  cookies: {
    [key: string]: string;
  };
}

router.get("/user", async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) {
    res.status(401).json("no token provided");
  }
  try {
    const user = await jwt.verify(token, process.env.SECRET, {});
    if (!user) {
      res.status(404).json("jwt error: not found");
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.put(
  "/updateProfile",
  upload.single("image"),
  async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.cookies;
    const { email, password, username } = req.body;
    const image = req.file?.filename;

    const user = await jwt.verify(token, process.env.SECRET, {});
    if (!user) {
      return res.status(404).json("jwt error: not found");
    }
    const currentUser = await userModel.findById(user.id);
    if (!currentUser) {
      return res.status(404).json("not found");
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json("Email already exist");
    }

    const existingUsername = await userModel.findOne({ username });
    if (existingUsername) {
      return res.status(400).json("Username Already Exist");
    }

    try {
      const hashedPassword = password
        ? await bcrypt.hash(password, 10)
        : currentUser.password;

      let updateFields: any = {
        email: email || currentUser.email,
        password: hashedPassword,
        username: username || currentUser.username,
      };

      if (image) {
        updateFields.profilePic = image;
      }

      await currentUser.updateOne(updateFields);

      const checkCurrentUser = await userModel.findById(user.id);

      const updateToken = await jwt.sign(
        {
          id: checkCurrentUser?.id,
          profilePic: image || currentUser.profilePic,
          email: checkCurrentUser?.email,
          username: checkCurrentUser?.username,
        },
        secret,
        {}
      );
      res.cookie("token", updateToken, { httpOnly: true });
      return res.status(200).json("successfully updated");
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/addToCart/:productId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { productId } = req.params;
    if (!productId) {
      return res.status(404).json("product not found");
    }
    const { token } = req.cookies;
    if (!token) {
      return res.status(404).json("cookies error");
    }
    try {
      const user = await jwt.verify(token, process.env.SECRET, {});
      if (!user) {
        return res.status(404).json("jwt error: not found");
      }
      const currentUser = await userModel.findById({ _id: user.id });
      if (!currentUser) {
        return res.status(404).json("no user found");
      }
      await currentUser.updateOne({ $addToSet: { cart: productId } });
      return res.status(200).json("added to cart");
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/getCart",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { token } = req.cookies;
      if (!token) {
        return res.status(404).json("cookies error");
      }
      const user = await jwt.verify(token, process.env.SECRET, {});
      if (!user) {
        return res.status(404).json("jwt error: not found");
      }
      const currentUser = await userModel.findById(user.id);
      const cartProductsIds = currentUser?.cart;
      const cartProducts = await productModel.find({
        _id: { $in: cartProductsIds },
      });
      return res.status(200).json(cartProducts);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/deleteCart/:productId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { token } = req.cookies;
      if (!token) {
        return res.status(404).json("cookies error");
      }
      const user = await jwt.verify(token, process.env.SECRET, {});
      if (!user) {
        return res.status(404).json("jwt error: not found");
      }
      const { productId } = req.params;
      if (!productId) {
        return res.status(404).json("product not found");
      }

      const currentUser = await userModel.findById(user.id);
      await currentUser?.updateOne({ $pull: { cart: productId } });
      return res.status(200).json("item deleted");
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/addToFavorites/:productId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { token } = req.cookies;
      if (!token) {
        return res.status(404).json("cookies error");
      }
      const user = await jwt.verify(token, process.env.SECRET, {});
      if (!user) {
        return res.status(404).json("jwt error: not found");
      }
      const { productId } = req.params;
      if (!productId) {
        return res.status(404).json("product not found");
      }

      const currentUser = await userModel.findById(user.id);
      await currentUser?.updateOne({ $addToSet: { favorites: productId } });
      return res.status(200).json("added to favorites");
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/getFavorites",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { token } = req.cookies;
      if (!token) {
        return res.status(404).json("cookies error");
      }
      const user = await jwt.verify(token, process.env.SECRET, {});
      if (!user) {
        return res.status(404).json("jwt error: not found");
      }
      const currentUser = await userModel.findById(user.id);
      const favoriteProductsIds = currentUser?.favorites;
      const favoriteProducts = await productModel.find({
        _id: { $in: favoriteProductsIds },
      });
      return res.status(200).json(favoriteProducts);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/deleteFavorites/:productId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { token } = req.cookies;
      if (!token) {
        return res.status(404).json("cookies error");
      }
      const user = await jwt.verify(token, process.env.SECRET, {});
      if (!user) {
        return res.status(404).json("jwt error: not found");
      }
      const { productId } = req.params;
      if (!productId) {
        return res.status(404).json("product not found");
      }

      const currentUser = await userModel.findById(user.id);
      await currentUser?.updateOne({ $pull: { favorites: productId } });
      return res.status(200).json("item deleted");
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
