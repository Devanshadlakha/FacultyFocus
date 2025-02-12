import AdminLoginStep, { Step } from "./adminloginstep";
import { Link } from "react-router-dom";

export default function AdminLogin() {
  return (
    <AdminLoginStep
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
        <h2>Welcome back to TogetherFaculty!</h2>
        <p>Please enter your login credentials.</p>
        <p>
          New user?
          <Link to="/admin-register">
            <span> Create Account</span>
          </Link>
        </p>
      </Step>
      <Step>
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
        <h2>Welcome back!</h2>
        <p>Please continue with your journey.</p>
      </Step>
    </AdminLoginStep>
  );
}
