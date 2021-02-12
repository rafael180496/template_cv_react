import { createContext } from "react";
export const LangContext = createContext();

export const langReducer = (state = {}, action) => {
  const dataes = require("../assets/lang/es.json");
  const dataen = require("../assets/lang/en.json");
  switch (action.lang) {
    case "es":
      return {
        ...action.payload,
        datalang: dataes,
      };

    case "en":
      return {
        ...action.payload,
        datalang: dataen,
      };

    default:
      return state;
  }
};
