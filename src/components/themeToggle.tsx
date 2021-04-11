import {useContext} from "react";
import AppContext from "../AppContext";

const ThemeToggler = () => {
    const {state, updateState} = useContext(AppContext);

    const toggleThemeMode = () => {
        state.isDarkMode = !state.isDarkMode;
        updateState({...state});
    }
    return(
        <div className="px-4 text-3xl">
            <button onClick = {toggleThemeMode}>
                <span title = "switch theme">
                    {state.isDarkMode ? "☀️" : "🌙"}
                </span>
            </button>
        </div>
    );
}

export default ThemeToggler;