import AppContext from "./AppContext";
import { useState } from "react";
import Header from "./layout/header";
import Main from "./layout/main";
import appState from "./AppState";
import { storageInstace } from "@utilities/storage";
import { AppStateInterface } from "@library/common/types/AppState";

function App() {
  const [state, update] = useState(storageInstace.getState() ?? appState);
  const pipeUpdate = (state: AppStateInterface) => {
    storageInstace.setState(state);
    update(state);
  };

  const v = { state: state, updateState: pipeUpdate };

  return (
    <AppContext.Provider value={v}>
      <div className={`App ${state.isDarkMode ? "dark" : ""}`}>
        <Header />
        <Main />
      </div>
    </AppContext.Provider>
  );
}

export default App;
