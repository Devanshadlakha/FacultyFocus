import react from "react";
import { useState } from "react";
import Profile from "../../components/profile/profile";
import Settings from "../../components/settings/settings";
import MenuUsage from "../../components/menu/menuusage";
import PdfDownload from "../../components/pdf/pdf";
import Entry from "../../components/entry/entry";
import Attendance from "../../components/chart/attendancechart";
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
      ) : currState === "Add New Entry" ? (
        <Entry />
      ) : currState === "Performance" ? (
        <>
          <Attendance />
        </>
      ) : (
        <></>
      )}
      <MenuUsage setcurrState={setcurrState} />
    </div>
  );
}
