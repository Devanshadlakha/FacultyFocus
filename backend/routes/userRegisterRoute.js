import express from "express";
import { registerData } from "../controllers/userRegisterController.js";
import { fetchUserData } from "../controllers/userdataController.js";
const userRegisterRouter = express.Router();

// userRegisterRouter.post("/user-signup", registerData);
userRegisterRouter.post("/user-signup", () => {
    registerData(),
    fetchUserData()
});

export default userRegisterRouter;
