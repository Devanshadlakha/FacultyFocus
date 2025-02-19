import Menu from "./menu";
import {
  VscAccount,
  VscSettingsGear,
  VscGraph,
  VscNewFile,
  VscCloudDownload,
  VscSignOut,
} from "react-icons/vsc";

const items = [
  {
    icon: <VscAccount size={18} />,
    label: "Profile",
    onClick: () => alert("Profile!"),
  },
  {
    icon: <VscCloudDownload size={24} />,
    label: "Download",
    onClick: () => alert("Home!"),
  },
  {
    icon: <VscNewFile size={18} />,
    label: "Add New Entry",
    onClick: () => alert("Home!"),
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
  {
    icon: <VscSignOut size={18} />,
    label: "SignOut",
    onClick: () => alert("SignOut!"),
  },
];

export default function MenuUsage({ setcurrState, FullNav, showFullNav }) {
  return (
    <Menu
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
      setcurrState={setcurrState}
      FullNav={FullNav}
      showFullNav={showFullNav}
    />
  );
}
