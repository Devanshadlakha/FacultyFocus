import express from "express";
import { loginData } from "../controllers/userLoginController.js";
const userLoginRouter = express.Router();

userLoginRouter.post("/user-login", loginData);

export default userLoginRouter;
