import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const [lng, setLng] = useState<boolean>(false);

  const handleLngChange = () => {
    if (lng) {
      i18n.changeLanguage("ko");
      setLng(!lng);
    } else {
      i18n.changeLanguage("en");
      setLng(!lng);
    }
  };

  return (
    <div className="App">
      <div>{t("hi")}</div>
      <div>
        <button onClick={handleLngChange}>{lng ? "한글" : "영어"}</button>
      </div>
    </div>
  );
}

export default App;
