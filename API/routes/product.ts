import express from "express";
import { Request, Response, NextFunction } from "express";
import productModel from "../models/product";
import multer from "multer";

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Uploads folder in the root directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename
  },
});

const upload = multer({ storage: storage });

router.post(
  "/createProduct",
  upload.single("image"),
  async (req: Request, res: Response, next: NextFunction) => {
    const { productName, price, description, category } = req.body;
    const image = req.file?.filename;
    try {
      const newProduct = new productModel({
        image,
        productName,
        price,
        description,
        category,
      });

      await newProduct.save();
      return res.status(200).json("product save");
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
