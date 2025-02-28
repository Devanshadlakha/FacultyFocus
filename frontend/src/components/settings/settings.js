import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <form className="settings-form">
        <div className="settings-form-left">
          <p className="title">Profile Details</p>
          <div className="info-inputs">
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="DD/MM/YY" />
          </div>
          <div className="info-inputs">
            <input type="text" placeholder="Designation" />
          </div>
          <div className="info-inputs">
            <input type="text" placeholder="Educational Qualification" />
          </div>
          <div className="info-inputs">
            <input type="text" placeholder="Gender" />
            <input type="text" placeholder="Category" />
          </div>
          <div className="info-inputs">
            <input type="text" placeholder="Year of Joining" />
            <input type="text" placeholder="Department ID" />
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
      <button>SUBMIT</button>
    </div>
  );
}
