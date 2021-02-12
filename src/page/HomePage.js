import React, { useEffect, useReducer } from "react";
import HeaderContent from "../components/HeaderContent";
import { langReducer, LangContext } from "../provider/langContext";
const init = () => {
  const datalang = require("../assets/lang/es.json");
  return datalang;
};

const HomePage = () => {
  const [datalang, dispatch] = useReducer(langReducer, {}, init);

  return (
    <LangContext.Provider value={{ datalang, dispatch }}>
      <HeaderContent></HeaderContent>
    </LangContext.Provider>
  );
};

export default HomePage;
