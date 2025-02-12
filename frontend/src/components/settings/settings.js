import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <form className="settings-form">
        <div className="settings-form-left">
          <p className="title">Edit Profile</p>
          <div className="info-inputs">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="info-inputs">
            <input type="tel" placeholder="Phone Number" />
          </div>
          <div className="info-inputs">
            <input type="email" placeholder="Email" />
          </div>
          <div className="info-inputs">
            <input type="text" placeholder="Address" />
          </div>
          <div className="info-inputs">
            <input type="text" placeholder="Age" />
            <input type="text" placeholder="Year of Joining" />
          </div>
          <div className="info-inputs">
            <input type="text" placeholder="Institute ID" />
            <input type="text" placeholder="Department ID" />
          </div>
        </div>
        <div className="settings-form-right">
          <img
            src="https://t3.ftcdn.net/jpg/03/15/66/92/360_F_315669239_tvFWEffY96UtU2xT5uccdSlIJ2s0E9Ux.jpg"
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
