import { useState } from "react";
import "./profile.css";

export default function Profile({ name, email }) {
  const [Name, setName] = useState(name);
  const [Email, setEmail] = useState(email);
  const [Phone, setPhone] = useState("");
  const [yearofjoin, setYearofjoin] = useState("");
  const [designation, setDesignation] = useState("");
  const [deptID, setDeptID] = useState("");

  return (
    <div className="profile">
      <div className="profile-form">
        <div className="profile-form-left">
          <p className="title">User Profile</p>
          <hr />
          <div className="info-inputs">
            <p>Name:</p>
            <p>{Name}</p>
          </div>
          <div className="info-inputs">
            <p>Phone Number:</p>
            <p>{Phone}</p>
          </div>
          <div className="info-inputs">
            <p>E-mail:</p>
            <p>{Email}</p>
          </div>
          <div className="info-inputs">
            <p>Year of Joining:</p>
            <p>{yearofjoin}</p>
          </div>
          <div className="info-inputs">
            <p>Designation:</p>
            <p>{designation}</p>
          </div>
          <div className="info-inputs">
            <p>Department ID:</p>
            <p>{deptID}</p>
          </div>
          <hr />
          <div className="info-inputs">
            <p>Lectures Taken:</p>
            <p>32</p>
          </div>
          <div className="info-inputs">
            <p>Projects Led:</p>
            <p>7</p>
          </div>
          <div className="info-inputs">
            <p>Research Published:</p>
            <p>2</p>
          </div>
          <hr />
        </div>
        <div className="profile-form-right">
          <img
            src="https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg"
            alt=""
            width="300px"
            className="profile-photo"
          />
        </div>
      </div>
    </div>
  );
}
