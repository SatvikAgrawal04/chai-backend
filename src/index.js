// require('dotenv).config{path: './env'}
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection FAILED !!! ", err);
  });

/*
FIRST APPROACH
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/
