import react from "react";
import { useState } from "react";
import Profile from "../../components/profile/profile";
import Settings from "../../components/settings/settings";
import MenuUsage from "../../components/menu/menuusage";
import PdfDownload from "../../components/pdf/pdf";
import Entry from "../../components/entry/entry";
import Attendance from "../../components/chart/attendancechart";
import "./dashboard.css";

export default function Dashboard({ FullNav, showFullNav }) {
  const [currState, setcurrState] = useState("Profile");
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name");
  const email = urlParams.get("email");
  return (
    <div className="dashboard">
      {currState === "Profile" ? (
        <Profile name={name} email={email} />
      ) : currState === "Settings" ? (
        <Settings />
      ) : currState === "Download" ? (
        <PdfDownload name={name} />
      ) : currState === "Add New Entry" ? (
        <Entry />
      ) : currState === "Performance" ? (
        <>
          <Attendance />
        </>
      ) : (
        <></>
      )}
      <MenuUsage
        setcurrState={setcurrState}
        FullNav={FullNav}
        showFullNav={showFullNav}
      />
    </div>
  );
}
