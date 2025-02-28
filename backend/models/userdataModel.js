import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  yearofjoin: {
    type: String,
  },
  phoneno: {
    type: String,
  },
  gender: {
    type: String,
  },
  education: {
    type: String,
  },
  designation: {
    type: String,
  },
  category: {
    type: String,
  },
  deptID: {
    type: String,
  },
  dob: {
    type: String,
  },
});

const userDataModel =
  mongoose.models.UserData || mongoose.model("UserData", userDataSchema);
export default userDataModel;
