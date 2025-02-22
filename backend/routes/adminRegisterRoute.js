import express from "express";
import { adminRegisterData } from "../controllers/adminRegisterController.js";
const adminRegisterRouter = express.Router();

adminRegisterRouter.post("/admin-signup", adminRegisterData);

export default adminRegisterRouter;
