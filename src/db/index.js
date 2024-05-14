import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { app } from "../app.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    app.on("error", (error) => {
      console.error(error);
      throw error;
    });
    console.log(
      `\nMongoDB connected \n DB_HOST: ${connectionInstance.connection.host}}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED: " + error);
    process.exit(1);
  }
};

export default connectDB;
