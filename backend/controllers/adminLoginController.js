import adminModel from "../models/adminRegisterModel.js";

export const adminLoginData = async (req, res) => {
  console.log(req.body);
  const Admin = await adminModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (Admin) {
    return res.status(200).json({
      success: true,
    });
  }
  return res.status(400).json({
    success: false,
  });
};
//hello my name is devansh