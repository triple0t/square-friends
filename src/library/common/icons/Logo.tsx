import { useContext } from "react";
import AppContext from "../../../AppContext";
import LogoDark from "./LogoDark";
import LogoLight from "./LogoLight";

const LogoIcon = () => {
  const { state } = useContext(AppContext);

  return <>{state.isDarkMode ? <>{LogoDark}</> : <>{LogoLight} </>}</>;
};

export default LogoIcon;
