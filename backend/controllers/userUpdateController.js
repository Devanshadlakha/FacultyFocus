import userDataModel from "../models/userdataModel.js";

export const userUpdate = async (req, res) => {
  console.log(req.body);
  const User = await userDataModel.findOne({
    email: req.body.email,
  });
  if (User) {
    User.yearofjoin = req.body.yearofjoin;
    console.log(User.yearofjoin);
    User.save();
    return res.status(200).json({
      success: true,
    });
  }
  return res.status(400).json({
    success: false,
  });
};
