import userModel from "../models/userRegisterModel.js";

export const loginData = async (req, res) => {
  console.log(req.body);
  const User = await userModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (User) {
    return res.status(200).json({
      success: true,
    });
  }
  return res.status(400).json({
    success: false,
  });
};
