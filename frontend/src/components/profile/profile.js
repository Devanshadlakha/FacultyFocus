import "./profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile-form">
        <div className="profile-form-left">
          <p className="title">User Profile</p>
          <hr />
          <div className="info-inputs">
            <p>Name:</p>
            <p>Laala Ji</p>
          </div>
          <div className="info-inputs">
            <p>Phone Number:</p>
            <p>+91 9174628462</p>
          </div>
          <div className="info-inputs">
            <p>E-mail:</p>
            <p>laalaji@hohoho.com</p>
          </div>
          <div className="info-inputs">
            <p>Year of Joining:</p>
            <p>2004</p>
          </div>
          <div className="info-inputs">
            <p>Designation:</p>
            <p>Senior Professor</p>
          </div>
          <div className="info-inputs">
            <p>Department ID:</p>
            <p>BS-202</p>
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
            src="https://t3.ftcdn.net/jpg/03/15/66/92/360_F_315669239_tvFWEffY96UtU2xT5uccdSlIJ2s0E9Ux.jpg"
            alt=""
            width="300px"
            className="profile-photo"
          />
        </div>
      </div>
    </div>
  );
}
