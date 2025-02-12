import Stepper, { Step } from "./stepper";
import { Link } from "react-router-dom";
import "./signin.css";

export default function SignIn() {
  return (
    <Stepper
      initialStep={1}
      onStepChange={(step) => {
        console.log(step);
      }}
      onFinalStepCompleted={() => console.log("All steps completed!")}
      backButtonText="Previous"
      nextButtonText="Next"
    >
      <Step>
        <h2>Welcome back to TogetherFaculty!</h2>
        <p>Please enter your login credentials.</p>
        <p>
          New user?
          <Link to="/register">
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
    </Stepper>
  );
}
