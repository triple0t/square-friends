import AppContext from "../AppContext";
import { ChangeEvent, useContext } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { state, updateState } = useContext(AppContext);
  const { i18n } = useTranslation();

  const handleOnChange = (data: ChangeEvent<HTMLSelectElement>) => {
    state.lang = data.target.value;
    i18n.changeLanguage(data.target.value, (err, t) => {
      if (!err) {
        updateState({ ...state });
      }
    });
  };

  return (
    <div>
      <select
        name="lang"
        id="lang"
        defaultValue={state.lang}
        onChange={handleOnChange}
      >
        <option value="en"> English </option>
        <option value="fr"> French </option>
      </select>
    </div>
  );
};

export default LanguageSelector;
