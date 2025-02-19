import react from "react";
import { useState } from "react";
import Profile from "../../components/profile/profile";
import Settings from "../../components/settings/settings";
import OptionsUsage from "../../components/options/optionsusage";
import PdfDownload from "../../components/pdf/pdf";
import Entry from "../../components/entry/entry";
import Attendance from "../../components/chart/attendancechart";
import "./portal.css";

export default function Portal({ FullNav, showFullNav }) {
  const [currState, setcurrState] = useState("Profile");
  return (
    <div className="portal">
      {currState === "Profile" ? (
        <Profile />
      ) : currState === "Settings" ? (
        <Settings />
      ) : currState === "Performance" ? (
        <>
          <Attendance />
        </>
      ) : (
        <></>
      )}
      <OptionsUsage
        setcurrState={setcurrState}
        FullNav={FullNav}
        showFullNav={showFullNav}
      />
    </div>
  );
}
