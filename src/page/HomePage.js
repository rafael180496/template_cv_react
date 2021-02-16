import React, { useReducer } from "react";
import BodyContent from "../components/BodyContent";
import HeaderContent from "../components/HeaderContent";
import { langReducer, LangContext } from "../provider/langContext";
const init = () => {
  const datalang = require("../assets/lang/en.json");
  return { locale: "ES", datalang: datalang };
};

const HomePage = () => {
  const [data, dispatch] = useReducer(langReducer, {}, init);
  return (
    <LangContext.Provider value={{ data, dispatch }}>
      <HeaderContent datalang={data.datalang}></HeaderContent>
      <BodyContent datalang={data.datalang}> </BodyContent>
      <HeaderContent
        isfooter={true}
        datalang={data.datalang}
      ></HeaderContent>
    </LangContext.Provider>
  );
};

export default HomePage;
