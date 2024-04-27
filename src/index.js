import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config();
const port = process.env.PORT || 3000;

connectDB();
