const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

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
