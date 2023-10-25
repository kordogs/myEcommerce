import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  image: { type: String },
  productName: { type: String, required: true, minLength: 4 },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String },
});

const productModel = mongoose.model("product", productSchema);

export default productModel;
