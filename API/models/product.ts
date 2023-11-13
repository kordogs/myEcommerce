import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  image: { type: String },
  productName: { type: String, required: false, minLength: 4 },
  price: { type: Number, required: false },
  description: { type: String },
  category: { type: String },
  sellerId: { type: String },
});

const productModel = mongoose.model("product", productSchema);

export default productModel;
