import { useState } from "react";
import "./settings.css";

export default function Settings({ email, setcurrState }) {
  const [phoneno, setPhoneNo] = useState("");
  const [dob, setDOB] = useState("");
  const [designation, setDesignation] = useState("");
  const [education, setEducation] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [yearofjoin, setYearofjoin] = useState("");
  const [deptID, setDeptID] = useState("");

  const handleSubmit = async () => {
    await fetch("http://localhost:8000/user-update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, yearofjoin: yearofjoin }),
    });
    console.log(yearofjoin);
    setcurrState("Profile");
  };

  return (
    <div className="settings">
      <form className="settings-form">
        <div className="settings-form-left">
          <p className="title">Profile Details</p>
          <div className="info-inputs">
            <input
              type="text"
              placeholder="Phone Number"
              onChange={(e) => setPhoneNo(e.target.value)}
            />
            <input
              type="text"
              placeholder="DD/MM/YY"
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
          <div className="info-inputs">
            <input
              type="text"
              placeholder="Designation"
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
          <div className="info-inputs">
            <input
              type="text"
              placeholder="Educational Qualification"
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>
          <div className="info-inputs">
            <input
              type="text"
              placeholder="Gender"
              onChange={(e) => setGender(e.target.value)}
            />
            <input
              type="text"
              placeholder="Category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="info-inputs">
            <input
              type="text"
              placeholder="Year of Joining"
              onChange={(e) => {
                console.log(yearofjoin);
                setYearofjoin(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Department ID"
              onChange={(e) => setDeptID(e.target.value)}
            />
          </div>
        </div>
        <div className="settings-form-right">
          <img
            src="https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg"
            alt=""
            width="300px"
            className="profile-photo"
          />
          <button>Edit Picture</button>
        </div>
      </form>
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}
