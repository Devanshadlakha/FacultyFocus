import express from "express";
import { adminLoginData } from "../controllers/adminLoginController.js";
const adminLoginRouter = express.Router();

adminLoginRouter.post("/admin-login", adminLoginData);

export default adminLoginRouter;
