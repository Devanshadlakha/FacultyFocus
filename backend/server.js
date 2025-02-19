import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRegisterRouter from "./routes/userRegisterRoute.js";
import userLoginRouter from "./routes/userLoginRoute.js";
const app = express();
const PORT = 8000;

dotenv.config(); // Load .env file
app.use(cors());
app.use(express.json());
console.log(process.env.MONGODB_URI);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.error("DB connection error: ", err));

// API Endpoints
app.use("/", userRegisterRouter);
app.use("/", userLoginRouter);

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
