import express from "express";
import { Request, Response, NextFunction } from "express";
import productModel from "../models/product";
import multer from "multer";

const date = Date.now();
const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/products"); // Uploads folder in the root directory
  },
  filename: function (req, file, cb) {
    cb(null, date + file.originalname); // Unique filename
  },
});

const upload = multer({ storage: storage });

router.post(
  "/createProduct",
  upload.single("image"),
  async (req: Request, res: Response, next: NextFunction) => {
    const { productName, price, description, category, sellerId } = req.body;
    const image = req.file?.filename;
    if (!image) {
      return res.status(400).json("no image provided");
    }
    try {
      const newProduct = new productModel({
        image,
        productName,
        price,
        description,
        category,
        sellerId,
      });

      await newProduct.save();
      return res.status(200).json("product save");
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/getProduct",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await productModel.find({});
      return res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/viewProduct/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const product = await productModel.findById({ _id: id });
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/yourProduct/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params;
    try {
      const product = await productModel.find({ sellerId: userId });
      if (!product) {
        return res.status(404).json("Product not found");
      }
      return res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
