import express from "express";
import { registerData } from "../controllers/userRegisterController.js";
const userRegisterRouter = express.Router();

userRegisterRouter.post("/user-signup", registerData);

export default userRegisterRouter;
