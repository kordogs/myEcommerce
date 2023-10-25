export const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

app.use(cors({ origin: process.env.ORIGIN, credentials: true }));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("connected to database");
  } catch (error) {
    console.log("failed to connect:", error);
  }
};

connectDB();

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");

app.use("/", authRoutes);
app.use("/", userRoutes);
app.use("/", productRoutes);

app.listen(PORT, () => {
  console.log(`listening to http://localhost:${PORT}`);
});
