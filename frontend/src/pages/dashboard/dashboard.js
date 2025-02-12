import react from "react";
import { useState } from "react";
import Profile from "../../components/profile/profile";
import Settings from "../../components/settings/settings";
import MenuUsage from "../../components/menu/menuusage";
import PdfDownload from "../../components/pdf/pdf";
import "./dashboard.css";

export default function Dashboard() {
  const [currState, setcurrState] = useState("Profile");
  return (
    <div className="dashboard">
      {currState === "Profile" ? (
        <Profile />
      ) : currState === "Settings" ? (
        <Settings />
      ) : currState === "Download" ? (
        <PdfDownload />
      ) : (
        <></>
      )}
      <MenuUsage setcurrState={setcurrState} />
    </div>
  );
}
