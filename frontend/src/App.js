import "./App.css";
import Navbar from "./components/navbar/navbar";
import CircularGallery from "./components/gallery/gallery";
import { useRef } from "react";
import VariableProximity from "./components/heading/heading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signin/signin";
import SignUp from "./pages/signup/signup";
import AdminLogin from "./pages/admin/adminlogin";
import AdminRegister from "./pages/admin/adminregister";
import Dashboard from "./pages/dashboard/dashboard";

export default function App() {
  const containerRef = useRef(null);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div
                  className="main-heading"
                  ref={containerRef}
                  style={{ position: "relative" }}
                >
                  <VariableProximity
                    label={
                      "Streamlining Faculty Self-Appraisal & Career Progression"
                    }
                    className={"variable-proximity-demo"}
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={100}
                    falloff="linear"
                  />
                </div>
                <div style={{ height: "600px", position: "relative" }}>
                  <CircularGallery
                    bend={3}
                    textColor="#ffffff"
                    borderRadius={0.05}
                  />
                </div>
              </>
            }
          />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
