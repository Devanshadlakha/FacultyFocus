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
  yoj: {
    type: Number,
  },
  phoneno: {
    type: Number,
  },
  designation: {
    type: String,
  },
  deptid: {
    type: Number,
  },
});

const userDataModel = mongoose.models.User || mongoose.model("User", userDataSchema);
export default userDataModel;
