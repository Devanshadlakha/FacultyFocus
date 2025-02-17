import Options from "./options";
import {
  VscAccount,
  VscSettingsGear,
  VscGraph,
  VscNewFile,
  VscCloudDownload,
} from "react-icons/vsc";

const items = [
  {
    icon: <VscAccount size={18} />,
    label: "Profile",
    onClick: () => alert("Profile!"),
  },
  {
    icon: <VscGraph size={18} />,
    label: "Performance",
    onClick: () => alert("Performance!"),
  },
  {
    icon: <VscSettingsGear size={18} />,
    label: "Settings",
    onClick: () => alert("Settings!"),
  },
];

export default function OptionsUsage({ setcurrState }) {
  return (
    <Options
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
      setcurrState={setcurrState}
    />
  );
}
