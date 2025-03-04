import adminModel from "../models/adminRegisterModel.js";

export const adminRegisterData = async (req, res) => {
  const Admin = await new adminModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    await Admin.save();
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};
