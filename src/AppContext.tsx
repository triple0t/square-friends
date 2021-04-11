import { AppStateInterface } from "@library/common/types/AppState";
import { createContext } from "react";
import AppState from "./AppState";

const AppContext = createContext({
  state: AppState,
  updateState: (state: AppStateInterface) => {},
});
export default AppContext;
