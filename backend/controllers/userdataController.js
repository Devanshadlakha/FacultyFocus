import userDataModel from "../models/userdataModel.js";

export const fetchUserData = async (req, res) => {
    console.log(req.body);
    const User = await new userDataModel({
      name: req.body.name,
      email: req.body.email,
    });
    try {
      await User.save();
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
