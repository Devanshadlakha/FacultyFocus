import AdminRegisterStep, { Step } from "./adminregisterstep";
import { Link } from "react-router-dom";

export default function AdminRegister() {
  return (
    <AdminRegisterStep
      initialStep={1}
      onStepChange={(step) => {
        console.log(step);
      }}
      onFinalStepCompleted={() => console.log("All steps completed!")}
      backButtonText="Previous"
      nextButtonText="Next"
    >
      <Step>
        <h4>ADMIN</h4>
        <h2>Welcome to TogetherFaculty!</h2>
        <p>Start managing your faculty!</p>
        <p>
          Existing user?
          <Link to="/admin-login">
            <span> Login</span>
          </Link>
        </p>
      </Step>
      <Step>
        <h3>Name:</h3>
        <input
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <h3>E-mail:</h3>
        <input
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          placeholder="Your E-mail"
        />
        <h3>Password:</h3>
        <input
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          placeholder="Your Password"
        />
      </Step>
      <Step>
        <h2>All done!</h2>
        <p>You can now manage your faculty family.</p>
      </Step>
    </AdminRegisterStep>
  );
}
