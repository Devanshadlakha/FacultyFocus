import express from "express";
import { userUpdate } from "../controllers/userUpdateController.js";
const userUpdateRouter = express.Router();

userUpdateRouter.post("/user-update", userUpdate);

export default userUpdateRouter;
